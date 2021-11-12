var myMap = new HashMap<String, Object>();
myMap.put("name", "Isaac");
myMap.put("age", 42);

var mapEntriesArray =  (Map.Entry<String, Object>[])new Map.Entry[myMap.size()];
myMap.entrySet().toArray(mapEntriesArray);

var myImmutableMap = Map.ofEntries(mapEntriesArray);


