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
});
