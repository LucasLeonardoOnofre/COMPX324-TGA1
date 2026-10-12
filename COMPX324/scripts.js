//====================================================================
// Tyzaks Section for budgeting page
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
  if (input) {
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
  }
});

//====================================================================
// Details page section

const account1Button = document.querySelector("#account1-button");
const account2Button = document.querySelector("#account2-button");
const account3Button = document.querySelector("#account3-button");

const account1Data = {
  // data
}
const account2Data = {
  // data
}
const account3Data = {
  // data
}

function passData(btn, data) {
  btn.addEventListener("click", () => {
    sessionStorage.setItem("data", JSON.stringify(data));
    location.href = "connectionDetails.html";
  })
}

if (account1Button) {
  passData(account1Button, account1Data);
}
if (account2Button) {
  passData(account2Button, account2Data);
}
if (account3Button) {
  passData(account3Button, account3Data);
}

//====================================================================