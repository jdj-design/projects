class Dog {
  constructor(breed, name) {
      this.breed = breed;
      this.name = name;
  };
  bark(numberOfTimes) {
      console.log(`${this.name}, a ${this.breed}, barks ${numberOfTimes} times!`)
  };
}
class ToyDog extends Dog {
  constructor(breed, name) {
      super(breed, name);
  };
  bark(numberOfTimes) {
     console.log(`${this.name}, a very small and cute ${this.breed}, barks ${numberOfTimes} times!`)
  };
}
class HerdingDog extends Dog {
  constructor(breed, name) {
      super(breed, name);
  };
}
const pomeranian = new ToyDog('Pomeranian', 'Sausage');
const corgi = new Dog('Corgi', 'Stump');
const collie = new HerdingDog('Rough Collie', 'Lassie');
pomeranian.bark(3);
corgi.bark(4);
collie.bark(5);