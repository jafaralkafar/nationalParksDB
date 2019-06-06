UPDATE national_parks
SET name=${name}, image_url=${image_url}, location=${location}, date_established=${date_established}, acres=${acres}, description=${description}
WHERE id=${id};

SELECT * FROM national_parks;