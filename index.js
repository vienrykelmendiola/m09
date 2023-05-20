
let person = {
    name: 'Rykel',
    greet: function(){
        console.log(this.name + 'Mendiola');
    } //anonymous functions cause no name
}
console.log(person)
person.greet()

person.walk = function(){
    console.log(this.name + ' is walking around');
}
person.walk()
//methods are useful for creating reusable functionns
//that perform tasks related to objects

let friend = {
    fname: 'Rykel',
    lname: 'Mendiola',
    address: {
        city: 'Quezon',
        country: 'Philippines'
    },
    email: ['rykel252002@yahoo.com','rykel252002@yahoo.com'],
    introduce: function(){
        console.log('hello' + this.fname + this.lname);
    } 
};

friend.introduce()

/*
using object literals to create multiple kinds of pokemon 
*/
let myPokemon = {
    name: "Balbasur",
    level: 9,
    health: 21,
    attack: 19,
    tackle: function(){
        console.log("Lunge Attack");
        console.log("Enemy has damaged");
    },
    faint: function(){
        console.log("Fatigue");
    }
}
console.log(myPokemon)

//created an object constructor
function Pokemon(name, level, health, attack){
    //properties
    this.name = name;
    this.level = level;
    this.health = 5 + health;
    this.attack = level;

    //methods
    this.tackle = function(target){
        console.log(this.name + ' Jabbed ' + target.name);
        console.log("Enemy has damaged");
    };
    this.faint = function(){
        console.log(this.name + 'fatigued');
    }
}
// new instances of pokemonobject with their unique properties

let Pikachu = new Pokemon('Pikachu', 10)
let Salamens = new Pokemon('Salamens', 10)

Pikachu.tackle(Salamens);
Pikachu.faint(Salamens);