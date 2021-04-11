(ns dop.core
  (:require [clojure.string :as str]
            [clojure.data.json :as json]
            [clojure.data :as data]))

(def ld (json/read-str (slurp "libdata.json")))

;; Warm up
;; What’s the title of the book whose ISBN is “978-1779501127” in upper case?

(str/upper-case
 (get-in ld ["catalog" "booksByIsbn" "978-1779501127" "title"]))
;; => "WATCHMEN"

;; Challenge #1 ‍
;; Write a function named getBookProperty that receives library data
;; and ISBN and a field name and returns the value of the field for
;; the book with the given ISBN

(defn getBookProperty
  "Get fldname for book with isbn in libdata"
  [libdata isbn fieldname]
  (get-in libdata ["catalog" "booksByIsbn" isbn fieldname]))

(getBookProperty ld "978-1779501127" "title")
;; => "Watchmen"

;; Challenge #2‍

;; Write a function named bookInfo that receives library data and a
;; string and returns a JSON string that contains book information
;; about the books whose title contains the given string, in a case
;; insensitive way. Book information is made of: title, isbn, author
;; full names.

;; Remark: You are not allowed to extract author names from author
;; ids. Assume that author ids are opaque strings.

(defn authorNames [catalogdata book]
  (let [authorids (get book "authorIds")
        abids (get catalogdata "authorsById")
        authors (map (partial get abids) authorids)]
    (map #(get % "name") authors)))

(defn bookInfo [catalogdata book]
  {:title (get book "title")
   :isbn  (get book "isbn")
   :authorNames (authorNames catalogdata book)})

(defn searchBooksByTitle [librarydata query]
  (let [allbooks (get-in librarydata ["catalog" "booksByIsbn"])
        matchingbooksbyid (filter #(str/includes?
                                    (str/lower-case (get (val %) "title"))
                                    (str/lower-case query))
                                  allbooks)
        matchingbooks (vals matchingbooksbyid)]
    (map (partial bookInfo (get librarydata "catalog")) matchingbooks)))

@(def sbbt (searchBooksByTitle ld "watCH"))
;; => ({:title "Watchmen",
;;      :isbn "978-1779501127",
;;      :authorNames ("Alan Moore" "Dave Gibbons")})

(json/write-str sbbt)
;; => "[{\"title\":\"Watchmen\",\"isbn\":\"978-1779501127\",\"authorNames\":[\"Alan Moore\",\"Dave Gibbons\"]}]"


;; Challenge #3: Add a piece of information

;; Challenge: Write a function named blockMember that receives library
;; data and an email address and returns a new version of library data
;; without altering the original version, where the user with the
;; given email is blocked.

(defn blockMember [librarydata email]
  (assoc-in librarydata ["userManagement" "members" email "isBlocked"] true))

(def updatedld (blockMember ld "samantha@gmail.com"))

(let [infopath ["userManagement", "members", "samantha@gmail.com", "isBlocked"]]
  [(get-in updatedld infopath) (get-in ld infopath)])
;; => [true false]

;; Challenge #4: Rename keys in a data entity

;; Challenge: Write a function named renameKeys that receives a data
;; entity and a key mappings and returns a new data entity, without
;; altering the original entity, where the fields are renamed
;; according to the key mappings

(defn renameKeys [map keymap]
  (clojure.set/rename-keys map keymap))

(def alanMoore {"name" "Alan Moore"
                "bookIsbns" ["978-1779501127"]})

(renameKeys alanMoore {"bookIsbns" "books"})
;; old => {"name" "Alan Moore", "bookIsbns" ["978-1779501127"]}
;; new => {"name" "Alan Moore", "books" ["978-1779501127"]}

(def bookItem {"id" "book-item-1", "rackId" "rack-17", "isLent" true})

(renameKeys bookItem {"rackId" "id" "id" "bookItemId"})
;; old => {"id" "book-item-1", "rackId" "rack-17", "isLent" true}
;; new => {"isLent" true, "id" "rack-17", "bookItemId" "book-item-1"}

;; Challenge #5: Merge pieces of information

;; Challenge: Write a function named mergeAndSerialize that receives
;; two pieces of book information, one from the database and one from
;; an external service like Open Library Books API and returns a JSON
;; string with information from both sources.

(def watchmenFromDB
  (json/read-str 
   "{\"isbn\": \"978-1779501127\",
   \"title\": \"Watchmen\",
   \"publicationYear\": 1987,
   \"authorIds\": [\"alan-moore\", \"dave-gibbons\"],
   \"bookItems\": [{\"id\": \"book-item-1\", \"rackId\": \"rack-17\", \"isLent\": true},
                 {\"id\": \"book-item-2\", \"rackId\": \"rack-17\", \"isLent\": false}]};"))

(def watchmenFromOpenLib
  (json/read-str 
   "{\"publishers\": [\"DC Comics\"],
    \"number_of_pages\": 334,
    \"weight\": \"1.4 pounds\",
    \"physical_format\": \"Paperback\",
    \"subjects\": [\"Graphic Novels\", \"Comics & Graphic Novels\", \"Fiction\", \"Fantastic fiction\"],
    \"isbn_13\": [\"9780930289232\"],
    \"title\": \"Watchmen\",
    \"isbn_10\": [\"0930289234\"],
    \"publish_date\": \"April 1, 1995\",
    \"physical_dimensions\": \"10.1 x 6.6 x 0.8 inches\"}"))

(defn mergeAndSerialize [a b]
  (json/write-str (merge a b)))

(mergeAndSerialize watchmenFromDB watchmenFromOpenLib)
;; => "{\"publicationYear\":1987,\"isbn_10\":[\"0930289234\"],\"isbn_13\":[\"9780930289232\"],\"authorIds\":[\"alan-moore\",\"dave-gibbons\"],\"number_of_pages\":334,\"publish_date\":\"April 1, 1995\",\"title\":\"Watchmen\",\"physical_dimensions\":\"10.1 x 6.6 x 0.8 inches\",\"subjects\":[\"Graphic Novels\",\"Comics & Graphic Novels\",\"Fiction\",\"Fantastic fiction\"],\"publishers\":[\"DC Comics\"],\"physical_format\":\"Paperback\",\"bookItems\":[{\"id\":\"book-item-1\",\"rackId\":\"rack-17\",\"isLent\":true},{\"id\":\"book-item-2\",\"rackId\":\"rack-17\",\"isLent\":false}],\"isbn\":\"978-1779501127\",\"weight\":\"1.4 pounds\"}"


;; Challenge #6: Compare versions of data

;; Challenge: Write a function named diff that receives two versions
;; of library data and returns an object that contains the diff
;; between the two versions, in the format of your choice.

(defn diff [data1 data2] (second (data/diff data1 data2)))

(diff ld updatedld)
;; => {"userManagement"
;;     {"members" {"samantha@gmail.com" {"isBlocked" true}}}}

(diff ld ld)
;; => nil
