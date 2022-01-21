import com.google.gson.*;
var gson = new Gson();

BookData sevenHabitsRecord = new BookData(
    "978-1982137274",
    "7 Habits of Highly Effective People",
    2020
);

System.out.println(gson.toJson(sevenHabitsRecord));
// → {"title":"7 Habits of Highly Effective People", …}


