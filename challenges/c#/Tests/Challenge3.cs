using Challenges;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests;
[TestClass] 
public class Challenge3_Tests
{
    [TestMethod]
    [ExpectedException(typeof(ArgumentException))]
    public void TryBlockMember_EmptyEmail()
    {
        string email = string.Empty;
        Challenge3.BlockMember(Models.Model.LibraryData, email);
    }

    [TestMethod]
    [ExpectedException(typeof(InvalidDataException))]
    public void TryBlockMember_NonexistentEmail()
    {
        string email = "jort@programming.com";
        Challenge3.BlockMember(Models.Model.LibraryData, email);
    }


    [TestMethod]
    public void TryBlockMember()
    {
        string email = "samantha@gmail.com";
        System.Collections.Immutable.IImmutableDictionary<string, object>? result = Challenge3.BlockMember(Models.Model.LibraryData, email);

        Assert.IsNotNull(result);

        result.TryGetValue("userManagement", out object? resultUserManagement);
        Assert.IsNotNull(resultUserManagement);

        Assert.IsInstanceOfType(resultUserManagement, typeof(Dictionary<string, object>));
        var users = (typeof(Dictionary<string, object>)) resultUserManagement;

    }
}
