// add middlewares here related to actions

const checkActionId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const action = await Actions.findById(id);
    if (!action) {
      res.status(404).json({ message: `No action: ${id}` });
    } else {
      req.action = action;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};

module.exports = {
  checkActionId,
};
