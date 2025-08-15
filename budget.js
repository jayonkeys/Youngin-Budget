// === Connect to HTML elements ===
const incomeInput = document.getElementById('income');
const expenseNameInput = document.querySelector('.expense-name');
const expenseAmountInput = document.querySelector('.expense-amount');
const addExpenseBtn = document.getElementById('add-expense');
const expensesList = document.getElementById('expenses-list');
const totalExpensesEl = document.getElementById('total-expenses');
const balanceEl = document.getElementById('balance');

// === App state ===
let income = 0;
let expenses = [];

// === Update budget display ===
function render() {
    // Clear list
    expensesList.innerHTML = '';

    let totalExpenses = 0;
    expenses.forEach((exp, index) => {
        totalExpenses += exp.amount;

        // Create a list item for each expense
        const li = document.createElement('li');
        li.innerHTML = `${exp.name} - R${exp.amount.toFixed(2)} 
                        <button onclick="deleteExpense(${index})">🗑️️</button>`;
        expensesList.appendChild(li);
    });

    totalExpensesEl.textContent = `R${totalExpenses.toFixed(2)}`;
    balanceEl.textContent = `R${(income - totalExpenses).toFixed(2)}`;
}

// === Delete an expense ===
function deleteExpense(index) {
    expenses.splice(index, 1);
    render();
}

// Make deleteExpense accessible in global scope
window.deleteExpense = deleteExpense;

// === Event listeners ===

// Update income dynamically
incomeInput.addEventListener('input', () => {
    income = parseFloat(incomeInput.value) || 0;
    render();
});

// Add new expense
addExpenseBtn.addEventListener('click', () => {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (!name || isNaN(amount) || amount <= 0) {
        alert('Enter valid expense name and amount');
        return;
    }

    expenses.push({ name, amount });

    // Clear input fields
    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    render();
});

// initial render
render();
