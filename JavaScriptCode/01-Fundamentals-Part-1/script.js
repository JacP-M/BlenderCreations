/*
let js = 'amazing';
//if (js === 'amazing') alert('JavaScript is FUN!');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("jacques");

let firstname = "jacques";
console.log(firstname);
console.log(firstname);
console.log(firstname);

//assignment nr1 values and variables
let country = "england";
let continent = "europe";
let population = "55.98 million";
console.log(country);
console.log(continent);
console.log(population);
*/
/*
// data types
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jacques');

javascriptIsFun = 'YES!';
*/
/*
//let const and var episode 13
let age = 17;
age = 18;

const birthyear = 2003;

var occupation = 'student';
occupation = 'unemployed';
*/
/*
//basic opperators episode #14
// maths operators
const now = 2037
const ageJacques = now - 2003
const ageSarah = now - 2006
console.log(ageJacques, ageSarah);

console.log(ageJacques * 2, ageSarah / 10, 2 ** 3);
// ** means to the power of, * means times, / means divided by

const firstname = 'Jacques';
const lastname = 'Parraga-Michitsch'
console.log(firstname + ' ' + lastname);

//assignment opperators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; //x = x + 1
x--; //x = x - 1
console.log(x);

// comparison operators
console.log(ageJacques > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 2003 > now - 2006);
*/
/*
//operator procedence episode #15
const now = 2037
const ageJacques = now - 2003
const ageSarah = now - 2006

console.log(now - 2003 > now - 2006);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const avarageAge = (ageJacques + ageSarah) / 2 // this is in brackets as normally addition occours after division but we want it to be the other way round so we add brackets to change the oprder of operation
console.log(ageJacques, ageSarah, avarageAge);
*/

// coding challenge #1 episode #16
/*
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;


let johnBMI1 = (johnWeight1 / johnHeight1 ** 2);
let markBMI1 = (markWeight1 / markHeight1 ** 2);

console.log('marks BMI 1');
console.log(markBMI1);
console.log('johns BMI 1');
console.log(johnBMI1);
console.log('is marks BMI greater than johns?')
console.log(markBMI1 > johnBMI1);

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

let markBMI2 = (markWeight2 / markHeight2 ** 2);
let johnBMI2 = (johnWeight2 / johnHeight2 ** 2);

console.log('marks BMI 2');
console.log(markBMI2);
console.log('johns BMI 2');
console.log(johnBMI2);
console.log('Is marks BMI greater than Johns?')
console.log(markBMI2 > johnBMI2)
*/
/* // strings and template literals episolde #17
const firstname = 'jacques';
const job = 'student';
const birthyear = 2003;
const year = 2037;

const jacques = " i'm " + firstname + ', a ' + (year - birthyear) + ' years old' + job + '!';
console.log(jacques);
//below is a better way of writing the thing above, ${} is a way of putting variables or values into strings!! they are called template strings.
const jacquesnew = `i'm ${firstname} , a ${year - birthyear} year old ${job} !`;
console.log(jacquesnew)
// back ticks are above the tab key and are used when you want to put variables into strings
console.log(` back ticks also work with normal strings`)

console.log('string with \n means multiple \n lines');
console.log(`string
multiple
lines`);// back ticks also work with multiple lines but you have to go on a new line.
*/
/*
// if / else statements episode #18
const age = 19;
const isOldEnough = age >= 18;
// if/else statements are for the true or false of booleans
if (isOldEnough) {
    console.log('sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(` sarah is too young, wait another ${yearsLeft} years`);
}

const birthYear = 2002;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// coding challenge #2 episode #19
/*
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;


let johnBMI1 = (johnWeight1 / johnHeight1 ** 2);
let markBMI1 = (markWeight1 / markHeight1 ** 2);


if (markBMI1 > johnBMI1) {
    console.log(`marks BMI1 (${markBMI1})
is higher than jhons BMI1 (${johnBMI1})`);
} else {
    console.log(`jhons BMI1 (${johnBMI1})
    is higher than marks BMI1 (${markBMI1})`);
}

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

let markBMI2 = (markWeight2 / markHeight2 ** 2);
let johnBMI2 = (johnWeight2 / johnHeight2 ** 2);


if (markBMI2 > johnBMI2) {
    console.log(`marks BMI2 (${markBMI2})
    is greater than jhons BMI2 (${johnBMI2})`);
} else {
    console.log(`marks BMI2 (${markBMI2})
is not greater than johns BMI2 (${johnBMI2})`);
}
*/
/*
// type conversion and coercion episode #20
//type converstion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
// change type of thing by saying it before hand also usse capital letters.
console.log(String(23), 23);

// type coertion/ the + will make it a string
console.log('i am ' + 23 + ' years old')
//minus does the opposite of a plus and make it a number also works with / and *. this will work with <>.
console.log('23' - '10' - 3)
*/
/*
//truthy and falsy values episode #21
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('jacques')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

const money = 0;
if (money) {
    console.log("Don't spent it all");
} else {
    console.log("you should get a job");
}

let height;
if (height) {
    console.log('Yaya height is defined');
} else {
    console.log('height is undefined');
}
*/
/*
// equality operators == vs === episode #22

const age = 18;
if (age === 18) console.log('you just became an adult');
// ==(loose) works with strings and ===(strict) does not

const favorite = Number(prompt(" what is you're favorite number"));
console.log(favorite);

if (favorite === 23) { // '23' == 23 as it is a string
    console.log('cool 23 is a amazing number')
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log(` the number ${favorite} is the incorrect number, you should have picked 23 or 7 better, luck next time`);
}
// !== and != mean is defferent too. !== is strict and != is loose
if (favorite !== 23) console.log('WHY DIDNT YOU PICK 23')
*/
/*
//boolean logic episode #23
//logical opperators episode #24

const hasDriversLicense = true; //A
const hasGoodEyeSight = true; //B
// && means and || means or  ! means not
console.log(hasDriversLicense && hasGoodEyeSight);
console.log(hasDriversLicense || hasGoodEyeSight);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodEyeSight;

if (hasDriversLicense && hasGoodEyeSight) {
    console.log('sarah is able to drive');
} else {
    console.log('sarah cannot drive');
}

const isTierd = false; //C
console.log(hasDriversLicense || hasGoodEyeSight || isTierd)

if (hasDriversLicense && hasGoodEyeSight && !isTierd) {
    console.log('sarah is able to drive');
} else {
    console.log('sarah cannot drive');
}
*/

