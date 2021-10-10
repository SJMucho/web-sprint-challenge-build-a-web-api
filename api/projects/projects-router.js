// Write your "projects" router here!
const express = require("express");
const router = express.Router();
const Projects = require("./projects-model");

router.get("/projects", (req, res) => {
  Projects.get(req.query)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/projects/:id", (req, res) => {
  Projects.get(req.params.id)
    .then((projects) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "Project not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving project",
      });
    });
});

router.post("/projects", (req, res) => {});

router.put("/projects/:id", (req, res) => {});

router.delete("/projects/:id", (req, res) => {});

router.get("/projects/:id/actions", (req, res) => {});

module.exports = router;
