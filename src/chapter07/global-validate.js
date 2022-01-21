var ajvHidden = new Ajv(); 
validate = function(schema, data) {
  return ajvHidden.validate(schema, data);
}

