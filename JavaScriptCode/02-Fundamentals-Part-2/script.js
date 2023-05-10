'use strict'// this has now activated strict mode
/*
let hadDriversLicense = false;
const passTest = true;

if (pastTest) hasDriversLicense = true;
if (hadDriversLicense) console.log('i can drive');
*/
/*
//this is defining a function
function logger() {
    console.log('my name is jacques');
}

// calling/running/invoking the function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleAndOrangeJuice = fruitProcessor(2, 4);
console.log(appleAndOrangeJuice);
*/
/*
//function declaration episode #34
//function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear
    return age;
}

const age1 = calcAge1(2003);
console.log(age1);
// function expression
const calcage2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcage2(2003);

console.log(age1, age2);
*/

//arrow functions episode #35

/*
//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntillRetirement = (birthYear, firstname) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement}`;
}

console.log(yearsUntillRetirement(2003, 'jacques'));
*/
/*
// functions calling other functions episode #36

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange. `;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
// reviewing functions epiode #37
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntillRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired`);
        return -1;

    }

    // return `${firstname} retires in ${retirement} years`;
}
console.log(yearsUntillRetirement(2003, 'jacques'));
console.log(yearsUntillRetirement(1950, 'jonas'));
*/
/*
// coding challenge #1 episode #38
const calcAverage = (score1, score2, score3) => {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore
}

console.log(`the Dolphins average is ${calcAverage(44, 23, 71)}`);
console.log(`the Koalas average is ${calcAverage(65, 54, 49)}`);

const checkwinner = function (DolphinAvg, KoalaAvg) {
    if (DolphinAvg > KoalaAvg * 2) {
        console.log(`winners are the dolphins with ${DolphinAvg} points`)
        return DolphinAvg
    } else if (KoalaAvg > DolphinAvg * 2) {
        console.log(`the Koalas are the winners with ${KoalaAvg} points`)
        return KoalaAvg
    } else {
        console.log('sadly no one has won the tournament')
        return 'no one won'
    }
}
console.log(checkwinner((calcAverage(44, 23, 71)), (calcAverage(65, 54, 49))))

console.log(checkwinner((calcAverage(85, 54, 41)), (calcAverage(23, 34, 27))))

*/
// introdouction to arrays episode # 39
/*
const friends = ['michael', 'steven', 'peter'];
console.log(friends);


console.log(friends[0]);

console.log(friends.length);

friends[2] = 'jay';
console.log(friends);
const jacques = ['jacques', 'parraga-,ichitsch', 2037 - 2003, 'student', friends];
console.log(jacques);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[2]));
*/
/*
// basic array operations episode #40

const friends = ['michael', 'steven', 'peter'];
friends.push('jay'); //this is to add something to the end of the array

friends.unshift('jhon'); //this is to add something to the start of the array
friends.pop(); // removes the last object of the array
friends.shift();// this removes the first object from the array

console.log(friends.indexOf('steven'));

console.log(friends.includes('steven'));
*/

