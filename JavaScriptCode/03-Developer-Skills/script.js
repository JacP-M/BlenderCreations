// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthyear => 2037 - birthyear;
/*
// a little program i made
const numberPicked = prompt('what number do you want to check?');

const randomNumberGenerator = function () {
  let raondomNumber = Math.trunc(Math.random() * 50) + 1;
  return raondomNumber;
};

const numbersGeneratedArray = [];

for (let i = 0; i < 50; i++) {
  numbersGeneratedArray.push(randomNumberGenerator());
}

console.log(numberPicked);

console.log(numbersGeneratedArray);

console.log(
  `the number ${numberPicked} ${
    numbersGeneratedArray[numberPicked] ? 'was' : 'was not'
  } generated `
);
*/
/*
//using google,stack overflow and MDN episode #59

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
//debugging withe the console and beakpoints episode #61

const mesureKelvin = function () {
  const measurement = {
    tyoe: 'temp',
    unit: 'celsius',
    value: Number(prompt('degrees celsius')),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(mesureKelvin());
*/
/*
//coding challenge #1 episode #62

const printForecast = function (forecast) {
  for (let i = 0; i < forecast.length; i++) {
    console.log(`${forecast[i]} in ${i + 1} days`);
  }
  console.log(forecast);
  return forecast;
};

console.log(printForecast([12, 5, -5, 0, 4]));
*/
