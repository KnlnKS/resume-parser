import formidable from "formidable";
import FormData from "form-data";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Return a "method not allowed" error
    res.status(405).send("Only POST Please");
    return;
  }

  const { files } = await new Promise(function (resolve, reject) {
    const form = new formidable.IncomingForm({ keepExtensions: true });
    form.parse(req, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  if (!files.resume.path) {
    res.status(400).send("No resume uploaded!");
    return;
  }

  const formData = new FormData();
  formData.append("resume", fs.createReadStream(files.resume.path));

  fetch("https://jobs.lever.co/parseResume", {
    method: "POST",
    headers: {
      Origin: "https://jobs.lever.co",
      Referer: "https://jobs.lever.co/parse",
    },
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        res.status(response.status).send(response.statusText);
        return;
      } else {
        return response.json();
      }
    })
    .then((response) => {
      if (response) {
        res.json(response);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
