import express from "express";
import {
  getTodoList,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo.js";

const router = express.Router();

router.get("/todo", getTodoList);
router.post("/todo", createTodo);
router.patch("/todo/:uuid", updateTodo);
router.delete("/todo/:uuid", deleteTodo);

export default router;
