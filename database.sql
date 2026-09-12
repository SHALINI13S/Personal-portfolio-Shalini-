-- ============================================
-- Personal Portfolio Database
-- Shalini S - Thiranex Task 1
-- ============================================

CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- ---------------------------------------------
-- Table: projects
-- ---------------------------------------------
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    technologies VARCHAR(255) NOT NULL,
    features TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------------------------------------------
-- Table: contacts
-- ---------------------------------------------
DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---------------------------------------------
-- Seed data: Hotel Management System project
-- (taken directly from resume - no invented info)
-- ---------------------------------------------
INSERT INTO projects (title, description, technologies, features)
VALUES (
    'Hotel Management System',
    'A software application developed to reduce manpower and replace manual hotel management processes.',
    'Visual Basic 6.0, Oracle 10G',
    'Room booking, CRUD operations, Search employee details, Food details, Payment details, Check-in/check-out, Customer record storage'
);
