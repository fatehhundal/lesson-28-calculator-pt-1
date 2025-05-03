let balance = 0;

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function showMessage(msg, isError = true) {
    const message = document.getElementById('message');
    message.style.color = isError ? 'red' : 'green';
    message.textContent = msg;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount to deposit.");
        return;
    }
    balance += amount;
    updateBalance();
    showMessage("Deposit successful!", false);
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount to withdraw.");
        return;
    }
    if (amount > balance) {
        showMessage("Insufficient funds.");
        return;
    }
    balance -= amount;
    updateBalance();
    showMessage("Withdrawal successful!", false);
}