import redis from "redis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST Please");
  } else if (!req.body && typeof req.body !== "string") {
    return res.status(400).send("Missing Parameter");
  }

  const client = redis.createClient({
    host: process.env.NEXT_PUBLIC_REDIS_HOST,
    port: process.env.NEXT_PUBLIC_REDIS_PORT,
    password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
  });

  const event = req.body;

  client.incr(event);
  client.get(event, (err, data) => {
    if (err) {
      return res.status(500).send({ message: `Error logging ${event} event.` });
    }
    console.log(err ? err : data);
  });
  client.quit();

  return res.status(200).send({ message: `Logged ${event} event.` });
}
