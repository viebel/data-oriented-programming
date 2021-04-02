defmodule Diff do
  defguard are_maps(data1, data2) when is_map(data1) and is_map(data2)

  @doc """
  A function that receives two versions of library data and returns an object that contains
  the diff between the two versions, in the format of your choice.

  ## Examples

      iex> updated_library_data = BlockMember.block_member(LibraryData.library_data(), "samantha@gmail.com")
      iex> Diff.diff(LibraryData.library_data(), updated_library_data)
      %{
        "userManagement" => %{
          "members" => %{"samantha@gmail.com" => %{"isBlocked" => true}}
        }
      }
  """
  def diff(data1, data2) when are_maps(data1, data2) and data1 != data2 do
    keys = Enum.uniq(Map.keys(data1) ++ Map.keys(data2))

    Enum.reduce(keys, %{}, fn key, acc ->
      case diff(Map.get(data1, key), Map.get(data2, key)) do
        result when map_size(result) == 0 -> acc
        result -> Map.merge(acc, %{key => result})
      end
    end)
  end

  def diff(data1, data2) when data1 != data2 and not is_map(data1), do: data2
  def diff(_, _), do: %{}
end
