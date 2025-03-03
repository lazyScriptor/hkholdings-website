import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs"; // For password hashing
import jwt from "jsonwebtoken"; // For generating tokens
import cors from "cors";
import fs from "fs";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";
import sharp from "sharp";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const app = express();
const port = 3000;
app.use(cors({ origin: "*" })); // Adjust port accordingly

// Middleware to parse JSON
app.use(bodyParser.json());

// Database connection

const db = mysql.createPool({
  host: "162.240.151.180",
  user: "betasltdigitalwe_hkuser",
  password: "hkuser123!@#",
  database: "betasltdigitalwe_betabacksltdigit_hkholdings_new_2",
  waitForConnections: true,
  connectionLimit: 10, // Limit number of connections
  queueLimit: 0,
  acquireTimeout: 10000, // Increase timeout to 10s
  connectTimeout: 10000, // Increase connection timeout
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "hkholdings",
// });

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Create the directory if it doesn't exist
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const { blogId } = req.params;
    cb(null, `blog-${blogId}${path.extname(file.originalname)}`); // Save with blog ID as filename
  },
});
app.use("/uploads", express.static("uploads"));

const upload = multer({ storage });
app.get("/", (req, res) => {
  res.json({ message: "Blog updated successfully" });
  console.log("App is working");
});
app.get("/uploads/:blogId", (req, res) => {
  const blogId = req.params.blogId;
  const filePath = path.join(__dirname, "uploads", `blog-${blogId}.jpeg`);

  // Check if the file exists and send it
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("Image not found.");
    }
  });
});

// Get image by blogId
app.get("/blogs/:blogId/image", (req, res) => {
  const { blogId } = req.params;

  const sql = "SELECT image FROM blogs WHERE id = ?";
  db.query(sql, [blogId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch blog image" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Ensure the image path is correct
    const imageUrl = results[0].image;
    // const imageUrl = imageFileName.startsWith("/uploads")
    //   ? imageFileName
    //   : `/uploads/${imageFileName}`;

    res.json({ imageUrl });
  });
});

// Create an endpoint for image uploads
app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const { blogId } = req.params;
    const processedImagePath = path.join(uploadDir, `blog-${blogId}.jpeg`);

    // Process the image with Sharp
    try {
      console.log("Uploading image...");
      await sharp(req.file.path)
        .resize({ width: 800 }) // Resize as needed
        .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
        .toFile(processedImagePath);
      console.log("Image processed successfully.");
    } catch (err) {
      console.error("Error during image processing:", err);
      return res.status(500).json({ error: "Error during image processing" });
    }

    // Clean up the original uploaded file
    fs.unlinkSync(req.file.path);

    // Respond with the URL of the processed image
    const imageUrl = `/uploads/blog-${blogId}.jpeg`; // Make sure this matches the static file serving path
    res.json({ imageUrl });
  } catch (err) {
    console.error("Error processing image:", err);
    res.status(500).json({ error: "Failed to process image" });
  }
});

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// User Registration (Create User)
// app.post("/register", async (req, res) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//     return res
//       .status(400)
//       .json({ error: "Email, password, and role are required" });
//   }

//   // Check if the role is valid
//   if (role !== "basic" && role !== "admin") {
//     return res
//       .status(400)
//       .json({ error: "Invalid role. Must be 'basic' or 'admin'" });
//   }

//   // Check if the email already exists
//   const checkEmailSql = "SELECT * FROM users WHERE email = ?";
//   db.query(checkEmailSql, [email], async (err, results) => {
//     if (err) {
//       console.error("Error checking email:", err);
//       return res.status(500).json({ error: "Internal server error" });
//     }

//     if (results.length > 0) {
//       return res.status(409).json({ error: "Email already exists" });
//     }

//     // Hash the password
//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);

//       const createUserSql =
//         "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";
//       db.query(createUserSql, [email, hashedPassword, role], (err, result) => {
//         if (err) {
//           console.error("Error creating user:", err);
//           return res.status(500).json({ error: "Internal server error" });
//         }
//         res.status(201).json({ message: "User created successfully" });
//       });
//     } catch (err) {
//       console.error("Error hashing password:", err);
//       return res.status(500).json({ error: "Internal server error" });
//     }
//   });
// });

// // Login endpoint (same as before)
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and password are required" });
//   }

//   const sql = "SELECT * FROM users WHERE email = ?";
//   db.query(sql, [email], async (err, results) => {
//     if (err) {
//       console.error("Error fetching user:", err);
//       return res.status(500).json({ error: "Internal server error" });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const user = results[0];
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: user.id, email: user.email, role: user.role },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.json({ message: "Login successful", token });
//   });
// });

