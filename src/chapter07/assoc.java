var myMap = PersistentHashMap.of(Map.of("aa", 1, "bb", 2).entrySet()); // <1>

var myNextMap = myMap.assoc("aa", 42);
