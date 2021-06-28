SystemData.commit = function(previous, next) {
  this.systemData.swap(function(current) {
    return SystemConsistency.reconcile(current,
                                       previous,
                                       next);
  });
};
