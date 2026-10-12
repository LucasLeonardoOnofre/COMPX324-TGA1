const appName = "FinPrivSys";
const page = document.body.dataset.page;

// Set default login token state
if (!sessionStorage.getItem("loggedIn")) {
  sessionStorage.setItem("loggedIn", false);
}
console.log("Logged in: " + sessionStorage.getItem("loggedIn")); // For testing

//====================================================================
// Shared Navigation Section

const homeButton = document.getElementById("homeButton");
const logoutButton = document.getElementById("logoutButton");

if (homeButton) {
  homeButton.addEventListener("click", (event) => {
    if (sessionStorage.getItem("loggedIn") === true) {
      location.href = "home.html";
    }
    event.preventDefault();
  });
}
if (logoutButton) {
  logoutButton.addEventListener("click", (event) => {
    sessionStorage.setItem("loggedIn", false);
    location.href = "index.html";
    event.preventDefault();
  });
}

//====================================================================
// Login/Pin Page Section

if (page === "login") {

  const loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", () => {
    sessionStorage.setItem("loggedIn", true);
    location.href = "home.html";
  });

}

//====================================================================
// Quick Balances Page Section

else if (page === "quickBalances") {

  // ...

}

//====================================================================
// Tyzaks Section for budgeting page

else if (page === "budgeting") {

  const budget = document.getElementById("budgetInput");
  const bills = document.getElementById("billsInput");
  const car = document.getElementById("carInput");
  const groceries = document.getElementById("groceriesInput");
  const insurances = document.getElementById("insurancesInput");
  const subscriptions = document.getElementById("subscriptionsInput");
  const spending = document.getElementById("spendingInput");
  const savings = document.getElementById("savingsInput");

  const inputs = [
    budget,
    bills,
    car,
    groceries,
    insurances,
    subscriptions,
    spending,
    savings,
  ];

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const total =
        parseFloat(bills.value) +
        parseFloat(car.value) +
        parseFloat(groceries.value) +
        parseFloat(insurances.value) +
        parseFloat(subscriptions.value) +
        parseFloat(spending.value) +
        parseFloat(savings.value);

      const remaining = parseFloat(budget.value) - total;
      const remainingElement = document.getElementById("RemainingAmount");
      remainingElement.textContent = `Left: $${remaining.toFixed(2)}`;
      const savingsAmount = document.getElementById("savingsAmount");
      savingsAmount.textContent = `Savings: $${savings.toFixed(2)}`;
    });
  })

}

//====================================================================
// Home/Dashboard Page Section

else if (page === "home") {

  const account1Button = document.getElementById("account1Button");
  const account2Button = document.getElementById("account2Button");
  const account3Button = document.getElementById("account3Button");

  const account1Data = {
    title: "Account 1",
    balance: 1000,
  }
  const account2Data = {
    title: "Account 2",
    balance: 2000,
  }
  const account3Data = {
    title: "Account 3",
    balance: 3000,
  }

  function gotoConnectionDetails(btn, data) {
    btn.addEventListener("click", () => {
      sessionStorage.setItem("connectionDetailsData", JSON.stringify(data));
      location.href = "connectionDetails.html";
    });
  }

  gotoConnectionDetails(account1Button, account1Data);
  gotoConnectionDetails(account2Button, account2Data);
  gotoConnectionDetails(account3Button, account3Data);

}

//====================================================================
// Connection Details Page Section

else if (page === "connectionDetails") {

  const jsonData = sessionStorage.getItem("connectionDetailsData");
  const accountTitle = document.getElementById("accountTitle");
  const accountBalance = document.getElementById("accountBalance");

  if (jsonData) {
    const data = JSON.parse(jsonData);

    accountTitle.textContent = data.title;
    accountBalance.textContent = "Total Balance: $" + data.balance;
  }

}

//====================================================================
// Connections List Page Section

else if (page === "connectionsList") {

  // ...

}

//====================================================================
// Add Connection Page Section

else if (page === "connectionsList") {

  // ...

}

//====================================================================
// Manage Connections Page Section

else if (page === "manageConnection") {

  // ...

}

//====================================================================
// Disconnect Service Page Section

else if (page === "disconnectService") {

  const jsonData = sessionStorage.getItem("disconnectionData");
  const accountTitle = document.getElementById("accountTitle");
  const disconnectNote1 = document.getElementById("disconnectNote1");
  const disconnectNote2 = document.getElementById("disconnectNote2");
  const cancelButton = document.getElementById("cancelButton");
  const disconnectButton = document.getElementById("disconnectButton");

  if (jsonData) {
    const data = JSON.parse(jsonData);

    accountTitle.textContent = "Disconnect " + data.title + "?";
    disconnectNote1.textContent = data.title + " will no longer be accessible by " + appName;
    disconnectNote2.textContent = "Your " + data.title + " will not be closed";

    cancelButton.addEventListener("click", () => {
      location.href = "manageConnection.html";
    });
    disconnectButton.addEventListener("click", () => {
      location.href = "successfulDisconnect.html";
    });
  }

}

//====================================================================
// Successful Disconnection Page Section

else if (page === "disconnectService") {

  // ...

}