// User Registration (Create User)
app.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res
      .status(400)
      .json({ error: "Email, password, and role are required" });
  }

  // Check if the role is valid
  if (role !== "basic" && role !== "admin") {
    return res
      .status(400)
      .json({ error: "Invalid role. Must be 'basic' or 'admin'" });
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

    // Hash the password using bcryptjs
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

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Assuming token is passed in Authorization header as "Bearer token"

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
    req.user = decoded; // Attach the decoded data to the request
    next(); // Token is valid, proceed with the request
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};
app.get("protected", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
});

// Login endpoint
app.post("/login", (req, res) => {
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
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ message: "Login successful", token });
  });
});

app.get("/blogs", (req, res) => {
  const sql = "SELECT * FROM blogs";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch data" });
      return;
    }
    res.setHeader("Content-Type", "application/json");
    return res.json(results);
  });
});

app.put("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, shortDescription, image } = req.body; // `jsonData` removed from request body
  const imageFile = req.file;

  // Check if the blog exists
  const selectSql = "SELECT * FROM blogs WHERE id = ?";
  db.query(selectSql, [id], async (err, results) => {
    if (err) {
      console.error("Error fetching blog:", err);
      return res.status(500).json({ error: "Failed to fetch blog" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    try {
      let imageUrl = results[0].image; // Keep the existing image path by default

      // If a new image is uploaded
      if (imageFile) {
        const outputFileName = `blog-${id}.jpeg`;
        const outputPath = path.join(__dirname, "uploads", outputFileName);

        // Process the image using Sharp (resize, convert to JPEG)
        await sharp(imageFile.path)
          .resize({ width: 800 })
          .jpeg({ quality: 80 })
          .toFile(outputPath);

        // Delete the original uploaded file to save space
        fs.unlinkSync(imageFile.path);

        imageUrl = `/uploads/${outputFileName}`; // Update with new image URL
      }

      // Construct `jsonData` dynamically
      const jsonData = JSON.stringify({
        title: title || results[0].title,
        short_description: shortDescription || results[0].short_description,
        image: imageUrl || results[0].image,
      });

      // Update the blog in the database
      const updateSql =
        "UPDATE blogs SET title = ?, short_description = ?, image = ?, jsonData = ? WHERE id = ?";
      db.query(
        updateSql,
        [title, shortDescription, imageUrl, jsonData, id],
        (updateErr) => {
          if (updateErr) {
            console.error("Error updating blog:", updateErr);
            return res.status(500).json({ error: "Failed to update blog" });
          }

          res.status(200).json({
            message: "Blog updated successfully",
            imageUrl: `http://localhost:3000${imageUrl}`,
            jsonData: JSON.parse(jsonData),
          });
        }
      );
    } catch (error) {
      console.error("Error during image processing:", error);
      res.status(500).json({ error: "Failed to process image" });
    }
  });
});

// GET a specific blog by ID
app.get("/blogs/:blogId", (req, res) => {
  const { blogId } = req.params; // Extract the blogId from the request parameters
  const sql = "SELECT * FROM blogs WHERE id = ?"; // Parameterized query for security
  db.query(sql, [blogId], (err, results) => {
    if (err) {
      console.error("Error fetching blog:", err);
      res.status(500).json({ error: "Failed to fetch blog" });
      return;
    }

    if (results.length === 0) {
      // No blog found with the given ID
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    res.json(results[0]); // Return the first (and only) blog record
  });
});

// CREATE a new blog
app.post("/blogs", (req, res) => {
  const { title, shortDescription, image } = req.body;

  // Prepare jsonData as a JSON string
  const jsonData = JSON.stringify({ title, shortDescription });

  const sql = `
    INSERT INTO blogs (title, short_description, image, jsonData, inserted_at) 
    VALUES (?, ?, ?, ?, NOW())
  `;

  db.query(sql, [title, shortDescription, image, jsonData], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Failed to insert data" });
      return;
    }

    res.json({
      message: "Blog created successfully",
      blogId: result.insertId, // Return the inserted blog's ID
    });
  });
});

//image upload update
app.post("/blogs/:blogId/upload", upload.single("image"), async (req, res) => {
  const { blogId } = req.params;

  // Check if the blog exists
  const selectSql = "SELECT * FROM blogs WHERE id = ?";
  db.query(selectSql, [blogId], async (err, results) => {
    if (err) {
      console.error("Error fetching blog:", err);
      return res.status(500).json({ error: "Failed to fetch blog" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }

    try {
      // Ensure uploads directory exists
      const uploadsDir = path.join(__dirname, "uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const inputPath = path.resolve(req.file.path);
      const outputFileName = `blog-${blogId}.jpeg`;
      const outputPath = path.join(uploadsDir, outputFileName);

      // Process the image using Sharp
      await sharp(inputPath)
        .resize({ width: 800 }) // Resize to 800px width (adjust as needed)
        .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
        .toFile(outputPath);

      // Update the database with the new image path
      const imagePath = `/uploads/${outputFileName}`;
      const updateSql = "UPDATE blogs SET image = ? WHERE id = ?";
      db.query(updateSql, [imagePath, blogId], (updateErr) => {
        if (updateErr) {
          console.error("Error updating blog image:", updateErr);
          return res.status(500).json({ error: "Failed to update blog image" });
        }

        // Delete the original uploaded file to save space
        fs.unlink(inputPath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting original file:", unlinkErr);
          }
        });

        // Respond with the image URL
        const baseUrl = process.env.BASE_URL || `http://localhost:3000`;
        res.status(200).json({
          message: "Image uploaded, processed, and saved successfully!",
          imageUrl: `${baseUrl}${imagePath}`,
        });
      });
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(500).json({ error: "Failed to process image" });
    }
  });
});

app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const sql = `
    DELETE 
    FROM blogs
    WHERE id = ?
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data:", err);
      res.status(500).json({ error: "Failed to delete data" });
      return;
    }

    res.json({
      message: "Blog deleted successfully",
      blogId: id,
    });
  });
});
// EDIT a blog
app.put("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, shortDescription, image, jsonData } = req.body;

  // Explicitly map camelCase to snake_case for `short_description`
  const short_description = shortDescription;

  // Create the JSON object for the `jsonData` column

  // Update query to include `jsonData`
  const sql =
    "UPDATE blogs SET title = ?, short_description = ?, image = ?, jsonData = ? WHERE id = ?";

  // Execute the query with the parameters
  db.query(
    sql,
    [title, short_description, image, jsonData, id],
    (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        res.status(500).json({ error: "Failed to update data" });
        return;
      }
      res.json({ message: "Blog updated successfully" });
    }
  );
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

// Endpoint to create an enquiry
app.post("/enquiries", (req, res) => {
  const { first_name, last_name, email_address, phone_number, message } =
    req.body;

  const query = `INSERT INTO enquiries (first_name, last_name, email_address, phone_number, message) 
                 VALUES (?, ?, ?, ?, ?)`;

  db.query(
    query,
    [first_name, last_name, email_address, phone_number, message],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error creating enquiry" });
      }
      res.status(201).json({
        message: "Enquiry created successfully",
        enquiryId: result.insertId,
      });
    }
  );
});

app.get("/enquiries", (req, res) => {
  const { startDate, endDate } = req.query;
  let query = "SELECT * FROM enquiries";
  let queryParams = [];

  // If both startDate and endDate are provided, apply the date range filter
  if (startDate && endDate) {
    query += " WHERE DATE(created_at) BETWEEN ? AND ?";
    queryParams.push(startDate, endDate); // Add both dates to the query
  }
  // If only startDate is provided, filter by startDate
  else if (startDate) {
    query += " WHERE DATE(created_at) >= ?";
    queryParams.push(startDate);
  }
  // If only endDate is provided, filter by endDate
  else if (endDate) {
    query += " WHERE DATE(created_at) <= ?";
    queryParams.push(endDate);
  }

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching enquiries:", err);
      return res.status(500).json({ error: "Error fetching enquiries" });
    }
    res.json(results);
  });
});

// Delete multiple enquiries
app.delete("/enquiries", (req, res) => {
  const { ids } = req.body;

  // Ensure that ids is an array
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: "No enquiry IDs provided" });
  }

  const query = "DELETE FROM enquiries WHERE id IN (?)";

  db.query(query, [ids], (err, result) => {
    if (err) {
      console.error("Error deleting multiple enquiries:", err);
      return res
        .status(500)
        .json({ error: "Error deleting multiple enquiries" });
    }
    res.status(200).json({
      message: `${result.affectedRows} enquiries deleted successfully`,
    });
  });
});

// Delete a single enquiry by ID
app.delete("/enquiries/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM enquiries WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting enquiry:", err);
      return res.status(500).json({ error: "Error deleting enquiry" });
    }
    res.status(200).json({ message: "Enquiry deleted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
