class DynamicAccess {
    static Object get(Map m, String k)  {
        return (m).get(k);
    }

    static Object get(Map m, List<String> p) {
        Object v = m;
        for (String k : p) {
            v = get((Map)v, k);
            if (v == null) {
                return null;
            }
        }
        return v;
    }

    static String getAsString(Map m, String k) {
        return (String)get(m, k);
    }

    static String getAsString(Map m, List<String> p) {
        return (String)get(m, p);
    }
}
