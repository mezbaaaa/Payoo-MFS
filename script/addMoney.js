document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById("pin-number").value;
    const convertedPinNumber = parseInt(pinNumber);
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (accountNumber.length === 11) {
      if (!isNaN(convertedAmount) && convertedAmount > 0) {
        if (convertedPinNumber === 1234) {
          const sumOfBalance = convertedMainBalance + convertedAmount;
          document.getElementById("main-balance").innerText = sumOfBalance;
          // alert(`Money added successfully! New balance: ${sumOfBalance}`);
        } else {
          alert("Your PIN is wrong!");
        }
      } else {
        alert("Please enter a valid deposit amount!");
      }
    } else {
      alert("Account number must be 11 digits long.");
    }
  });
