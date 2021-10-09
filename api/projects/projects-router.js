// Write your "projects" router here!
const express = require("express");
const router = express.Router();
const Projects = require("./projects-model");

router.get("/api/projects", (req, res) => {
  Projects.get(req.query)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// router.get("/api/projects/:id", (req, res) => {
//   const {id} = 
// });

// router.post("/api/projects", (req, res) => {});

// router.put("/api/projects/:id", (req, res) => {});

// router.delete("/api/projects/:id", (req, res) => {});

// router.get("/api/projects/:id/actions", (req, res) => {});

module.exports = router;
