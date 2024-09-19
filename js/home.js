// Show Add Money Form
document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
});

// Show Cash Out Form
document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});

// Handle Add Money functionality
document.getElementById('add-money').addEventListener('click', function(event) {
    event.preventDefault();
    handleTransaction('add');
});

// Handle Cash Out functionality
document.getElementById('cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    handleTransaction('subtract');
});

// Function to handle transactions
function handleTransaction(type) {
    let amountInput;
    let pinInput;

    if (type === 'add') {
        amountInput = document.getElementById('add-amount-money').value;
        pinInput = document.getElementById('add-pin-no').value;
    } else if (type === 'subtract') {
        amountInput = document.getElementById('cash-out-amount-money').value;
        pinInput = document.getElementById('cash-out-pin-no').value;
    }

    const amount = parseFloat(amountInput);
    
    if (pinInput.length === 4 && /^[0-9]+$/.test(pinInput)) {
        let currentBalance = parseFloat(document.getElementById('Amount-added').innerText);
        
        if (type === 'add') {
            currentBalance += amount;
        } else if (type === 'subtract') {
            if (amount > currentBalance) {
                alert('Insufficient Balance');
                return;
            }
            currentBalance -= amount;
        }
        
        // Update the balance without changing the font or style
        document.getElementById('Amount-added').innerText = currentBalance.toFixed(2);
    } else {
        alert('Invalid PIN');
    }
}
document.getElementById('Amount-added').style.fontSize = '2rem'; // Adjust as needed
document.getElementById('Amount-added').style.fontWeight = 'bold'; // Adjust as needed

