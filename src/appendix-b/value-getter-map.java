class DynamicAccess {
    static Object get(Map m, String k) {
            return (m).get(k);
    }

    static String getAsString(Map m, String k) {
        return (String)get(m, k);
    }
}

