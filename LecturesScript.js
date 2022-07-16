"use strict";
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));

// console.log(arr.slice());
// console.log([...arr]);

// SPLICE : it will change the original array (meotate the original array)
// console.log(arr.splice(2));

// it will remove the last elemnt of array
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// // Point : the reverse method will change the original array
// console.log(arr2);

// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN
// console.log(letters.join("-"));

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array elemnt
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1));
// console.log(arr.at(-1));
// console.log(arr.at(-2));

// console.log("iman".at(0));
// console.log("iman".at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// Point : the break and continue keywords wont work on foreach loop
// console.log("----- FOREACH -----");
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // Map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// // there isn't any key or index for the set
// // point : the _ means ignore this one
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// Map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // this way is better for functional programming
// const movementsUSD = movements.map(function (mov) {
//   return Math.floor(mov * eurToUsd);
// });

// const movementsUSDArr = movements.map((mov) => {
//   return Math.floor(mov * eurToUsd);
// });

// const movementsUSDArrOp = movements.map((mov) => Math.floor(mov * eurToUsd));

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDArr);
// console.log(movementsUSDArrOp);

// // another way but more manual
// // const movementsUSDfor = [];
// // for (const mov of movements) {
// //   movementsUSDfor.push(Math.floor(mov * eurToUsd));
// // }
// // console.log(movementsUSDfor);

// const movementsDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "desposited" : "withdrew"} ${Math.abs(
//       mov
//     )}$`
// );

// console.log(movementsDesc.entries);

// Filter Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter((mov, i, arr) => {
//   return mov > 0;
// });

// console.log(deposits);

// // const despositsFor = [];
// // for (const mov of movements) if (mov > 0) despositsFor.push(mov);
// // console.log(despositsFor);

// const withdrawals = movements.filter((mov, i, arr) => {
//   mov < 0;
// });
// console.log(withdrawals);

// Reduce Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // accumulator -> SnowBall , melt over iteration
// const balance = movements.reduce((accum, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${accum}`);
//   return accum + cur;
// }, 0);

// // the most optimized and  advanced way
// const balance1 = movements.reduce((accum, cur, i, arr) => accum + cur, 0);

// console.log(balance);
// console.log(balance1);

// console.log(containerMovements.innerHTML);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Maximum Value
// const maxVal = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(maxVal);

// Chaining
// note : becareful about chaning because too much chaning will cause performance issues

// you shouldn't chaining with splice or reverse because it will mutate the main array ( it will change it original array )

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // PIPELINE
// // if we made mistake we can check array by arr in each of this methods and found the poblem (mov,i,arr) => arr (for checking the result of inputed array)
// const totalDepositsUSD = movements
//   .filter((mov, i, arr) => mov > 0)
//   .map((mov, i, arr) => mov * eurToUsd)
//   .reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(Math.trunc(totalDepositsUSD));

// Find method : finding an element accouding to conditions
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // the find method will loop over the array
// // it will find the first result and return that first result
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const accout = accounts.find((acc) => acc.owner === "Iman Mohammadi");
// console.log(accout);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// // its just check for Equality
// console.log(movements.includes(-130));
// console.log(movements.some((mov) => mov === -130));

// // it will get Conditions
// const anyDeposits = movements.some((mov) => mov > 1500);
// console.log(anyDeposits);

// Every
// only return true if all the items satisfy the condition
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// seperate callback
// Dry principal : dont repeat yourself
// we can store our condition inside a variable and use it over and over and also we can edit it easily
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Flat And FlatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// // Flat method only flat the array for one level unless we gave it value 1 to ... as level of flatting
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalalnce = allMovements.reduce((acc, cur) => acc + cur, 0);
// console.log("Result 1: " + overalBalalnce);

// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0);
// console.log("Result 2: " + overallBalance);

// // flatmap
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log("Result 3: " + overallBalance2);

// Sorting

// the sort method will mutate the original array : it means the original array will be change
// const owners = ["Jonas", "Iman", "Zack", "Alice", "Sara", "Behruz", "Rana"];
// console.log(owners.sort());

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// // wrong sorting because this method sorts accourding to the straings , so we have to set conditions
// console.log(movements.sort());

// return < 0, A, B  (Keep order)
// return > 0, B, A  (Switch order)
// ascending order
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   })
// );

// Dscending order
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   })
// );

// console.log(movements.sort((a, b) => a - b));
// console.log(movements.sort((a, b) => b - a));

// Filing Arrays

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// when we pass only one value to the array constructor it will create a array with the length of the pass value
// const x = new Array(7);
// console.log(x);
// // error : nothing will happen
// // x.map(() => 5);

// // const y = new Array(7, 5);
// // console.log(y);

// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// // fill(value, startindex, endindex)
// arr.fill(23, 2, 6);
// console.log(arr);

// Array.from
// const arr2 = Array.from({ length: 7 }, () => 1);
// console.log(arr2);

// const arr3 = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(arr3);

// const randomDiceRoll = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// );
// console.log(randomDiceRoll);

// labelBalance.addEventListener("click", () => {
//   const MovementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("$", ""))
//   );
//   console.log(MovementsUI);
// });

// Ex 01
// const bankDepositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((sum, cur) => sum + cur);

// console.log(bankDepositSum);

// Ex 02
// const numDeposits100 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

// const numDeposits100 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits100);

// let a = 10;
// // Suffix ++ will add one to the value but it will pass the old value so we can use preffix
// // console.log(a++);
// // preffix
// console.log(++a);

// Ex 03
// const { deposits, withdrawals } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sumsVal, cur) => {
//       //   cur > 0 ? (sumsVal.desposits += cur) : (sumsVal.withdrawal += cur);
//       sumsVal[cur > 0 ? "deposits" : "withdrawals"] += cur;
//       return sumsVal;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// Ex 04
// this is a nice title -> This Is a Nice Title
// BEST EXAMPLE

// const convertTitleCase = function (title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
//   // for more search for title case on google
//   const exceptions = ["a", "an", "the", "and", "but", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(" ");

//   return capitalize(titleCase);
// };

// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too long"));
// console.log(convertTitleCase("and here is another title with an EXAMPLE"));
