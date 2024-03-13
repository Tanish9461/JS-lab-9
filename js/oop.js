// STEP 1a: Create a new object using a regular function
function createNewPerson(firstName, lastName, age, gender, interests) {
    let obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.greeting = function () {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
    return obj;
}

// Use the function to create a new person and invoke the greeting method
let person1 = createNewPerson("P1", "LP1", 10, "Female", ["swimming", "dancing"]);

// STEP 2a: Rewrite the function as a constructor function
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        alert(`Hello, this is ${this.name.firstName} ${this.name.lastName}`);
    };
}

// Use the constructor function to create another person
let person2 = new Person("P2", "LP2", 90, "Male", ["dancing", "singing"]);

// STEP 4a: Use the Object() constructor to create an object
let car = new Object();
car.brand = "Honda";
car.model = "Civic";

// STEP 5a: Use Object.create() to create another object based on the 'car' object
let anotherCar = Object.create(car);
console.log(anotherCar.brand); // Output: Honda

// Hamburger object creation function
function createHamburger(bun, garnishes, cheeses, sauces, pattyType, pattyCount, toppings) {
    let hamburger = {};
    hamburger.bun = bun;
    hamburger.garnishes = garnishes;
    hamburger.cheeses = cheeses;
    hamburger.sauces = sauces;
    hamburger.pattyType = pattyType;
    hamburger.pattyCount = pattyCount;
    hamburger.toppings = toppings;
    hamburger.describe = function () {
        return `This hamburger has a ${bun} bun with ${garnishes.join(', ')} and ${cheeses.join(', ')} cheeses. It is topped with ${sauces.join(', ')} sauce and ${pattyCount} ${pattyType} patty(s). Toppings include ${toppings.join(', ')}.`;
    };
    return hamburger;
}

// Create a hamburger object
let myHamburger = createHamburger("sesame seed", ["lettuce", "tomato", "onion"], ["cheddar", "mozzarella"], ["ketchup", "mayo"], "beef", 1, ["pickles", "hot peppers", "olives"]);

// Output a description of the hamburger
console.log(myHamburger.describe());

