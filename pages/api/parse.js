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

  const {
    resume: { path },
  } = files;
  const formData = new FormData();
  formData.append("resume", fs.createReadStream(path));

  fetch("https://jobs.lever.co/parseResume", {
    method: "POST",
    headers: {
      "sec-ch-ua":
        '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      "sec-ch-ua-mobile": "?0",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
      Origin: "https://jobs.lever.co",
      Referer: "https://jobs.lever.co/parse",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Accept-Language": "en-US,en;q=0.9",
    },
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Response not OK. ", response, response.headers.raw());
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
