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
const closeUserIdInput = document.querySelector(".closeUser");
const closeUserPinInput = document.querySelector("#closePin");

////// Buttons
const navSubmitBtn = document.querySelector(".#navBtn");
const transferUserBtn = document.querySelector("#transBtn");
const loanBtn = document.querySelector("#loanBtn");
const closeUserBtn = document.querySelector("#closeBtn");
const sortTransactionBtn = document.querySelector("#sortBtn");