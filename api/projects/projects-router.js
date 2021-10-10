// Write your "projects" router here!
const express = require("express");
const router = express.Router();
const Projects = require("./projects-model");
const { checkProjectId } = require("./projects-middleware");

router.get("/projects", (req, res) => {
  Projects.get(req.params)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not find projects" });
    });
});

router.get("/projects/:id", checkProjectId, (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
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

router.post("/projects", (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error adding project",
      });
    });
});

router.put("/projects/:id", checkProjectId, (req, res) => {
  const changes = req.body;
  Projects.update(req.params.id, changes)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "The project could not be found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating the project" });
    });
});

router.delete("/projects/:id", checkProjectId, (req, res) => {
  Projects.remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "The project has been deleted" });
      } else {
        res.status(404).json({ message: "The project could not be found" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error removing project",
      });
    });
});

router.get("/projects/:id/actions", (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then((actions) => {
      if (actions.length > 0) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: "No actions found for this project" });
      }
    })
    .catch((err) => {
      res.status(500).json({ messge: "Error retrieving actions" });
    });
});

module.exports = router;
