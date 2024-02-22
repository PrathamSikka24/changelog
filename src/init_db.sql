CREATE TABLE CHANGELOG (
    id SERIAL PRIMARY KEY,
    author STRING,
    date DATE,
    heading STRING,
    description STRING
);
-- seed.sql
INSERT INTO changelogs (author, date, heading, description) VALUES ('devzero-inc', '2023-01-01', 'Project 1', 'README content for Project 1');
INSERT INTO changelogs (author, date, heading, description) VALUES ('devzero-inc', '2023-02-01', 'Project 2', 'README content for Project 2');
INSERT INTO changelogs (author, date, heading, description) VALUES ('devzero-inc', '2023-02-01', 'Project 2', 'README content for Project 2');
INSERT INTO changelogs (author, date, heading, description) VALUES ('devzero-inc', '2023-02-01', 'Project 2', 'README content for Project 2');
