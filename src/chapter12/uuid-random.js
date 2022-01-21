var uuidSchema = {
  "type": "string",
  "pattern": "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"
};

JSONSchemaFaker.generate(uuidSchema);
// → "7aA8CdF3-14DF-9EF5-1A19-47dacdB16Fa9"

