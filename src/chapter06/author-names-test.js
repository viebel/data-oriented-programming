var catalogData = {
    "authorsById": {
        "alan-moore": {
            "name": "Alan Moore"
        },
        "dave-gibbons": {
            "name": "Dave Gibbons"
        }
    }
};

_.isEqual(Catalog.authorNames(catalogData, []), []);
_.isEqual(Catalog.authorNames(catalogData, ["alan-moore"]), ["Alan Moore"]);
_.isEqual(Catalog.authorNames(catalogData, ["alan-moore", "dave-gibbons"]),
          ["Alan Moore", "Dave Gibbons"]);
