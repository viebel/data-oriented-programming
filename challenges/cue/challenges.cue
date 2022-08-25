// cuelang.org solutions for https://blog.klipse.tech/dop/2021/04/01/dop-challenges.html

// small comment up front: cue has no functions, the things starting with "#"
// are a ... hacky alternative, a definition of the arguments and result value.

// all of this is wacky and not really the way you'd usually use cue,
// but I wanted to stay true to the challenge.

// the "//>" comments have no meaning and only contain the command line
// used for evaluation.

import (
    "encoding/json"
    "strings"
)

let data = {
    name:    "The smallest library on earth"
    address: "Here and now"
    catalog: {
        booksByIsbn: {
            "978-1779501127": {
                isbn:            "978-1779501127"
                title:           "Watchmen"
                publicationYear: 1987
                authorIds: ["alan-moore", "dave-gibbons"]
                bookItems: [{
                    id:     "book-item-1"
                    rackId: "rack-17"
                }, {
                    id:     "book-item-2"
                    rackId: "rack-17"
                }]
            }
        }
        authorsById: {
            "alan-moore": {
                name: "Alan Moore"
                bookIsbns: ["978-1779501127"]
            }
            "dave-gibbons": {
                name: "Dave Gibbons"
                bookIsbns: ["978-1779501127"]
            }
        }
    }
    userManagement: {
        librarians: {
            "franck@gmail.com": {
                email:             "franck@gmail.com"
                encryptedPassword: "bXlwYXNzd29yZA=="
            }
        }
        members: {
            "samantha@gmail.com": {
                email:             "samantha@gmail.com"
                encryptedPassword: "c2VjcmV0"
                isBlocked:         false
            }
        }
    }
}

//> cue eval -e warmup challenges.cue
warmup: strings.ToUpper(data.catalog.booksByIsbn."978-1779501127".title)

//> cue eval -e challenge1 challenges.cue
#getBookProperty: {
    lib: *data | {string: _}
    isbn: string
    field: string
    result: lib.catalog.booksByIsbn[isbn][field]
}

challenge1: (#getBookProperty & {isbn: "978-1779501127", field: "title"}).result

//> cue eval -e challenge2 challenges.cue
#bookInfo: {
    lib: *data | {string: _}
    query: string
    let queryLow = strings.ToLower(query)
    result: [
        for b in lib.catalog.booksByIsbn
        if strings.Contains(strings.ToLower(b.title), queryLow)
        {
            title: b.title
            isbn: b.isbn
            authorNames: [for a in b.authorIds {lib.catalog.authorsById[a].name}]
        }
    ]
}

