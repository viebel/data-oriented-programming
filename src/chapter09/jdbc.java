List<Map<String, Object>> convertJDBCResultSetToListOfMaps(ResultSet rs) {
    List<Map<String, Object>> listOfMaps = new ArrayList<Map<String, Object>>();
    ResultSetMetaData meta = rs.getMetaData();
    while (rs.next()) {
        Map map = new HashMap();
        for (int i = 1; i <= meta.getColumnCount(); i++) {
            String key = meta.getColumnLabel(i);
            Object value = rs.getObject(i);
            map.put(key, value);
        }
        listOfMaps.add(map);
    }
    return listOfMaps;
}
