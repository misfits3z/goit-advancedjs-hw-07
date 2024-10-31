class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random(); 
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }
    
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean = false;
    protected key: Key; 
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key; 
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {

    openDoor(key: Key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true; 
        } else {
            console.log("Неправильний ключ");
        }
    }
}

// Створення об'єктів
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

// Сценарій: людина намагається увійти в будинок
house.openDoor(person.getKey()); 
house.comeIn(person);            

export {};
