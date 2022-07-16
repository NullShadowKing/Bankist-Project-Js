"Use Strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Iman Mohammadi",
  movements: [
    7200, 9100, -1100, -450, 3412, -1000, 8500, -300, 500, -410, 740, -852,
  ],
  interestRate: 1.9,
  pin: 1741,

  movementsDates: [
    "2020-07-01T13:44:33.035Z",
    "2020-10-30T09:18:16.867Z",
    "2020-11-25T06:10:23.907Z",
    "2021-04-25T14:15:46.235Z",
    "2021-05-05T16:28:06.386Z",
    "2021-07-10T14:37:26.374Z",
    "2022-02-25T18:51:59.371Z",
    "2022-03-26T12:20:20.215Z",
    "2022-03-26T15:48:20.544Z",
    "2022-07-04T11:12:20.014Z",
    "2022-07-09T08:30:20.324Z",
    "2022-07-10T19:21:20.414Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3];

/////////////////////////////////////////////////

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

///////////////////
///////////////////

const formatMovementDate = (date, local) => {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayspassed = calcdaysPassed(new Date(), date);
  if (dayspassed === 0) return "Today";
  if (dayspassed === 1) return "Yesterday";
  if (dayspassed === 7) return `A Week ago`;
  if (dayspassed <= 6) return `${dayspassed} days ago`;

  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(local).format(date);
};

const formatCurr = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, currentAccount.locale);
    const formattedMov = formatCurr(mov, acc.locale, acc.currency);
    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
     <div class="movements__value">${formattedMov}</div>
    </div>
    `;
    // ${mov.toFixed(2)} $<

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCurr(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const caclDisplaySummary = (acc) => {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${formatCurr(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCurr(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((desposit, i, arr) => (desposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};

const createUserNames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUserNames(accounts);

const updateUi = (acc) => {
  // Display Movements
  displayMovements(acc);
  // display Balance
  calcDisplayBalance(acc);
  // Display summary
  caclDisplaySummary(acc);
};

const startLogOutTimer = () => {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call , print the remainig time to ui
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 sec , stop timer and log out app
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  };

  // Set time to 10 min
  let time = 120;

  // Call the timer every scond
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// Event handlers
let currentAccount, loginTimer;

// // Fake Always Logged In
// currentAccount = account1;
// updateUi(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", (e) => {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI And welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // day/month/year
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      //   month: "long",
      //   month: "2-digit",
      month: "long",
      year: "numeric",
      weekday: "long",
    };

    // const local = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // labelDate.textContent = new Intl.DateTimeFormat("fa-IR", options).format(
    //   now
    // );
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // timer
    if (loginTimer) clearInterval(loginTimer);
    loginTimer = startLogOutTimer();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUi(currentAccount);

    // Reset the timer
    clearInterval(loginTimer);
    loginTimer = startLogOutTimer();
  }
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Reset the timer
    clearInterval(loginTimer);
    loginTimer = startLogOutTimer();
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUi(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc, i, arr) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////// Lectures Excersizes

// usually the numbers are decimal even when we put int values
// console.log(23 === 23.0);

// // Base 10 : 0 to 9   1/10 = 0.1 3/40 = 3.33333
// // Binary Base: 0 1
// // this is a error that we cant do anything about it
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
// Converting numbers
// console.log(Number("23"));
// console.log(+"23");

// Parsing
// the string should be start with numbers so we can pars it
// Modern Way ( We should use modern Way )
// console.log(Number.parseInt("30px", 10));
// console.log(Number.parseInt("e30", 10));

// console.log(Number.parseFloat("  2.5rem  "));
// console.log(Number.parseInt("  2.5rem  "));

// // old school way
// console.log(parseFloat("2.5rem"));

// console.log(Number.isNaN(23));
// console.log(Number.isNaN("20"));

// console.log(Number.isNaN(+"e34"));

// console.log(Number.isNaN(23 / 0));

// this method is better for checking if a value is number or not
// console.log(Number.isFinite(20));
// console.log(Number.isFinite("20"));
// console.log(Number.isFinite(+"e34"));
// console.log(Number.isFinite("e34"));
// console.log(Number.isFinite(23 / 0));

// IsInt
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(2.3));

// the Most Usefull Methods here are
// console.log(Number.parseFloat("  2.5rem  "));
// console.log(Number.isFinite(20));
// console.log(Number.isInteger(23));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// // the max and min method support type coversion but it wont parse
// console.log(Math.max(5, 17, 11, "23", 2, 14));
// console.log(Math.max(5, 17, "11px", 23, 2, 14));

// console.log(Math.min(5, 17, 11, "23", 2, 14));
// console.log(Math.min(5, 17, 11, "23px", 2, 14));

// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// console.log(Math.random());
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// // 0...1 -> 0...(max - min) -> min...(max)
// console.log(randomInt(10, 20));

// // Rounding intergers
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.9));

// // Round to nearest Int
// console.log(Math.round(23.2));
// console.log(Math.round(23.9));
// // Round Up
// console.log(Math.ceil(23.2));
// console.log(Math.ceil(23.9));
// // Round Down
// console.log(Math.floor(23.2));
// console.log(Math.floor(23.9));

// // Negetive Numbers
// console.log(Math.trunc(-23.3));
// console.log(Math.trunc(-23.9));

// console.log(Math.round(-23.2));
// console.log(Math.round(-23.9));

// console.log(Math.ceil(-23.2));
// console.log(Math.ceil(-23.9));
// // Floor is the best for the Negetive Numbers
// console.log(Math.floor(-23.2));
// console.log(Math.floor(-23.9));

// // Rounding decimals
// // it will add decimal part
// console.log(+(2.7).toFixed(0));
// console.log(+(2.7).toFixed(3));
// console.log(+(2.345).toFixed(2));

// Remainder Operator

// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1 so 1 is the reminder

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// // Even or Odd
// // even: 0 2 4 6 8 10 ...
// // Odd: 1 3 5 7 9 11

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2); // 3 * 2 + 1

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(5));
// console.log(isEven(514));

// this method will return a node list

// labelBalance.addEventListener("click", () => {
//   console.log([...document.querySelectorAll(".movements__row")]);
//   [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = "#E3E3E3";
//     if (i % 3 === 0) row.style.backgroundColor = "#F7F7F7";
//   });
// });

//Nth =  number th for example : 2th 3th 4th 5th
// Nth mean for example for second time or third time etc.

// Numeric Seperator
// // 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);
// // point : we can put _ as a numeric seperator every where and the engine will ignore it but we shouldnt put them at the first or the End of a number and also we souldnt put it after or before ( . )
// // also we cant put two __ for numbers
// // also we shouldnt use it inside a function at affect the value

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1);
// console.log(transferFee2);

// const PI = 3.14_15;
// console.log(PI);

// console.log(Number("230000"));
// console.log(Number("230_000"));
// console.log(parseInt("230_000"));

// BigInt

// console.log(2 ** 53 - 1); // the biggest number that js can safely get
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(2 ** 53 + 5);

// // big int doesnt have any limits
// console.log(45884515654515487489454848541654854544568456n);
// console.log(typeof 45884515654515487489454848541654854544568456n);

// console.log(BigInt(45884515654515487489454848541654854544568456));
// console.log(BigInt(458845156));

// // Operations
// console.log(10000n + 10000n);
// console.log(89489468416518984474849849841981891879n * 1000000000n);

// const huge = 45846541561511651541352156n;
// const num = 23;
// // error
// // console.log(huge * num);
// // Solution
// console.log(huge * BigInt(num));

// console.log(20n > 15);
// // without type coversion
// console.log(20n === 20); // false bigint != number
// // with type coversion
// console.log(20n == 20); // true because both convert to number
// console.log(20 == "20");

// console.log(huge + "is Really big"); // big int number will convert to string

// // point the Math wont work with bigint
// // console.log(Math.sqrt(4846845654n));

// console.log(11n / 3n);
// console.log(11 / 3);

// Creating Dates

// create a  date : there are 4 ways : one constructor with differ params

// const now = new Date();
// console.log(now);

// console.log(new Date("Jul 11 2022 16:26:09"));

// console.log(new Date("December 24, 2015"));

// console.log(new Date(account3.movementsDates[7]));

// // month is zero based

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33));

// console.log(new Date(0));
// // days , hours , minute , sec , milisec
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth()); // zero base
// console.log(future.getDate()); // day of month
// console.log(future.getDay()); // day of week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString());

// console.log(future.getTime());
// console.log(new Date(2142244380000));

// console.log(Date.now());

// // all gets have sets too

// future.setFullYear(2040);
// console.log(future);

// OPeration with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcdaysPassed = (date1, date2) =>
//   Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcdaysPassed(
//   new Date(2037, 3, 4),
//   new Date(2037, 3, 14, 10, 8)
// );

// console.log(`${days1} Days`);
// for more complex operations you can use Moment.Js https://momentjs.com/

// Internationalizing Dates (INTL)

// const num = 3884764.23;

// const options = {
//   style: "unit",
//   //   style: "currency",
//   //   style: "percent",
//   unit: "mile-per-hour",
//   //   unit: "celsius",
//   //   currency: "EUR",
//   //   useGrouping: false
// };

// console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
// console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
// console.log("IR: ", new Intl.NumberFormat("fa-IR", options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(num)
// );

// timers : setTimeOut
// const ingredients = ["olives", "spinach"];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is you pizza with ${ing1} and ${ing2} 🍕🍕🍕`),
//   3000,
//   ...ingredients
// );
// console.log("Waiting...");

// if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setTimeout;
// setInterval(() => {
//   const now = new Date();
//   console.log(
//     `clock : ${String(now.getHours()).padStart(2, 0)}:${String(
//       now.getMinutes()
//     ).padStart(2, 0)}:${String(now.getSeconds()).padStart(2, 0)}`
//   );
//   //   console.log(now);
// }, 1000);
