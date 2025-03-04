document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getBonusAmount = document.getElementById("get-bonus-amount").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (getBonusAmount === "EID500") {
      const bonusAmount = (convertedMainBalance * 25) / 100;
      const bonus = convertedMainBalance + bonusAmount;
      document.getElementById("main-balance").innerText = bonus;
    } else {
      alert("your code invalid !");
    }
  });
