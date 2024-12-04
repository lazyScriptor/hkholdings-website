import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import bcrypt from "bcrypt"; // For password hashing
import jwt from "jsonwebtoken"; // For generating tokens
import dotenv from "dotenv";
import cors from 'cors'
dotenv.config();

const app = express();
const port = 3000;
app.use(cors())
// Middleware to parse JSON
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Update as per your MySQL credentials
  password: "", // Replace with your MySQL password
  database: "hkholdings", // Name of your database
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});
app.get('/', (req, res) => {
  res.send('hello world')
})
// User Registration (Create User)
app.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ error: "Email, password, and role are required" });
  }

  // Check if the role is valid
  if (role !== "basic" && role !== "admin") {
    return res.status(400).json({ error: "Invalid role. Must be 'basic' or 'admin'" });
  }

  // Check if the email already exists
  const checkEmailSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkEmailSql, [email], async (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length > 0) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Hash the password
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const createUserSql =
        "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";
      db.query(createUserSql, [email, hashedPassword, role], (err, result) => {
        if (err) {
          console.error("Error creating user:", err);
          return res.status(500).json({ error: "Internal server error" });
        }
        res.status(201).json({ message: "User created successfully" });
      });
    } catch (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});

// Login endpoint (same as before)
app.post("/login", (req, res) => {
  console.log("object")
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  });
});




// GET all blogs
app.get("/blogs", (req, res) => {
  const sql = "SELECT * FROM blogs";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch data" });
      return;
    }
    res.json(results);
  });
});

// CREATE a new blog
app.post("/blogs", (req, res) => {
  const { title, shortDescription, image } = req.body;
  const sql = "INSERT INTO blogs (title, shortDescription, image, inserted_at) VALUES (?, ?, ?, NOW())";
  db.query(sql, [title, shortDescription, image], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Failed to insert data" });
      return;
    }
    res.json({ message: "Blog created successfully", blogId: result.insertId });
  });
});

// EDIT a blog
app.put("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, shortDescription, image } = req.body;
  const sql = "UPDATE blogs SET title = ?, shortDescription = ?, image = ? WHERE id = ?";
  db.query(sql, [title, shortDescription, image, id], (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
      res.status(500).json({ error: "Failed to update data" });
      return;
    }
    res.json({ message: "Blog updated successfully" });
  });
});

// DELETE a blog
app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM blogs WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data:", err);
      res.status(500).json({ error: "Failed to delete data" });
      return;
    }
    res.json({ message: "Blog deleted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
