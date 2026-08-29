/////////////////////////////////////////////////
/////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

let currentUser;

const showTransactions = function (transactions) {
  transactionContainer.innerHTML = "";
  transactions.forEach((amount, index) => {
    let type = amount > 0 ? "Deposit" : "Withdraw";
    const transElement = `<div class="trans">
                              <div class="showStatus">
                                  <div class="status status_${type}"> ${index + 1} ${type}</div>
                                  <div class="status_date">12/08/2026</div>
                              </div>
                              <div class="status_Amount">${amount}€</div>
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
  currentBalanceTotal.textContent = `${account.balance}€`;
};

const showSummary = function (account) {
  totalAmountIN.textContent = account.movements
    .filter((trans) => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);

  totalAmountOUT.textContent = Math.abs(
    account.movements
      .filter((trans) => trans < 0)
      .reduce((acc, trans) => acc + trans, 0),
  );

  totalAmountInterest.textContent = account.movements
    .filter((trans) => trans > 0)
    .map((trans) => (trans * account.interestRate) / 100)
    .reduce((acc, trans) => {
      if (trans >= 1) return acc + trans;
      return acc;
    }, 0)
    .toFixed(2);
};

function changeCurrentUser(user, pin) {
  currentUser = accounts.find((acc) => acc.user === user && acc.pin === pin);
  if (currentUser) return currentUser;
  window.alert("🚫 Wrong Username or Password!");
}

const updateUI = (account) => {
  if (!account) return;
  showTransactions(account.movements);
  showCurrentBalance(account);
  showSummary(account);
  greeting.textContent = `Welcome back, ${account.owner}`;
  main.style.opacity = main.style.scale = "1";
};

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
    user.movements.push(amount);
  }
};

const deleteUser = (user, pin)=>{
  console.log(user, pin);
if (
  user === currentUser.user &&
  pin === currentUser.pin
) {
  const index = accounts.findIndex((acc) => acc.user === currentUser.user);
  accounts.splice(index, 1);
  greeting.textContent = `Log in to get started!`;
  main.style.opacity = "0";
  main.style.scale = "0.9";
  console.log(accounts);
}
}

navSubmitBtn.addEventListener("click", () => {
  updateUI(changeCurrentUser(userIdInput.value, Number(userPinInput.value)));
  clearInputs(userIdInput, userPinInput);
});

transferUserBtn.addEventListener("click", () => {
  const account = accounts.find((acc) => acc.user === transferUserInput.value);
  const amount = Number(transferUserAmt.value);
  transferMoney(account, amount);
  clearInputs(transferUserInput, transferUserAmt);
  updateUI(currentUser);
});

closeUserBtn.addEventListener("click", () => {
  deleteUser(closeUserIdInput.value, Number(closeUserPinInput.value));
  clearInputs(closeUserIdInput, closeUserPinInput);
});
