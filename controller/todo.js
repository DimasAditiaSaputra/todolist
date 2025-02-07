import { v4 as uuidv4 } from "uuid";
import db from "../database/db.js";

// get todo
export const getTodoList = (req, res) => {
  const sql = "SELECT * FROM table_todolist";

  try {
    db.query(sql, (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ message: "Database error", error });
      }

      return res.status(200).json(results);
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// create todo
export const createTodo = (req, res) => {
  const { todo } = req.body;
  const uuid = uuidv4(); // Generate UUID unik

  if (!todo) {
    return res.status(400).json({ message: "Todo is required" });
  }

  try {
    const sql = "INSERT INTO table_todolist (uuid, todo) VALUES (?, ?)";
    const values = [uuid, todo];

    db.query(sql, values, (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ message: "Database error", error });
      }

      res.status(201).json({
        message: "Todo created successfully",
      });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
// update todo
export const updateTodo = (req, res) => {
  const { todo } = req.body;
  const { uuid } = req.params;

  if (!todo && !uuid) {
    return res.status(400).json({ message: "Todo is not found" });
  }

  try {
    const sql = "UPDATE table_todolist SET todo = ? WHERE uuid = ?";
    const values = [todo, uuid];

    db.query(sql, values, (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ message: "Database error", error });
      }

      return res.status(201).json({ message: "Todo updated successfully" });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// delete todo
export const deleteTodo = (req, res) => {
  const { uuid } = req.params;

  if (!uuid) {
    return res.status(400).json({ message: "Todo is not found" });
  }

  try {
    const sql = "DELETE FROM table_todolist WHERE uuid = ?";

    db.query(sql, uuid, (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ message: "Database error", error });
      }

      return res.status(200).json({ message: "deleting is successfully" });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
