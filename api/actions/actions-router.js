// Write your "actions" router here!

const express = require("express");
const router = express.Router();
const Actions = require("./actions-model");
const { checkActionId } = require("./actions-middleware");

router.get("/api/actions", (req, res) => {
  Actions.get(req.query)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

router.get("/api/actions/:id", checkActionId, (req, res) => {
  const idVar = req.params.id;
  Actions.get(idVar)
    .then((action) => {
      if (!action) {
        res.status(404).json("Action not found");
      } else {
        res.status(200).json.action;
      }
    })
    .catch((err) => {
      res.status(500).json({ message: " Error retrieving action" });
    });
});

router.post("/api/actions", (req, res) => {
  actions
    .insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error adding action",
      });
    });
});

router.put("/api/actions/:id", checkActionId, (req, res) => {
  const changes = req.body;
  Actions.update(req.params.id, changes)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "The action could not be found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating the action" });
    });
});

router.delete("/api/actions/:id", checkActionId, (req, res) => {
  Actions.remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "The action has been deleted" });
      } else {
        res.status(404).json({ message: "The action could not be found" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error removing action",
      });
    });
});

module.exports = router;
