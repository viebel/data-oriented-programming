(ns dop 
  (:require [clojure.data.json :as json]
            [clojure.string :as string]
            [clojure.set :as set]
            [clojure.data :as data]))

(def file
  (slurp "resources/lib_data.json"))

;; The given data uses an email address as a key in certain places.
;; Those are left as strings because Clojure does not allow `@` in
;; keywords.
(defn parse-lib-data [lib-data]
  (json/read-str lib-data 
                 :key-fn (fn [k]
                           (if (string/includes? k "@")
                             k
                             (keyword k)))))

(def lib-data
  (parse-lib-data file))


;; Challenge #1:

(defn get-book-property [lib-data isbn field]
  (get-in lib-data [:catalog :booksByIsbn isbn field]))

;; (get-book-property lib-data :978-1779501127 :title) ;; "Watchmen"


;; Challenge #2:

(defn all-books [lib-data]
  (->> (get-in lib-data [:catalog :booksByIsbn])
       (vals)))

(defn book-info->json [book]
  (let [all-authors (get-in lib-data [:catalog :authorsById])
        authors (map keyword (:authorIds book))
        authors (map (fn [author]
                       (get-in all-authors [author :name]))
                     authors)]
    (json/write-str
      {:title (:title book)
       :isbn  (:isbn book)
       :authors authors})))

(defn book-info [lib-data title]
  (let [title (string/lower-case title)
        books (all-books lib-data)
        matches (filter (fn [book]
                          (let [book-title (string/lower-case (:title book))]
                            (string/includes? book-title title)))
                        books)] 
    (map book-info->json matches)))

;; (book-info lib-data "watch") ;; ("{\"title\":\"Watchmen\",\"isbn\":\"978-1779501127\",\"authors\":[\"Alan Moore\",\"Dave Gibbons\"]}")


;; Challenge #3:

(defn block-member [lib-data email]
  (assoc-in lib-data [:userManagement :members email :isBlocked] true))

;; (block-member lib-data "samantha@gmail.com")
    

;; Challenge #4:

;; Clojure std library contains this function: `clojure.set/rename-keys`.
;; (set/rename-keys {:a 1 :b 2} {:a :new-a :b :new-b}) ;; {:new-a 1, :new-b 2}


;; Challenge #5:

(def example-isbn "978-1779501127")
(def api-url
  (str "https://openlibrary.org/isbn/" example-isbn ".json"))

(def api-data-example
  (parse-lib-data (slurp api-url)))
(def lib-data-example
  (get-in lib-data [:catalog :booksByIsbn (keyword example-isbn)]))

(defn merge-and-serialize [api-data db-data]
  (json/write-str
    (merge api-data db-data)))

;; (merge-and-serialize api-data-example lib-data-example)


;; Challenge #6:

;; Clojure std library contains this function: `clojure.data/diff`.
;; (butlast 
;;   (data/diff lib-data (block-member lib-data "samantha@gmail.com")))
;;
;; => ({:userManagement {:members {"samantha@gmail.com" {:isBlocked false}}}}
;; =>  {:userManagement {:members {"samantha@gmail.com" {:isBlocked true}}}})
