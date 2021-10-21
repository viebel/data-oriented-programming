// cuelang.org solutions for https://blog.klipse.tech/dop/2021/04/01/dop-challenges.html

// small comment up front: cue has no functions, the things starting with "#"
// are a ... hacky alternative, a definition of the arguments and result value.

// all of this is wacky and not really the way you'd usually use cue,
// but I wanted to stay true to the challenge.

// the "//>" comments have no meaning and only contain the command line
// used for evaluation.

import "strings"

data: {
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

challenge2: (#bookInfo & {query: "watCH"}).result

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

challenge3: (#blockMember & {email: "samantha@gmail.com"}).result.userManagement.members."samantha@gmail.com".isBlocked

//> cue eval -e challenge4 challenges.cue
#renameKeys: {
    src: {string: _}
    keyMap: {string: string}
    result: {for k, v in src {"\(*keyMap[k] | k)": v}}
}

// work in progress

//challenge4: {
//    #alanMoore = {
//        "name": "Alan Moore",
//        "bookIsbns": ["978-1779501127"]
//    }
//    #bookItem = {
//        "id": "book-item-1",
//        "rackId": "rack-17",
//        "isLent": true
//    }
//    testAuthor: (#renameKeys & {src: #alanMoore, keyMap: {"bookIsbns": "books"}}).result,
//    testBook: (#renameKeys & {src: #bookItem, keyMap: {"rackId": "id", "id": "bookItemId"}}).result,
//}
