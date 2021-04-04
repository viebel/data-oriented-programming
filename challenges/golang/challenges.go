package main

import (
	"github.com/gobs/simplejson"
	"strings"
)

// challenge 1

func getBookProperty(data d, isbn, fieldName string) any {
	informationPath := p{"catalog", "booksByIsbn", isbn, fieldName}
	return _get(data, informationPath)
}

// challenge 2
func bookInfo(data, book d) d {
	return d{
		"title":       _get(book, "title"),
		"isbn":        _get(book, "isbn"),
		"authorNames": authorNames(data, book),
	}
}

func authorNames(data, book d) l {
	return _map(_get(book, "authorIds").(l),
		func(authorId any) interface{} {
			return _get(data, p{"authorsById", authorId.(string), "name"})
		})
}

func searchBooksByTitle(data d, query string) string {
	catalogData := _get(libraryData, "catalog").(d)
	allBooks := _get(catalogData, "booksByIsbn").(d)

	matchingBooks := _filter(allBooks, func(book any) any {
		return strings.Contains(
			strings.ToLower(_get(book, "title").(string)),
			strings.ToLower(query))
	})

	ret := _map(matchingBooks, func(book any) any {
		return bookInfo(catalogData, book.(d))
	})

        return simplejson.MustDumpString(ret)
}

// challenge 3

func blockMember(data d, email string) d {
	informationPath := p{"userManagement", "members", email, "isBlocked"}
	return _set(data, informationPath, true).(d)
}

// challenge 4

func renameKeys(inmap, keyMap d) any {
	return _reduce(keyMap,
		func(res, newKey, oldKey any) any {
			value := _get(inmap, oldKey)
			resWithNewKey := _set(res, newKey, value)
			resWithoutOldKey := _omit(resWithNewKey, oldKey)
			return resWithoutOldKey
		},
		inmap)
}

// challenge 5

func mergeAndSerialize() string {
	watchmenFromDB := d{
		"isbn":            "978-1779501127",
		"title":           "Watchmen",
		"publicationYear": 1987,
		"authorIds": l{"alan-moore",
			"dave-gibbons"},
		"bookItems": l{
			d{
				"id":     "book-item-1",
				"rackId": "rack-17",
				"isLent": true,
			},
			d{
				"id":     "book-item-2",
				"rackId": "rack-17",
				"isLent": false,
			},
		},
	}

	watchmenFromOpenLib := d{
		"publishers": l{
			"DC Comics",
		},
		"number_of_pages": 334,
		"weight":          "1.4 pounds",
		"physical_format": "Paperback",
		"subjects": l{
			"Graphic Novels",
			"Comics & Graphic Novels",
			"Fiction",
			"Fantastic fiction",
		},
		"isbn_13": l{
			"9780930289232",
		},
		"title": "Watchmen",
		"isbn_10": l{
			"0930289234",
		},
		"publish_date":        "April 1, 1995",
		"physical_dimensions": "10.1 x 6.6 x 0.8 inches",
	}

	return simplejson.MustDumpString(_merge(watchmenFromDB, watchmenFromOpenLib))
}

// challenge 6

func diff(v1, v2 any) any {
	m1, ok1 := v1.(d)
	m2, ok2 := v2.(d)
	if ok1 && ok2 {
		return mdiff(m1, m2)
	}

	l1, ok1 := v1.(l)
	l2, ok2 := v2.(l)
	if ok1 && ok2 {
		return ldiff(l1, l2)
	}

	if v1 != v2 {
		return v2
	}

	return "data-diff:no-diff"
}

func mdiff(d1, d2 d) any {
	keys := _union(_keys(d1), _keys(d2))
	return _reduce(keys,
		func(acc, k, _ any) any {
			kk := k.(string)
			res := diff(_get(d1, kk), _get(d2, kk))
			if m, ok := res.(d); ok && len(m) == 0 {
				return acc
			}
			if s, ok := res.(string); ok && s == "data-diff:no-diff" {
				return acc
			}

			return _set(acc, k, res)
		},
		d{})
}

func ldiff(l1, l2 l) any {
	keys := _union(_keys(l1), _keys(l2))
	return _reduce(keys,
		func(acc, k, _ any) any {
			i := k.(int)
			v1 := any(nil)
			v2 := any(nil)

			if i < len(l1) {
				v1 = l1[i]
			}
			if i < len(l2) {
				v2 = l2[i]
			}

			res := diff(v1, v2)
			if m, ok := res.(d); ok && len(m) == 0 {
				return acc
			}
			if s, ok := res.(string); ok && s == "data-diff:no-diff" {
				return acc
			}

			return _set(acc, k, res)
		},
		l{})
}
