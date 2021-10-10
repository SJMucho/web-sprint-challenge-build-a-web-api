const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
server.use(express.json());
const actionsRouter = require("./actions/actions-router.js");
const projectsRouter = require("./projects/projects-router.js");
server.use("api/actions", actionsRouter);
server.use("api/projects", projectsRouter);
server.use(morgan("dev"));
server.use(helmet());

server.get("/api/*", (req, res) => {
  res.send({ message: `<h2> sprint challenge ` });
});

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
