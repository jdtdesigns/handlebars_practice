DROP DATABASE IF EXISTS project_tracker_db;

CREATE DATABASE project_tracker_db;

USE project_tracker_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL
);

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(250) NOT NULL,
  completed BOOLEAN DEFAULT false,
  student_id INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id)
    ON DELETE CASCADE
);

INSERT INTO students (first_name, last_name) VALUES 
  ('John', 'Jones'),
  ('Jacob', 'Marley'),
  ('Jingle', 'Bells'),
  ('Heimer', 'Schmidt'),
  ('Minnie', 'Mouse'),
  ('Mickey', 'Mouse');

INSERT INTO projects (project_name, student_id) VALUES
  ('Project A', 1),
  ('Project B', 1),
  ('Project C', 3),
  ('Project D', 4),
  ('Project E', 5);

-- SELECT * FROM students;
-- SELECT * FROM projects;

SELECT
  CONCAT(first_name, ' ', last_name) AS student_name,
  project_name,
  completed
    FROM students
    JOIN projects ON students.id = projects.student_id;
