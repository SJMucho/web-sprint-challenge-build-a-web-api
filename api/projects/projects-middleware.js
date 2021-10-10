// add middlewares here related to projects
const Projects = require("./projects-model");

const checkProjectId = async (req, res, next) => {
  const { id } = req.params;
  const project = await Projects.get(id);
  if (!project) {
    res.status(404).json("No project with that ID exists");
  } else {
    req.project = project;
    next();
  }
};

module.exports = {
  checkProjectId,
};
