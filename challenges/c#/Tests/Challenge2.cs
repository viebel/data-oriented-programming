using Challenges;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests;
[TestClass] 
public class Challenge2_Tests
{
    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void TryGetBookInfoWithEmptyTitle()
    {
        string title = string.Empty;
        Challenge2.BookInfo(title);
    }

    [TestMethod]
    public void TryGetBookInfoValidTitle()
    {
        string title = "Watchmen";
        string result = Challenge2.BookInfo(title);
        string expected = "{\"title\":\"Watchmen\",\"isbn\":\"978-1779501127\",\"authors\":[\"Alan Moore\",\"Dave Gibbons\"]}";
        Assert.AreEqual(expected, result);
    }

    [TestMethod]
    public void TryGetBookInfoValidTitleLowercase()
    {
        string title = "watchmen";
        string result = Challenge2.BookInfo(title);
        string expected = "{\"title\":\"Watchmen\",\"isbn\":\"978-1779501127\",\"authors\":[\"Alan Moore\",\"Dave Gibbons\"]}";
        Assert.AreEqual(expected, result);
    }

    [TestMethod]
    [ExpectedException(typeof(InvalidDataException))]
    public void TryGetBookInfoInvalidTitle()
    {
        string title = "Code Like a Pro in C#";
        Challenge2.BookInfo(title);
    }
}
