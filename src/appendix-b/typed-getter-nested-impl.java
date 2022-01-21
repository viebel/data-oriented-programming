class Getter <T> {
    private List<String> path;
    private String key; 
    private boolean nested;

    public <T> Getter (List<String> path) {
        this.path = path;
        nested = true;
    }

    public <T> Getter (String k) {
        this.key = k;
        nested = false;
    }

    public T get (Map m) {
        if(nested) {
            return (T)(DynamicAccess.get(m, path));
        }
        return (T)(DynamicAccess.get(m, key));
    }
}
