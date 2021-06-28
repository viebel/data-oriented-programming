SELECT
  title,
  isbn,
  authors.name AS author_name
  FROM
      books
      INNER JOIN
      book_authors
          ON books.isbn = book_authors.book_isbn
      INNER JOIN
      authors
          ON book_authors.author_id = authors.id
 WHERE books.title LIKE '%habit%';

