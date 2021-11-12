var customer = {
  "customer-id": "joe",
  "items": [
    {
      "item": "phone",
      "quantity": 1
    },
    {
      "item": "pencil",
      "quantity": 10
    }
  ]
};

var expectedRes = [
  {
    "customer-id": "joe",
    "items": {
      "item": "phone",
      "quantity": 1
    }
  },
  {
    "customer-id": "joe",
    "items": {
      "item": "pencil",
      "quantity": 10
    }
  }
]

_.isEqual(unwind(customer, "items"), expectedRes)

