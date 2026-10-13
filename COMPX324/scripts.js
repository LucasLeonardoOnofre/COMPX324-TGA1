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
  input.addEventListener("input", () => {
    const total =
      (parseFloat(bills.value) || 0) +
      (parseFloat(car.value) || 0) +
      (parseFloat(groceries.value) || 0) +
      (parseFloat(insurances.value) || 0) +
      (parseFloat(subscriptions.value) || 0) +
      (parseFloat(spending.value) || 0) +
      (parseFloat(savings.value) || 0);

    const remaining = parseFloat(budget.value) - total;
    const remainingElement = document.getElementById("RemainingAmount");
    remainingElement.textContent = `Left: $${remaining.toFixed(2)}`;
    const savingsAmount = document.getElementById("savingsAmount");
    savingsAmount.textContent = `Savings: $${savings.toFixed(2)}`;
  });
});

function saveBudget() {
  const budget = document.getElementById("budgetInput");
  const bills = document.getElementById("billsInput");
  const car = document.getElementById("carInput");
  const groceries = document.getElementById("groceriesInput");
  const insurances = document.getElementById("insurancesInput");
  const subscriptions = document.getElementById("subscriptionsInput");
  const spending = document.getElementById("spendingInput");
  const savings = document.getElementById("savingsInput");

  const budgetData = {
    budget: parseFloat(budget.value) || 0,
    bills: parseFloat(bills.value) || 0,
    car: parseFloat(car.value) || 0,
    groceries: parseFloat(groceries.value) || 0,
    insurances: parseFloat(insurances.value) || 0,
    subscriptions: parseFloat(subscriptions.value) || 0,
    spending: parseFloat(spending.value) || 0,
    savings: parseFloat(savings.value) || 0,
  };
  localStorage.setItem("budgetData", JSON.stringify(budgetData));
  const saveResult = document.getElementById("saveResult");
  saveResult.textContent = "Budget saved successfully!";
  saveResult.style.display = "block";
}

function exportBudget() {
  const budget = document.getElementById("budgetInput");
  const bills = document.getElementById("billsInput");
  const car = document.getElementById("carInput");
  const groceries = document.getElementById("groceriesInput");
  const insurances = document.getElementById("insurancesInput");
  const subscriptions = document.getElementById("subscriptionsInput");
  const spending = document.getElementById("spendingInput");
  const savings = document.getElementById("savingsInput");

  const budgetData = {
    budget: parseFloat(budget.value) || 0,
    bills: parseFloat(bills.value) || 0,
    car: parseFloat(car.value) || 0,
    groceries: parseFloat(groceries.value) || 0,
    insurances: parseFloat(insurances.value) || 0,
    subscriptions: parseFloat(subscriptions.value) || 0,
    spending: parseFloat(spending.value) || 0,
    savings: parseFloat(savings.value) || 0,
  };

  const dataStr = JSON.stringify(budgetData);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFile = "budget-data.json";

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFile);
  linkElement.click();
}
