const page = document.body.dataset.page;

//====================================================================
// Tyzaks Section for budgeting page

if (page === "budgeting") {

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

  const account1Button = document.getElementById("account1-button");
  const account2Button = document.getElementById("account2-button");
  const account3Button = document.getElementById("account3-button");

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

  function passData(btn, data) {
    btn.addEventListener("click", () => {
      sessionStorage.setItem("connectionDetailsData", JSON.stringify(data));
      location.href = "connectionDetails.html";
    })
  }

  passData(account1Button, account1Data);
  passData(account2Button, account2Data);
  passData(account3Button, account3Data);

}

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

else if (page === "") {
}