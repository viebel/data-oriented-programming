using Challenges;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests;
[TestClass]
public class Challenge1_Tests
{
    [TestMethod]
    public void TryGetBookPropertyWithValidISBN()
    {
        string isbn = "978-1779501127";
        string field = "title";
        string result = Challenge1.GetBookProperty(isbn, field);
        Assert.AreEqual("Watchmen", result);
    }

    [ExpectedException(typeof(ArgumentException))]
    [TestMethod]
    public void TryGetBookPropertyWithEmptyISBN()
    {
        string isbn = string.Empty;
        string field = "title"; 
        Challenge1.GetBookProperty(isbn, field);
    }

    [ExpectedException(typeof(KeyNotFoundException))]
    [TestMethod]
    public void TryGetBookPropertyWithInvalidField()
    {
        string isbn = "978-1779501127";
        string field = "potato";
        Challenge1.GetBookProperty(isbn, field);
    }

    [ExpectedException(typeof(KeyNotFoundException))]
    [TestMethod]
    public void TryGetBookPropertyWithInvalidISBN()
    {
        string isbn = "978-1617298028"; // Code Like A Pro in C# (Manning Publications, 2021) - Jort Rodenburg
        string field = "title";
        Challenge1.GetBookProperty(isbn, field);
    }
}