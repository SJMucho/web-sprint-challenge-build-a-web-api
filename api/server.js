const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const actionsRouter = require("./actions/actions-router");
const projectsRouter = require("./projects/projects-router");

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.get("/api/*", (req, res) => {
  res.end({ message: `<h2> sprint challenge ` });
});

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
