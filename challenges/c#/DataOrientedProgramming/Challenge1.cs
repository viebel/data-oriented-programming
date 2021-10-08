using Models;
using System.Runtime.ExceptionServices;

namespace Challenges
{
    /*
     * Challenge #1: Retrieve a piece of information
     * Challenge: Write a function named getBookProperty that receives and ISBN and a field name and returns the value of the field for the book with the given ISBN
     */
    public class Challenge1
    {
        public static string GetBookProperty(string isbn, string field)
        {
            if (string.IsNullOrEmpty(isbn))
            {
                throw new ArgumentException("provided isbn was empty");
            }

            if (string.IsNullOrEmpty(field))
            {
                throw new ArgumentException("provided field was empty");
            }

            string? value = null;
            try
            {
                Model.LibraryData.TryGetValue("catalog", out dynamic? catalog);
                value = catalog?["booksByIsbn"]?[isbn]?[field];
            } catch (Exception ex) when (ex is ArgumentNullException || ex is KeyNotFoundException)
            {
                ExceptionDispatchInfo.Capture(ex).Throw();
            }

            return value ?? string.Empty;
        }
    }
}
