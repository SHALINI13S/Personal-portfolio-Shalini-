const { pool } = require("../config/db");

// GET /api/projects
async function getProjects(req, res) {
  try {
    const [rows] = await pool.query(
      "SELECT id, title, description, technologies, features, created_at FROM projects ORDER BY created_at DESC"
    );

    // Convert comma-separated strings into arrays for easier frontend rendering
    const projects = rows.map((row) => ({
      ...row,
      technologies: row.technologies.split(",").map((t) => t.trim()),
      features: row.features.split(",").map((f) => f.trim()),
    }));

    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    console.error("Error fetching projects:", err.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching projects.",
    });
  }
}

module.exports = { getProjects };
