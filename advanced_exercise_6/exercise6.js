//#1 create two classes: an Animal class and a Mammal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
  constructor (name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor (name, type, color){
    super (name, type, color)
  }
  sound(){
    console.log(`Moo! My name is ${this.name}. I am a ${this.color} ${this.type}`);
  }
}

const cow = new Mammal("Sammie", "cow", "black and white");

console.log(cow);