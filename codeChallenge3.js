"Use Strict";

// const TestData1 = [5, 2, 4, 1, 15, 8, 3];
// const TestData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = (Arr) => {
//   const res = Arr.map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//   return Math.trunc(res);
// };

// console.log(calcAverageHumanAge(TestData1));
// console.log(calcAverageHumanAge(TestData2));

// const calcAveHumanAge = (arr) => {
//   let ages = arr.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(ages);
//   let adults = ages.filter((age) => {
//     return age >= 18;
//   });
//   console.log(adults);
//   let avg = adults.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   console.log(Math.floor(avg));
// };

// calcAveHumanAge(TestData1);
// calcAveHumanAge(TestData2);
