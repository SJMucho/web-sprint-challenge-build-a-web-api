// Write your "actions" router here!

const express = require("express");
const router = express.Router();
const Actions = require("./actions-model");
// const { checkActionId } = require("./actions-middleware");

router.get("/api/actions", (req, res) => {
  Actions.get(req.query)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

router.get("/api/actions/:id", (req, res) => {});

router.post("/api/actions", (req, res) => {});

router.put("/api/actions/:id", (req, res) => {});

router.delete("/api/actions/:id", (req, res) => {});

module.exports = router;
