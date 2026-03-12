// 1. Create a method that prints a given animal and its sound.
// 2. Add a prototype with another action for the animal.
// 3. Output an entire animal object into the console.

class Animal {
    constructor(tipo, sound, velocity) {
        this.tipo = tipo;
        this.sound = sound;
        this.velocity = velocity;
    }

    callAnimalSound() {
        console.log("The " + this.tipo + " sounds like: " + this.sound);
    }
}


Animal.prototype.callAnimalVelocity = function() {
    console.log("The " + this.tipo + " runs at: " + this.velocity);
}

let dog = new Animal("dog", "au au", "50 km/h");

console.log(dog);
dog.callAnimalSound();
dog.callAnimalVelocity();