//coding challenge #3 episode #25
/*
const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;
const koalaAverageScore1 = (88 + 91 + 110) / 3;

console.log(koalaAverageScore1);

const scoreDolohins1 = 96;
const scoreDolohins2 = 108;
const scoreDolohins3 = 89;
const dolphinAverageScore1 = (96 + 108 + 89) / 3;

console.log(dolphinAverageScore1);

if (koalaAverageScore1 > dolphinAverageScore1) {
    console.log(` the koalas have won with ${koalaAverageScore1} points`)
} else if (koalaAverageScore1 === dolphinAverageScore1) {
    console.log('it is a draw!!!')
} else {
    console.log(`the dolphins have won with ${dolphinAverageScore1} points`)
}

const scoreKoalas12 = 109;
const scoreKoalas22 = 95;
const scoreKoalas32 = 123;
let koalaAverageScore2 = (scoreKoalas12 + scoreKoalas22 + scoreKoalas32) / 3;

console.log(koalaAverageScore2);

let koalaAverageAbove100 = false;

if (koalaAverageScore2 >= 100) {
    koalaAverageAbove100 = true;
}

const scoreDolohins12 = 97;
const scoreDolohins22 = 112;
const scoreDolohins32 = 101;
let dolphinAverageScore2 = (scoreDolohins12 + scoreDolohins22 + scoreDolohins32) / 3;

console.log(dolphinAverageScore2);

let dolphinAverageAbove100 = false;

if (dolphinAverageScore2 >= 100) {
    dolphinAverageAbove100 = true
}

let theKoalasWin = false;
let theDolphinsWin = false;

if (koalaAverageScore2 > dolphinAverageScore2) {
    theKoalasWin = true;
} else {
    theDolphinsWin = true;
}

if (koalaAverageAbove100 && theKoalasWin) {
    console.log("the kaolas have won the tournament")
} else {
    console.log("the dolphins have won the tournament")
}

if (dolphinAverageAbove100 && theDolphinsWin) {
    console.log('the dolohins have won the tournament')
} else {
    console.log('the koalas have won the tournament')
}

console.log(theKoalasWin)
console.log(koalaAverageAbove100)
*/
/*
// the switch statemnt episode #26

const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup')
        break;

    case 'tuesday':
        console.log('go to the shop');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('go to work');
        break
    case 'friday':
        console.log('work some more');
        break
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break
    default:
        console.log('not a valid day');
}

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup')
} else if (day === 'tuesday') {
    console.log('go to the shop');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('go to work');
} else if (day === 'friday') {
    console.log('work some more');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend');
} else {
    console.log('day not valid')
}
*/

//statements and expresions episode #27
/*
// the conditional (ternary) operator episode #18

const age = 23; // a question mark can be used as an if else statement
age >= 18 ? console.log('you are allowed to drink') :
    console.log('you are not allowed to drink');

const drink = age >= 18 ? 'allowed' : 'not allowed';
console.log(drink);

console.log(` i am ${age >= 18 ? 'allowed' : 'not allowed'} to drink`);
*/
/*
//coding challenge #4 episode #29
const givenname = String(prompt("what is your name?"));
let tip
const bill = 465;
let totalBill;

bill <= 300 && bill >= 50 ? tip = (bill / 100) * 15 : tip = (bill / 100) * 20;

totalBill = bill + tip;

console.log(`${givenname} bill is ${bill} and his tip is ${tip} so his total bill will be ${totalBill}`);
*/
const givennameallowed = ['jacques', 'roberto', 'angelika', 'fabrel'];
const givenname = String(prompt("what is your name?"));

console.log(givenname);

if (givenname === 'jacques') {
    console.log('wow, what a cool name')
} else if (givenname === 'roberto') {
    console.log('roberto is a very cool name');
} else if (givenname === '') {
    console.log('you have not entered a name please try again');
} else {
    console.log(`the name ${givenname} isnt recognised sorry :(`)
    console.log('WHY ISNT YOUR NAME JACQUES???');
}

// const givennameallowed = 'jacques' ? 'allowed' : 'not allowed' && givenname === 'roberto' ? 'allowed' : 'not allowed';
console.log(`'the name ${givenname} is ${givennameallowed.includes(givenname) ? 'allowed' : 'not allowed'}'`);
console.log(givennameallowed);