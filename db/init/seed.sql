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

INSERT INTO houses (house_name, address, city, state, zipcode)
VALUES ('My NC House', '1304 Devonshire Trail', 'Aberdeen', 'NC', 28315);

SELECT * FROM houses;