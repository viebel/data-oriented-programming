class DynamicAccess {
    static Object get(Map m, String k)  {
        return (m).get(k);
    }

    static Object get(Map m, List<String> path) {
        Object v = m;
        for (String k : path) {
            v = get((Map)v, k);
            if (v == null) {
                return null;
            }
        }
        return v;
    }
}


