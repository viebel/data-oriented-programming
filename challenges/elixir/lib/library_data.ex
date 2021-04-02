defmodule LibraryData do
  def library_data do
    %{
      "address" => "Here and now",
      "catalog" => %{
        "authorsById" => %{
          "alan-moore" => %{
            "bookIsbns" => ["978-1779501127"],
            "name" => "Alan Moore"
          },
          "dave-gibbons" => %{
            "bookIsbns" => ["978-1779501127"],
            "name" => "Dave Gibbons"
          }
        },
        "booksByIsbn" => %{
          "978-1779501127" => %{
            "authorIds" => ["alan-moore", "dave-gibbons"],
            "bookItems" => [
              %{"id" => "book-item-1", "rackId" => "rack-17"},
              %{"id" => "book-item-2", "rackId" => "rack-17"}
            ],
            "isbn" => "978-1779501127",
            "publicationYear" => 1987,
            "title" => "Watchmen"
          }
        }
      },
      "name" => "The smallest library on earth",
      "userManagement" => %{
        "librarians" => %{
          "franck@gmail.com" => %{
            "email" => "franck@gmail.com",
            "encryptedPassword" => "bXlwYXNzd29yZA=="
          }
        },
        "members" => %{
          "samantha@gmail.com" => %{
            "email" => "samantha@gmail.com",
            "encryptedPassword" => "c2VjcmV0",
            "isBlocked" => false
          }
        }
      }
    }
  end
end
