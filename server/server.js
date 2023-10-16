const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();


const moviesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "movies_metadata.json"), "utf8")
);

app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

app.get("/api/movies", (request, response) => {
  console.log("❇️ Received GET request to /api/movies");
  response.json({ data: moviesData });  
});

let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
