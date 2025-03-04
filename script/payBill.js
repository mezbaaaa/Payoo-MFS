document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("pay-bill-amount").value;
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById("pay-bill-pin-number").value;
    const convertedPinNumber = parseInt(pinNumber);
    const accountNumber = document.getElementById(
      "pay-bill-account-number"
    ).value; 
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (accountNumber.length === 11) {
      if (!isNaN(convertedAmount) && convertedAmount > 0) {
        if (convertedPinNumber === 1234) {
          if (convertedMainBalance >= convertedAmount) {
            const differenceBalance = convertedMainBalance - convertedAmount;
            document.getElementById("main-balance").innerText =
              differenceBalance;
            alert(`Bill pay successful! New balance: ${differenceBalance}`);
          } else {
            alert("Insufficient balance!");
          }
        } else {
          alert("Your PIN is wrong!");
        }
      } else {
        alert("Please enter a valid amount!");
      }
    } else {
      alert("Account number must be 11 digits.");
    }
  });
