class DynamicAccess {
  static Object get(Object o, String k)  {
    if(o instanceof Map) {
      return ((Map)o).get(k);
    }
    try {
      return (o.getClass().getDeclaredField(k).get(o));
    } catch (IllegalAccessException | NoSuchFieldException e) {
      return null;
    }
  }

  static Object get(Object o, List<String> p) {
    Object v = o;
    for (String k : p) {
      v = get(v, k);
    }
    return v;
  }

  static String getAsString(Object o, String k) {
    return (String)get(o, k);
  }

  static String getAsString(Object o, List<String> p) {
    return (String)get(o, p);
  }
}