//coding challenge #2 episode # 41
/*
const bills = [125, 555, 44]
let bill
let tip
let totalBill

const tipCalc = function (bill) {

    bill <= 300 && bill >= 50 ? tip = (bill / 100) * 15 : tip = (bill / 100) * 20;
    return tip
}

const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

const totalcalc = function (bill, tip) {
    totalBill = bill + tip
    return totalBill
}

const totalBills = [totalcalc(bills[0], tips[0]), totalcalc(bills[1], tips[1]), totalcalc(bills[2], tips[2])];

console.log(tips);
console.log(totalBills);
*/
/*
//  use objects to group together variables
const jacques = {
    firstName: 'jacques',
    lastName: 'parraga-michitsch',
    age: 2037 - 2003,
    occupation: 'student',
    friends: ['michael', 'jhon', 'dave']
};

console.log(jacques.lastName); // this how you can call something from an object.
console.log(jacques['lastName']); // this is another way of calling an object but with this one you can add equations and computed property names

const nameKey = 'Name';
console.log(jacques['first' + nameKey]);

const interestedin = prompt('what so you want to know about jacques? choose between firstName, lastName, age and occupation');

if (jacques[interestedin]) {
    console.log(jacques[interestedin]);
} else {
    console.log('you cannot ask for this information')
}

jacques.location = 'Spain';
jacques['twitter'] = '@jacques'
console.log(jacques)

//challenge
console.log(`${jacques.firstName} has ${jacques.friends.length} friends and his best friend is ${jacques.friends[0]}`);
*/
/*
//object methods episode #44

const jacques = {
    firstName: 'jacques',
    lastName: 'parraga-michitsch',
    birthYear: 2003,
    occupation: 'student',
    friends: ['michael', 'jhon', 'dave'],
    hasDriversLicense: false,

    // calcAge: function () { //all functions in objects are called methods
    //     return 2037 - this.birthYear //use this. to access things withing the object
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.occupation}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
};

console.log(jacques.calcAge());

console.log(jacques.age);

// small challenge
console.log(jacques.getSummary());
*/

//coding challenge #3 episode #45
/*
const mark = {
    firstName: 'mark',
    lastName: 'miller',
    height: 1.69,
    mass: 78,
    calcBMI: function (BMI) {
        BMI = this.mass / this.height ** 2;
        return BMI;
    }
}

const john = {
    firstName: 'john',
    lastName: 'smith',
    height: 1.95,
    mass: 92,
    calcBMI: function (BMI) {
        BMI = this.mass / this.height ** 2;
        return BMI;
    }
}

console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? 'higher' : 'lower'} than ${mark.firstName}'s BMI(${mark.calcBMI()})'`);
*/
/*
// iteration: the for loop episode#46
// for loop keeps running while condition is true ++ increases by one
for (let rep = 1; rep <= 10; rep = rep + 1) {
    console.log(`lifting weights repitition ${rep}`);
}
*/
/*
// looping arrays breaking and continuing episode #47

const jacquesArray = [
    'jacques',
    'parraga-michitsch',
    2021 - 2003,
    'student',
    ['michael', 'jhon', 'dave']
];
const types = []

for (let i = 0; i < jacquesArray.length; i++) {
    console.log(jacquesArray[i], typeof jacquesArray[i]);
    // this a way to fill an array
    // types[i] = typeof jacquesArray[i];
    types.push(typeof jacquesArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//constinue and break
for (let i = 0; i < jacquesArray.length; i++) {
    if (typeof jacquesArray[i] !== 'string') continue;
    console.log(jacquesArray[i], typeof jacquesArray[i]);
}

for (let i = 0; i < jacquesArray.length; i++) {
    if (typeof jacquesArray[i] === 'number') break;
    console.log(jacquesArray[i], typeof jacquesArray[i]);
}
*/
/*
// looping backwards and loops in loops episode #48

const jacquesArray = [
    'jacques',
    'parraga-michitsch',
    2021 - 2003,
    'student',
    ['michael', 'Peter', 'Steven']
];

for (let i = jacquesArray.length; i >= 0; i--) {
    console.log(i, jacquesArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- starting exercise${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(` Exercise ${exercise} : lifting weights repitition ${rep}`);
    }
}
*/
/*
// the while loop episode #49

for (let rep = 1; rep <= 10; rep = rep + 1) {
    // console.log(`lifting weights repitition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE : lifting weights repitition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end');
}
*/
/*
// coding challenge #4 episode #50

const billArray = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];
let tips = [];
let total = [];

const tipCalc = function (bill) {
    let tip;
    return bill <= 300 && bill >= 50 ? tip = (bill / 100) * 15 : tip = (bill / 100) * 20;

}

for (let bill = 0; bill < billArray.length; bill++) {
    tips.push(tipCalc(billArray[bill]));
    total.push(tips[bill] + billArray[bill]);

}
console.log(tips);
console.log(billArray);
console.log(total);

const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}
console.log(calcAvg(total));
*/