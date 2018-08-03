INSERT INTO houses (house_name, address, city, state, zipcode, image, monthly_mortgage_amount, desired_rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM houses;