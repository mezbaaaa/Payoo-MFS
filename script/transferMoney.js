document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("transfer-money-amount").value;
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById(
      "transfer-money-pin-number"
    ).value;
    const convertedPinNumber = parseInt(pinNumber);
    const accountNumber = document.getElementById(
      "transfer-money-account-number"
    ).value; 
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (accountNumber.length === 11) {
      if (!isNaN(convertedAmount) && convertedAmount > 0) {
        if (convertedPinNumber === 1234) {
          if (convertedMainBalance >= convertedAmount) {
            const newBalance = convertedMainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = newBalance;
            // alert(`Money Transfer successful! New balance: ${newBalance}`);
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
      alert("Account number must be 11 digits ");
    }
  });
