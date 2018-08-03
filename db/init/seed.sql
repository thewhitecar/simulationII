CREATE TABLE houses (
id SERIAL PRIMARY KEY,
house_name TEXT,
address TEXT,
city TEXT,
state TEXT,
zipcode INTEGER
);

INSERT INTO houses (house_name, address, city, state, zipcode)
VALUES ('My House', '463 N 600 W', 'Salt Lake City', 'UT', 84116);

SELECT * FROM houses;