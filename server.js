const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

// Socket implementation starts here

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  var http = require("http").createServer(server);
  var io = require("socket.io")(http);

  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  io.on("connection", socket => {
    console.log("a user connected");
  });

  http.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
