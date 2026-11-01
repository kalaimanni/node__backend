const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Static credentials (demo only)
const STATIC_USER = "crypto";
const STATIC_PASS = "12345";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body || {};

  if (typeof username === "string" && username.trim() === STATIC_USER && password === STATIC_PASS) {
    return res.status(200).json({ success: true, message: "Login successful" });
  }

  return res.status(401).json({ success: false, message: "Invalid username or password" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});