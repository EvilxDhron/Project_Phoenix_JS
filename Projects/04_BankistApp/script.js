/////////////////////////////////////////////////
/////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 30000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2026-11-18T21:31:17.178Z",
    "2026-12-23T07:42:02.383Z",
    "2026-01-28T09:15:04.904Z",
    "2026-04-01T10:17:24.185Z",
    "2026-05-08T14:11:59.604Z",
    "2026-05-27T17:01:17.194Z",
    "2026-09-11T23:36:17.929Z",
    "2026-09-14T10:51:36.790Z",
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
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2021-01-12T08:24:15.125Z",
    "2021-02-18T14:37:42.583Z",
    "2021-03-05T11:16:29.741Z",
    "2021-04-22T17:45:03.316Z",
    "2021-06-10T09:52:18.629Z",
    "2021-07-28T15:21:47.854Z",
    "2021-09-14T13:08:36.492Z",
    "2021-11-30T18:34:51.207Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2022-01-08T10:15:27.436Z",
    "2022-02-24T16:42:19.725Z",
    "2022-04-11T07:38:54.183Z",
    "2022-05-19T12:26:41.957Z",
    "2022-07-03T14:53:08.364Z",
    "2022-08-17T09:31:25.618Z",
    "2022-10-29T17:12:43.875Z",
    "2022-12-15T11:47:32.529Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

const account5 = {
  owner: "Dhron Yadav",
  movements: [43000, 1960000, -70000, 500, 90, 423451, 563334, -93749],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    "2022-01-08T10:15:27.436Z",
    "2022-02-24T16:42:19.725Z",
    "2022-04-11T07:38:54.183Z",
    "2022-05-19T12:26:41.957Z",
    "2022-07-03T14:53:08.364Z",
    "2022-08-17T09:31:25.618Z",
    "2022-10-29T17:12:43.875Z",
    "2022-12-15T11:47:32.529Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4, account5];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////--- DOM Elements ---/////

////// State

const greeting = document.querySelector(".greet");
const currentBalanceDate = document.querySelector(".balanceDate");
const currentBalanceTotal = document.querySelector(".totalBalance");
const transStatus = document.querySelector(".status");
const transStatusDate = document.querySelector(".status_date");
const transStatusAmount = document.querySelector(".status_Amount");
const totalAmountIN = document.querySelector(".sumAmtDeposit");
const totalAmountOUT = document.querySelector(".sumAmtWithdraw");
const totalAmountInterest = document.querySelector(".sumAmtInterest");
const logoutTimer = document.querySelector(".logoutTimer");

//////  Inputs
const userIdInput = document.querySelector("#user");
const userPinInput = document.querySelector("#pin");
const transferUserInput = document.querySelector("#transUser");
const transferUserAmt = document.querySelector("#transAmt");
const loanAmtInput = document.querySelector("#loanAmt");
const closeUserIdInput = document.querySelector("#closeUser");
const closeUserPinInput = document.querySelector("#closePin");

////// Buttons
const navSubmitBtn = document.querySelector("#navBtn");
const transferUserBtn = document.querySelector("#transBtn");
const loanBtn = document.querySelector("#loanBtn");
const closeUserBtn = document.querySelector("#closeBtn");
const sortTransactionBtn = document.querySelector("#sortBtn");

const main = document.querySelector("main");
const transactionContainer = document.querySelector(".transactions");

let currentUser, timer;
let sorted = false;

const showTransactions = function (acc, sort = false) {
  const combinedMoves = acc.movements.map((move, i) => {
    return { movement: move, moveDate: acc.movementsDates[i] };
  });

  const trans = sort
    ? combinedMoves.slice().sort((a, b) => a.movement - b.movement)
    : combinedMoves;

  transactionContainer.innerHTML = "";
  trans.forEach((amount, index) => {
    let type = amount.movement > 0 ? "Deposit" : "Withdraw";
    const transElement = `<div class="trans">
                              <div class="showStatus">
                                  <div class="status status_${type}"> ${index + 1} ${type}</div>
                                  <div class="status_date">${showCurrentDate(amount.moveDate, acc.locale)}</div>
                              </div>
                              <div class="status_Amount">${formatCurrency(acc.locale, amount.movement, acc.currency)}</div>
                          </div>
                          <div class="line"></div>`;

    transactionContainer.insertAdjacentHTML("afterbegin", transElement);
  });
};

const eurToUsd = 1.1;

const transactionsToUsd = function (transactions) {
  return transactions.map((num) => Math.trunc(num * eurToUsd));
};

const createUserNames = function (accounts) {
  for (let acc of accounts) {
    acc.user = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  }
};
createUserNames(accounts);

const deposits = function (arr) {
  return arr.filter((deposit) => deposit > 0);
};

const withdraws = function (arr) {
  return arr.filter((deposit) => deposit < 0);
};

const showCurrentBalance = function (account) {
  account.balance = account.movements.reduce((acc, tran) => (acc += tran), 0);
  // currentBalanceTotal.textContent = `${account.balance.toFixed(2)}€`;
  currentBalanceTotal.textContent = formatCurrency(
    account.locale,
    account.balance,
    account.currency,
  );
};

const calcDays = (date1, date2) => {
  return Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
};

const formatCurrency = (locale, amount, currency) => {
  const options = {
    style: "currency",
    currency: currency,
  };
  // Internationalization of Numbers(to currency)👇 - using Web API
  return new Intl.NumberFormat(locale, options).format(amount);
};
// console.log(formatCurrency('en-UK', 23928023, 'EUR'));

// Actual Working of Difference between dates - Operation on Milliseconds.
/* console.log(calcDays(new Date(), new Date("2026-09-15T00:12:36.492Z"))); */

const showCurrentDate = (str = "", locale) => {
  let today;
  if (!str) {
    today = new Date();
  } else {
    today = new Date(str);
  }
  const daysPassed = calcDays(new Date(), today);

  if (str) {
    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed < 7) return `${daysPassed} days ago`;
  }

  // Previous code for Date Formatting

  /*   const date = `${today.getDate()}`.padStart(2, 0);
  const month = `${today.getMonth() + 1}`.padStart(2, 0);
  const year = today.getFullYear();
  console.log(Intl.DateTimeFormat('en-UK').format(new Date()));
  return `${date}/${month}/${year}`; */

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  // Internationalization of Dates👇 - using Web API
  return Intl.DateTimeFormat(locale, str ? "" : options).format(today);
};

