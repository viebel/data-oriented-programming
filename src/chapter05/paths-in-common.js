function havePathInCommon(diff1, diff2) {
  return !_.isEmpty(_.intersection(informationPaths(diff1),
                                  informationPaths(diff2)));
}

