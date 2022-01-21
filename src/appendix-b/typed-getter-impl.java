class Getter <T> {
    private String key;

    public <T> Getter (String k) {
        this.key = k;
    }

    public T get (Map m) {
        return (T)(DynamicAccess.get(m, key));
    }
}
