var informationPath = List.of("attributes",
                              "language");
DynamicClassAccess.getAsString(sevenHabitsNestedRecord, informationPath)
.toUpperCase();
// → "EN"
