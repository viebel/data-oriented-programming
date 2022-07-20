using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace Tests;

public record BookInfo(string Title, string Isbn, string[] AuthorNames);

static class CatalogModule
{
    public static string ReadBookTitle(this CatalogData c, string isbn) =>
        c.FindBook(isbn).Title;

    public static object? ReadBookProperty(this CatalogData c, string isbn, string property)
    {
        var book = c.FindBook(isbn);
        return ReadProperty(book, property);
    }

    public static string SearchBooksByTitle(this CatalogData c, string q)
    {
        var result =
            from b in SearchBooks(c, q)
            let authorNames = c.FindAuthorNames(b)
            from authorName in authorNames
            select new BookInfo(b.Title, b.Isbn, authorNames);

        return JsonConvert.SerializeObject(result);
    }

    static IEnumerable<BookData> SearchBooks(CatalogData c, string q) =>
        c.BooksByIsbn.Where(
            b => b.Title.Contains(q, StringComparison.OrdinalIgnoreCase));

    static string[] FindAuthorNames(this CatalogData c, BookData b) =>
        b.AuthorIds.Select(s => c.AuthorsById[s].Name).ToArray();

    static BookData FindBook(this CatalogData c, string isbn) =>
        c.BooksByIsbn[isbn];

    static object? ReadProperty(object instance, string property) =>
        instance.GetType().GetProperty(property)?.GetValue(instance);
}