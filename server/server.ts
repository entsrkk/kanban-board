const express = require("express");
const cors = require("cors");
const db = require("./models/db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: any, res: any) => res.send("Hello"));

//create task
app.post("/create", (req: any, res: any) => {
  const { title, tag = "todo" } = req.body;
  try {
    db.query(
      "INSERT INTO kanbanboard(title, tag) VALUES (?,?)",
      [title, tag],
      (err: any) => {
        if (err) {
          console.log("error while inserting a kanban into database", err);
          return res.status(400).send();
        }
        return res
          .status(201)
          .json({ message: "new kanban successfully created" });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});
//update task
app.put("/update/:id", (req: any, res: any) => {
  const { id } = req.params;
  const { title, tag = "todo" } = req.body;
  try {
    db.query(
      "UPDATE kanbanboard SET title = ?, tag = ? WHERE id = ?",
      [title, tag, id],
      (err: any, results: any) => {
        if (err) {
          console.error("Error updating kanban task:", err);
          return res.status(400).send("Error updating task");
        }

        return res.status(200).send("Task updated successfully");
      }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
});
//update tag
app.put("/update-tag/:id", (req: any, res: any) => {
  const { id } = req.params;
  const { tag = "todo" } = req.body;
  try {
    db.query(
      "UPDATE kanbanboard SET tag = ? WHERE id = ?",
      [tag, id],
      (err: any, results: any) => {
        if (err) {
          console.error("Error updating kanban tag:", err);
          return res.status(400).send("Error updating tag");
        }

        return res.status(200).send("Task updated successfully");
      }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
});
//delete task
app.delete("/delete/:id", (req: any, res: any) => {
  const { id } = req.params;
  try {
    db.query(
      "DELETE FROM kanbanboard WHERE id = ?",
      [id],
      (err: any, results: any) => {
        if (err) {
          console.log("error while deleting a kanban from database", err);
          return res.status(400).send();
        }

        return res
          .status(200)
          .json({ message: "Kanban task successfully deleted" });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});
//get task
app.get("/kanbanboard", (req: any, res: any) => {
  try {
    db.query("SELECT * FROM kanbanboard", (err: any, results: any) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      return res.status(200).json(results);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

//signup
app.post("/signup", (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    db.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      (err: any, results: any) => {
        if (err) {
          console.log("error while checking for existing email", err);
          return res.status(500).send();
        }

        if (results.length > 0) {
          return res.status(400).json({ message: "Email already in use" });
        }
        db.query(
          "INSERT INTO user(email, password) VALUES (?,?)",
          [email, password],
          (err: any) => {
            if (err) {
              console.log("error while inserting a user into database", err);
              return res.status(400).send();
            }
            return res
              .status(201)
              .json({ message: "New user successfully created" });
          }
        );
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});
//signin
app.post("/signin", (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    db.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      (err: any, results: any) => {
        if (err) {
          console.log("error while checking for existing email", err);
          return res.status(500).send();
        }
        return res.status(200).json({ message: "Sign in successful" });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
