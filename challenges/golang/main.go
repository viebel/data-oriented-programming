package main

import (
	"fmt"
	"github.com/gobs/simplejson"
	"strings"
)

func warmup() {
        fmt.Println("---- warmup --------")
	informationPath := p{"catalog", "booksByIsbn", "978-1779501127", "title"}
	fmt.Println(strings.ToUpper(_get(libraryData, informationPath).(string)))
}

func challenge1() {
        fmt.Println("---- challenge 1 --------")
	fmt.Println(getBookProperty(libraryData, "978-1779501127", "title"))
}

func challenge2() {
        fmt.Println("---- challenge 2 --------")
	fmt.Printf("%q\n", searchBooksByTitle(libraryData, "watCH"))
}

func challenge3() {
        fmt.Println("---- challenge 3 --------")
	updatedLibraryData := blockMember(libraryData, "samantha@gmail.com")
	var informationPath = p{"userManagement", "members", "samantha@gmail.com", "isBlocked"}
        ret := l{
	    _get(updatedLibraryData, informationPath),
            _get(libraryData, informationPath),
        }
	fmt.Println(ret)
}

func challenge4() {
        fmt.Println("---- challenge 4 --------")

	alanMoore := d{
		"name":      "Alan Moore",
		"bookIsbns": l{"978-1779501127"},
	}

	fmt.Println(renameKeys(alanMoore, d{"bookIsbns": "books"}))

	bookItem := d{
		"id":     "book-item-1",
		"rackId": "rack-17",
		"isLent": true,
	}

	fmt.Println(renameKeys(bookItem, d{"rackId": "id", "id": "bookItemId"}))
}

func challenge5() {
        fmt.Println("---- challenge 5 --------")
	fmt.Printf("%q\n", mergeAndSerialize())
}

func challenge6() {
        fmt.Println("---- challenge 6 --------")
	updatedLibraryData := blockMember(libraryData, "samantha@gmail.com")
	fmt.Println(simplejson.MustDumpString(diff(libraryData, updatedLibraryData)))

	d1 := d{
		"dict": d{
			"a": 1,
			"b": 2,
		},
		"list": l{
			"uno",
			"due",
		},
	}

	d2 := d{
		"dict": d{
			"a": 1,
			"b": 2,
		},
		"list": l{
			"uno",
			"due",
			"tre",
		},
	}

	fmt.Println(simplejson.MustDumpString(diff(d1, d2)))
}

func main() {
	warmup()

	challenge1()

	challenge2()

	challenge3()

	challenge4()

	challenge5()

	challenge6()
}
