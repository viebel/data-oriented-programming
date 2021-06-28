_.isEqual(Catalog.authorNames({}, []), []);
_.isEqual(Catalog.authorNames({}, ["alan-moore"]), [undefined]);

_.isEqual(Catalog.authorNames(catalogData, ["alan-moore", "albert-einstein"]),
          ["Alan Moore", undefined]);
_.isEqual(Catalog.authorNames(catalogData, []), []);
_.isEqual(Catalog.authorNames(catalogData, ["albert-einstein"]), [undefined]);
