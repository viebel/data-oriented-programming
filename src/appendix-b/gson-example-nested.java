BookData sevenHabitsNestedRecord = new BookWithAttributes(
    "978-1982137274",
    "7 Habits of Highly Effective People",
    2020,
    432,
    "en"
);

System.out.println(gson.toJson(sevenHabitsNestedRecord));
// → {"isbn":"978-1982137274","title":"7 Habits of Highly Effective People", …}

