"use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const account5 = {
//   owner: "Iman Mohammadi",
//   movements: [740, 7000, 1500, -70, 320, -78, -90, -120, 200, 184, 5400, -4100],
//   interestRate: 1.8,
//   pin: 1741,
// };

// const accounts = [account1, account2, account3, account4, account5];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// ///////////////////
// ///////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__value">${mov} $</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// const calcDisplayBalance = (acc) => {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance} $`;
// };

// const caclDisplaySummary = (acc) => {
//   const incomes = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);

//   labelSumIn.textContent = `${incomes} $`;

//   const out = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);

//   labelSumOut.textContent = `${Math.abs(out)} $`;

//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((desposit, i, arr) => (desposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => int >= 1)
//     .reduce((acc, int) => acc + int, 0);

//   labelSumInterest.textContent = `${interest} $`;
// };

// const createUserNames = (accs) => {
//   accs.forEach((acc) => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };

// createUserNames(accounts);

// const updateUi = (acc) => {
//   // Display Movements
//   displayMovements(acc.movements);
//   // display Balance
//   calcDisplayBalance(acc);
//   // Display summary
//   caclDisplaySummary(acc);
// };

// // Event handlers
// let currentAccount;

// btnLogin.addEventListener("click", (e) => {
//   // prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI And welcome message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(" ")[0]
//     }`;
//     containerApp.style.opacity = 100;
//     // clear input fields
//     inputLoginUsername.value = inputLoginPin.value = "";
//     inputLoginPin.blur();

//     updateUi(currentAccount);
//   }
// });

// btnTransfer.addEventListener("click", (e) => {
//   e.preventDefault();

//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     (acc) => acc.username === inputTransferTo.value
//   );

//   inputTransferAmount.value = inputTransferTo.value = "";

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);
//     updateUi(currentAccount);
//   }
// });

// btnLoan.addEventListener("click", (e) => {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (
//     amount > 0 &&
//     currentAccount.movements.some((mov) => mov >= amount * 0.1)
//   ) {
//     currentAccount.movements.push(amount);
//     updateUi(currentAccount);
//   }
//   inputLoanAmount.value = "";
// });

// btnClose.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc, i, arr) => acc.username === currentAccount.username
//     );
//     accounts.splice(index, 1);

//     containerApp.style.opacity = 0;
//   }
//   inputCloseUsername.value = inputClosePin.value = "";
// });

// let sorted = false;
// btnSort.addEventListener("click", (e) => {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });
