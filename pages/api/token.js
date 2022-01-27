import cheerio from "cheerio";
import Cryptr from "cryptr";

async function modFetch(url, option) {
  return await (await fetch(url))[option]();
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    // Return a "method not allowed" error
    res.status(405).send("Only GET Please");
    return;
  }

  const post = await modFetch(
    `${process.env.DATA_URL}&skip=${Math.floor(Math.random() * 20)}`,
    "json"
  );
  if (!post) res.status(500).send({ message: "error" });

  const data = await modFetch(post[0][process.env.KEY], "text");
  if (!data) res.status(500).send({ message: "error" });

  const $ = cheerio.load(data);
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  const csrfToken = cryptr.encrypt($("#csrf-token")["0"].attribs.value);
  const postingId = cryptr.encrypt($("#posting-id")["0"].attribs.value);

  res.status(200).send({ csrfToken, postingId });
}
