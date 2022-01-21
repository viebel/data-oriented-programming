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

  static String getAsString(Object o, String k) {
    return (String)get(o, k);
  }
}
