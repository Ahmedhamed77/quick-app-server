import express from "express";

import {
  getAllTasks,
  createTak,
  updateTask,
  deleteTask,
  getTask,
} from "../controllers/tasks";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTak);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
