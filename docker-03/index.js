const express = require("express");
const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: "redis-server",

    port: 6379,
  },
});

const app = express();

app.get("/", async (req, res) => {
  await client.connect();

  let number = await client.get("number");

  if (number === null) {
    number = 0;
  }

  res.send("숫자가 1씩 올라갑니다. 숫자: " + number);

  await client.set("number", parseInt(number) + 1);

  await client.disconnect();
});

app.listen(8081, () => {
  console.log("Server is listening 8081...");
});
