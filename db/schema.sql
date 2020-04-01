DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMEMNT NOT NULL,
  burger_name VARCHAR(60),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);