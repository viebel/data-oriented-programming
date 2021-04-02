defmodule BlockMember do
  @doc """
  A function that receives library data and an email address and returns a new version
  of library data without altering the original version, where the user with the given email is blocked.

  ## Examples

      iex> updated_library_data = BlockMember.block_member(LibraryData.library_data(), "samantha@gmail.com")
      iex> information_path = ["userManagement", "members", "samantha@gmail.com", "isBlocked"]
      iex> [get_in(updated_library_data, information_path), get_in(LibraryData.library_data(), information_path)]
      [true, false]
  """
  def block_member(library_data, email) do
    information_path = ["userManagement", "members", email, "isBlocked"]
    put_in(library_data, information_path, true)
  end
end
