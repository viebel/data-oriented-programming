defmodule BookProperty do
  @doc """
  A function that receives library data and ISBN and a field name and returns the value of the field for the book with the given ISBN

  ## Examples

      iex> BookProperty.get_book_property(LibraryData.library_data(), "978-1779501127", "title") |> String.upcase()
      "WATCHMEN"
  """
  def get_book_property(library_data, isbn, field_name) do
    information_path = ["catalog", "booksByIsbn", isbn, field_name]
    get_in(library_data, information_path)
  end
end
