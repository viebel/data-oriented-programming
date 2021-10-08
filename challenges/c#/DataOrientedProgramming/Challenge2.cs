using Models;
using System.Runtime.ExceptionServices;
using System.Text.Json;

namespace Challenges
{
    /*
     * Challenge #2: Search information
     * Challenge: Write a function named bookInfo that receives a string and returns a JSON string that contains book information 
     * about the books whose title contains the given string, in a case insensitive way. Book information is made of: title, isbn, author full names.
     * Remark: You are not allowed to extract author names from author ids. Assume that author ids are opaque strings.
     */
    public class Challenge2
    {
        public static string BookInfo(string title)
        {
            if (string.IsNullOrEmpty(title))
            {
                throw new ArgumentException("provided title is empty");
            }

            try
            {
                Model.LibraryData.TryGetValue("catalog", out dynamic? catalog);
                Dictionary<string, object> booksByIsbn = catalog?["booksByIsbn"] ?? throw new InvalidDataException("catalog is null");

                Dictionary<string, object> book = (Dictionary<string, object>)booksByIsbn.FirstOrDefault(b => string.Equals((string)((Dictionary<string, object>)b.Value)["title"], title, StringComparison.OrdinalIgnoreCase)).Value;
                if (book == null)
                {
                    throw new InvalidDataException($"could not find book with title: {title}");
                }

                Dictionary<string, object> bookInfo = new()
                {
                    { "title", book["title"]},
                    { "isbn", book["isbn"] },
                };

                Model.LibraryData.TryGetValue("authorsById", out dynamic? authorsById);
                if (authorsById == null)
                {
                    throw new InvalidDataException("authorsById is null");
                }

                string[] bookAuthorIds = (string[])book["authorIds"];
                string[] authorNames = new string[bookAuthorIds.Length];
                for (int i = 0; i < bookAuthorIds.Length; i++)
                {
                    authorNames[i] = authorsById[bookAuthorIds[i]]["name"];
                }

                bookInfo.Add("authors", authorNames);

                return JsonSerializer.Serialize(bookInfo);
            }
            catch (Exception ex) when (ex is ArgumentNullException || ex is KeyNotFoundException)
            {
                ExceptionDispatchInfo.Capture(ex).Throw();
            }

            return string.Empty;
        }
    }
}
