CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    phone VARCHAR(150)
);

CREATE TABLE courses(
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    level INT
);

CREATE TABLE student_courses(
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id), 
    course_id INT REFERENCES courses(id)
);