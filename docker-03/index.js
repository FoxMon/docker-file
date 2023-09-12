const express = require("express");
const redis = require("redis");

// Create redis client
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

const app = express();

client.set("number", 0);

app.get("/", (req, res) => {
  client.set("number", Number.parseInt(client.get("number") + 1));
  res.send(`숫자: ${client.get("number")}`);
});

app.listen(8081, () => {
  console.log("Server listening 8081...");
});
