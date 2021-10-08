using System.Collections.Immutable;

namespace Models;
public static class Model
{
    public static readonly ImmutableDictionary<string, object> LibraryData = new Dictionary<string, object>()
    {
        { "name", "The smallest library on earth" },
        { "address", "Here and now" },
        { "catalog", new Dictionary<string, object>()
            {
                {
                    "booksByIsbn", new Dictionary<string, object>()
                    {
                        {
                            "978-1779501127", new Dictionary<string, object>()
                            {
                                { "isbn", "978-1779501127" },
                                { "title", "Watchmen" },
                                { "publicationYear", 1987 },
                                { "authorIds", new string[] { "alan-moore", "dave-gibbons" } },
                                { "bookItems", new (string id, string rackID)[] { ("book-item-1", "rack-17"), ("book-item-2", "rack-17") } }
                            }
                        }
                    }
                }
            }
        },
        { "authorsById", new Dictionary<string, object>()
            {
                {
                    "alan-moore", new Dictionary<string, object>()
                    {
                        { "name", "Alan Moore" },
                        { "booksIsbns", new string[] {"978-1779501127" } }
                    }
                },
                {
                    "dave-gibbons", new Dictionary<string, object>()
                    {
                        { "name", "Dave Gibbons" },
                        { "booksIsbns", new string[] {"978-1779501127" } }
                    }
                }
            }
        },
        { "userManagement", new Dictionary<string, object>()
            {
                { 
                    "librarians", new Dictionary<string, object>()
                    {
                        {
                            "franck@gmail.com", new Dictionary<string, object>()
                            {
                                { "email", "franck@gmail.com" },
                                { "encryptedPassword", "bXlwYXNzd29yZA==" }
                            }
                        },

                    }
                },
                {
                    "members", new Dictionary<string, object>()
                    {
                        {
                            "samantha@gmail.com", new Dictionary<string, object>()
                            {
                                { "email", "samantha@gmail.com" },
                                { "encryptedPassword", "c2VjcmV0" },
                                { "isBlocked", false }
                            }
                        },
                    }
                }
            }
        }
    }.ToImmutableDictionary();
}