challenge2: json.Compact(json.Marshal((#bookInfo & {query: "watCH"}).result))

//> cue eval -e challenge3 challenges.cue
#blockMember: {
    // still a bit too hard: https://github.com/cue-lang/cue/issues/139
    lib: *data | {string: _}
    email: string
    result: {
        let mem=lib.userManagement.members
        {for k, v in lib if k != "userManagement" {"\(k)": v}},
        {userManagement: {
            {for k, v in lib.userManagement if k != "members" {"\(k)": v}},
            {members: {
                {for k, v in mem if k != "\(email)" {"\(k)": v}},
                {"\(email)": {
                    {for k, v in mem[email] if k != "isBlocked" {"\(k)": v}},
                    {isBlocked: true}
                }}
            }}
        }}
    }
}

challenge3: {
    let result = (#blockMember & {email: "samantha@gmail.com"}).result
    before: data.userManagement.members."samantha@gmail.com".isBlocked
    after: result.userManagement.members."samantha@gmail.com".isBlocked
}

//> cue eval -e challenge4 challenges.cue
#renameKeys: {
    src: [string]: _
    keyMap: [string]: string
    result: {for k, v in src {"\(*keyMap[k] | k)": v}}
}

challenge4: {
    let alanMoore = {
        "name": "Alan Moore",
        "bookIsbns": ["978-1779501127"]
    }
    let bookItem = {
        "id": "book-item-1",
        "rackId": "rack-17",
        "isLent": true
    }
    testAuthor: (#renameKeys & {src: alanMoore, keyMap: {"bookIsbns": "books"}}).result,
    // for testBook, the website omits the new id for me. Looks like a bug.
    // cue does alright, here.
    testBook: (#renameKeys & {src: bookItem, keyMap: {"rackId": "id", "id": "bookItemId"}}).result,
}

//> cue eval -e challenge5 challenges.cue
let watchmenFromDB = {
    isbn:            "978-1779501127"
    title:           "Watchmen"
    publicationYear: 1987
    authorIds: ["alan-moore", "dave-gibbons"]
    bookItems: [{
        id:     "book-item-1"
        rackId: "rack-17"
        isLent: true
    }, {
        id:     "book-item-2"
        rackId: "rack-17"
        isLent: false
    }]
}

let watchmenFromOpenLib = {
    publishers: ["DC Comics"]
    number_of_pages: 334
    weight:          "1.4 pounds"
    physical_format: "Paperback"
    subjects: ["Graphic Novels", "Comics & Graphic Novels", "Fiction", "Fantastic fiction"]
    isbn_13: ["9780930289232"]
    title: "Watchmen"
    isbn_10: ["0930289234"]
    publish_date:        "April 1, 1995"
    physical_dimensions: "10.1 x 6.6 x 0.8 inches"
}

// question: how should this usually work in DOP if both have the same keys?
// it looks a bit happy-path centric to me. The other challenges, too
challenge5: json.Compact(json.Marshal({watchmenFromDB, watchmenFromOpenLib}))

//> cue eval -e challenge6 challenges.cue
#comparable: bytes | string | bool | number | null

#list: [..._]

#struct: {_: _}

#equal: {
    a: _
    b: _
    result: *false | true
    if (a & #comparable) != _|_ && (b & #comparable) != _|_ {
        if (a & b) != _|_ {result: true}
    }
    if (a & #list) != _|_ && (b & #list) != _|_ {
        if len(a) == len(b) {
            // return first of [all false-matches followed by true]
            result: ([for i, av in a if !(#equal & {a: av, b: b[i]}).result {false}] + [true])[0]
        }
    }
    if (a & #struct) != _|_ && (b & #struct) != _|_ {
        // struct check, first check for equal number of fields using len
        if len(a) == len(b) {
            // as field number is the same, only check a[k] == b[k]
            // if result is not yet false
            let cmp = b
            result: false | *true
            for ak, av in a if (result & true) != _|_ {
                let isequal = (#equal & {a: av, b: cmp[ak]}).result
                if !isequal {result: false}
            }
        }
    }
}

#diff: {
    a: _
    b: _
    result: *{} | _
    if (a & #comparable) != _|_ {
        if (b & #comparable) != _|_ {
            // union == bottom means a != b
            // even if a and b a different types
            if (a & b) == _|_ {result: b}
        }
    }
    if (a & #list) != _|_ {
        if (b & #list) != _|_ {
            if !(#equal & {a: a, b: b}).result {result: b}
        }
    }
    if (a & #struct) != _|_ {
        if (b & #struct) != _|_ {
            result: *{} | {_: _}
            // as used in reference implementation on website:
            // only compares for changes and additions from a to b; missing keys are ignored
            for kb, vb in b if !(#equal & {a: a[kb], b: vb}).result {
                let diffv = (#diff & {a: a[kb], b: vb}).result
                if len(diffv) != 0 {result: [kb]: diffv}
            }
        }
    }
}

// does not work, but this is my current state
challenge6_wip: {
    let updatedLibraryData = (#blockMember & {email: "samantha@gmail.com"}).result
    (#diff & {a: libraryData, b: updatedLibraryData}).result
}
