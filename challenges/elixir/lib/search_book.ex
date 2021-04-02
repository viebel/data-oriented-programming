defmodule SearchBook do
  @doc """
  A function that receives library data and a string and returns a JSON string that contains book information
  about the books whose title contains the given string, in a case insensitive way.
  Book information is made of: title, isbn, author full names.

  ## Examples

      iex> SearchBook.search_books_by_title(LibraryData.library_data(), "watCH")
      ~s([{\"authorNames\":[\"Alan Moore\",\"Dave Gibbons\"],\"isbn\":\"978-1779501127\",\"title\":\"Watchmen\"}])
  """
  def search_books_by_title(library_data, query) do
    catalog_data = library_data["catalog"]
    all_books = catalog_data["booksByIsbn"]

    all_books
    |> Enum.filter(fn {_, book} ->
      book["title"]
      |> String.downcase()
      |> String.contains?(String.downcase(query))
    end)
    |> Enum.map(fn {_, book} -> book_info(catalog_data, book) end)
    |> Jason.encode!()
  end

  defp author_names(catalog_data, book) do
    Enum.map(book["authorIds"], &get_in(catalog_data, ["authorsById", &1, "name"]))
  end

  defp book_info(catalog_data, book) do
    %{
      "title" => book["title"],
      "isbn" => book["isbn"],
      "authorNames" => author_names(catalog_data, book)
    }
  end
end