const showSummary = function (account) {
  totalAmountIN.textContent = formatCurrency(
    account.locale,
    account.movements
      .filter((trans) => trans > 0)
      .reduce((acc, trans) => acc + trans, 0),
    account.currency,
  );

  // .toFixed(2);

  totalAmountOUT.textContent = formatCurrency(
    account.locale,
    Math.abs(
      account.movements
        .filter((trans) => trans < 0)
        .reduce((acc, trans) => acc + trans, 0),
    ),
    account.currency,
  );

  totalAmountInterest.textContent = formatCurrency(
    account.locale,
    account.movements
      .filter((trans) => trans > 0)
      .map((trans) => (trans * account.interestRate) / 100)
      .reduce((acc, trans) => {
        if (trans >= 1) return acc + trans;
        return acc;
      }, 0),
    account.currency,
  );
};

function changeCurrentUser(user, pin) {
  currentUser = accounts.find((acc) => acc.user === user && acc.pin === pin);
  if (!currentUser) {
    window.alert("🚫 Wrong Username or Password!");
    return false;
  }
  return currentUser;
}

const updateUI = (account) => {
  if (!account) return;
  showTransactions(account);
  showCurrentBalance(account);
  showSummary(account);
  main.classList.remove("hideMain");
  setTimeout(() => {
    greeting.textContent = `Welcome back, ${account.owner}`;
    main.style.opacity = main.style.scale = "1";
    currentBalanceDate.textContent = showCurrentDate("", currentUser.locale);
  }, 450);
};

const resetUI = () => {
  clearInterval(timer);
  timer = null;
  currentUser = null;
  main.style.opacity = "0";
  main.style.scale = 0.9;
  setTimeout(() => {
    greeting.textContent = `Log in to get started!`;
    main.classList.add("hideMain");
  }, 450);
};

const startLogOutTimer = function () {
  let time = 300;
  logoutTimer.textContent = "05:00";

  timer = setInterval(() => {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);

    logoutTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      resetUI();
    }
    time--;
  }, 1000);

  // return timer;
};

const updateTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  };
  return startLogOutTimer();
}

const clearInputs = (value1, value2) => {
  value1.value = value2.value = "";
};

const transferMoney = (user, amount) => {
  if (
    user &&
    user !== currentUser &&
    amount > 0 &&
    currentUser.balance >= amount
  ) {
    currentUser.movements.push(-amount);
    currentUser.movementsDates.push(new Date().toISOString());
    user.movements.push(amount);
    user.movementsDates.push(new Date().toISOString());
  }
};

const deleteUser = (user, pin) => {
  console.log(user, pin);
  if (user === currentUser.user && pin === currentUser.pin) {
    const index = accounts.findIndex((acc) => acc.user === currentUser.user);
    accounts.splice(index, 1);
    resetUI();
  }else{
    window.alert('🚫 Wrong Credentials⁉️');
  }
};

navSubmitBtn.addEventListener("click", () => {
  if (changeCurrentUser(userIdInput.value, Number(userPinInput.value))) {
    updateUI(currentUser);
    updateTimer();
  }

  clearInputs(userIdInput, userPinInput);
});

transferUserBtn.addEventListener("click", () => {
  const account = accounts.find((acc) => acc.user === transferUserInput.value);
  const amount = Number(transferUserAmt.value);
  transferMoney(account, amount);
  clearInputs(transferUserInput, transferUserAmt);
  updateUI(currentUser);
  updateTimer();
});

closeUserBtn.addEventListener("click", () => {
  deleteUser(closeUserIdInput.value, Number(closeUserPinInput.value));
  clearInputs(closeUserIdInput, closeUserPinInput);
});

sortTransactionBtn.addEventListener("click", () => {
  showTransactions(currentUser, !sorted);
  sorted = !sorted;
  updateTimer();
});

loanBtn.addEventListener("click", () => {
  const amount = Math.floor(loanAmtInput.value);

  if (currentUser.movements.some((trans) => trans >= amount * 0.1)) {
    currentUser.movements.push(amount);
    currentUser.movementsDates.push(new Date().toISOString());
  } else {
    window.alert("You are not eligible!");
  }

  updateUI(currentUser);
  loanAmtInput.value = "";
  updateTimer();
});
