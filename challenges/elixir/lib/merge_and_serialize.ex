defmodule MergeAndSerialize do
  @doc """
  A function that receives two pieces of book information one from the database
  and one from an external service like [Open Library Books API](https://openlibrary.org/dev/docs/api/books)
  and returns a JSON string with information from both sources.

  ## Examples

      iex> MergeAndSerialize.merge_and_serialize(MergeAndSerialize.watchmen_from_db(), MergeAndSerialize.watchmen_from_open_lib())
      ~s({\"authorIds\":[\"alan-moore\",\"dave-gibbons\"],\"bookItems\":[{\"id\":\"book-item-1\",\"isLent\":true,\"rackId\":\"rack-17\"},{\"id\":\"book-item-2\",\"isLent\":false,\"rackId\":\"rack-17\"}],\"isbn\":\"978-1779501127\",\"isbn_10\":[\"0930289234\"],\"isbn_13\":[\"9780930289232\"],\"number_of_pages\":334,\"physical_dimensions\":\"10.1 x 6.6 x 0.8 inches\",\"physical_format\":\"Paperback\",\"publicationYear\":1987,\"publish_date\":\"April 1, 1995\",\"publishers\":[\"DC Comics\"],\"subjects\":[\"Graphic Novels\",\"Comics & Graphic Novels\",\"Fiction\",\"Fantastic fiction\"],\"title\":\"Watchmen\",\"weight\":\"1.4 pounds\"})
  """
  def merge_and_serialize(a, b), do: Map.merge(a, b) |> Jason.encode!()

  def watchmen_from_db do
    %{
      "authorIds" => ["alan-moore", "dave-gibbons"],
      "bookItems" => [
        %{"id" => "book-item-1", "isLent" => true, "rackId" => "rack-17"},
        %{"id" => "book-item-2", "isLent" => false, "rackId" => "rack-17"}
      ],
      "isbn" => "978-1779501127",
      "publicationYear" => 1987,
      "title" => "Watchmen"
    }
  end

  def watchmen_from_open_lib do
    %{
      "isbn_10" => ["0930289234"],
      "isbn_13" => ["9780930289232"],
      "number_of_pages" => 334,
      "physical_dimensions" => "10.1 x 6.6 x 0.8 inches",
      "physical_format" => "Paperback",
      "publish_date" => "April 1, 1995",
      "publishers" => ["DC Comics"],
      "subjects" => ["Graphic Novels", "Comics & Graphic Novels", "Fiction", "Fantastic fiction"],
      "title" => "Watchmen",
      "weight" => "1.4 pounds"
    }
  end
end
