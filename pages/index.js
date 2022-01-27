import DataDisplay from "../components/DataDisplay";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import { useAnalytics } from "../hooks";
import { REVALIDATE_DELAY } from "../constants";

import cheerio from "cheerio";

async function modFetch(url, option) {
  return (await fetch(url))[option]();
}

export async function getStaticProps(context) {
  const post = await modFetch(
    `${process.env.DATA_URL}&skip=${Math.floor(Math.random() * 100)}`,
    "json"
  );
  if (!post) res.status(500).send({ message: "error" });

  const data = await modFetch(post[0][process.env.KEY], "text");
  if (!data) res.status(500).send({ message: "error" });

  const $ = cheerio.load(data);
  const csrfToken = $("#csrf-token")["0"].attribs.value;
  const postingId = $("#posting-id")["0"].attribs.value;

  return {
    props: { csrfToken, postingId },
    revalidate: REVALIDATE_DELAY,
  };
}

export default function Home({ csrfToken, postingId }) {
  useAnalytics("Page View");
  return (
    <>
      <Header />
      <TopBar />
      <DataDisplay csrfToken={csrfToken} postingId={postingId} />
    </>
  );
}
