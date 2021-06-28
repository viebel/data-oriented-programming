var myVec = PersistentVector.ofIter(List.of(10, 2, 3)); // <1>

for (Integer i : myVec) {
    System.out.println(i);
}
