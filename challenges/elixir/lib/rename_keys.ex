defmodule RenameKeys do
  @doc """
  A function that receives a data entity and a key mappings and returns a new data entity,
  without altering the original entity, where the fields are renamed according to the key mappings.

  ## Examples

      iex> alan_moore = %{"name" => "Alan Moore", "bookIsbns" => ["978-1779501127"]}
      iex> RenameKeys.rename_keys(alan_moore, %{"bookIsbns" => "books"})
      %{"books" => ["978-1779501127"], "name" => "Alan Moore"}

      iex> book_item = %{"id" => "book-item-1", "rackId" => "rack-17", "isLent" => true}
      iex> RenameKeys.rename_keys(book_item, %{"rackId" => "id", "id" => "bookItemId"})
      %{"bookItemId" => "book-item-1", "id" => "rack-17", "isLent" => true}
  """
  def rename_keys(map, key_map) do
    Enum.reduce(key_map, map, fn {old_key, new_key}, acc ->
      with({v, m} <- Map.pop(acc, old_key), do: Map.put(m, new_key, v))
    end)
  end
end
