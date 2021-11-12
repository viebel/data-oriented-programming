interface IAnimal {
    public void greet();
}

class Dog implements IAnimal {
    private String name;
    public void greet() {
        System.out.println("Woof woof! My name is " + animal.name);
    }
}

class Cat implements IAnimal {
    private String name;
    public void greet() {
        System.out.println("Meow! I am " + animal.name);
    }
}


class Cow implements IAnimal {
    private String name;
    public void greet() {
        System.out.println("Moo! Call me " + animal.name);
    }
}

