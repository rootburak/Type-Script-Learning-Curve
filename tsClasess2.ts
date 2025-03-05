abstract class Animal {
    abstract makeSound(): void; 

    move(): void {
        console.log("The animal moves");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const dog = new Dog();
dog.makeSound(); 
dog.move(); 

const cat = new Cat();
cat.makeSound(); 
cat.move(); 