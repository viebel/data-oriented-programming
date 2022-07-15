using System.Linq;
using Newtonsoft.Json;
using Xunit;

namespace Tests;

public class Library_tests
{
    readonly CatalogData catalog;
    readonly UserManagementData userManagement;

    public Library_tests()
    {
        var library = JsonConvert.DeserializeObject<LibraryData>(JsonData.Library);
        catalog = library.Catalog;
        userManagement = library.UserManagement;
    }

    [Fact]
    public void Deserialize_initial_library()
    {
        Assert.NotEmpty(catalog.BooksByIsbn);
        Assert.NotEmpty(catalog.AuthorsById);
        Assert.NotEmpty(userManagement.Librarians);
        Assert.NotEmpty(userManagement.Members);
    }

    [Fact]
    public void Book_title_in_uppercase()
    {
        var title = catalog.ReadBookTitle("978-1779501127").ToUpper();

        Assert.Equal("WATCHMEN", title);
    }

    [Fact]
    public void Retrieve_arbitrary_book_property()
    {
        var title = catalog.ReadBookProperty("978-1779501127", "Title");

        Assert.Equal("Watchmen", title);
    }

    [Fact]
    public void Search_information()
    {
        var json = catalog.SearchBooksByTitle("watCH");
        var result = JsonConvert.DeserializeObject<BookInfo[]>(json).First();

        var expectedAuthors = new[] { "Alan Moore", "Dave Gibbons" };
        
        Assert.Equal("Watchmen", result.Title);
        Assert.Equal("978-1779501127", result.Isbn);
        Assert.Contains(result.AuthorNames, x => expectedAuthors.Contains(x));
    }

    [Fact]
    public void Block_member()
    {
        var email = "samantha@gmail.com";
        var blocked = userManagement.BlockMember(email);
        var result = userManagement.UpdateMember(email, blocked);
        
        Assert.True(result.FindMember(email).IsBlocked);
        Assert.False(userManagement.FindMember(email).IsBlocked);
    }
}