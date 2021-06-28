SELECT
  title AS bookTitle,
  isbn,
  publication_year AS publicationYear
  FROM
      books
 WHERE title LIKE '%habit%';

