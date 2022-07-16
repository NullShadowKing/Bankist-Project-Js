"Use Strict";

// const TestData1 = [5, 2, 4, 1, 15, 8, 3];
// const TestData2 = [16, 6, 10, 5, 6, 1, 4];

// const caclAverageHumanAge = (arr) => {
//   let ages = arr.map((age) => {
//     if (age <= 2) {
//       return age * 2;
//     } else {
//       return 16 + age * 4;
//     }
//   });
//   return ages;
// };

// console.log(caclAverageHumanAge(TestData1));
// console.log(caclAverageHumanAge(TestData2));

// const filteredAges = (arr) => {
//   let filteredAgesval = arr.filter((age) => {
//     return age >= 18;
//   });
//   return filteredAgesval;
// };

// console.log(filteredAges(caclAverageHumanAge(TestData1)));
// console.log(filteredAges(caclAverageHumanAge(TestData2)));

// const averageAge = (arr) => {
//   let counter = 0;
//   let averageage = arr.reduce((acc, cur) => {
//     counter++;
//     return acc + cur;
//   }, 0);
//   return Math.floor(averageage / counter);
// };

// console.log(averageAge(filteredAges(caclAverageHumanAge(TestData1))));
// console.log(averageAge(filteredAges(caclAverageHumanAge(TestData2))));

// optmized solution

//   let ages = arr.map((age) => {
//     if (age <= 2) return age * 2;
//     else return 16 + age * 4;
//   });
//   let avg = adults.reduce((acc, cur) => acc + cur, 0);

// const TestData1 = [5, 2, 4, 1, 15, 8, 3];
// const TestData2 = [16, 6, 10, 5, 6, 1, 4];

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
