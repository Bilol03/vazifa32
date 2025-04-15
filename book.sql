CREATE TABLE authors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    bio VARCHAR NOT NULL 
);

CREATE TABLE books(
    id SERIAL PRIMARY KEY, 
    title VARCHAR(200) NOT NULL, 
    author_id INT REFERENCES authors(id),
    published_year INT
);