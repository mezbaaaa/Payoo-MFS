document.getElementById("add-money").style.display = "none";
document.getElementById("cash-out").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("get-bonus").style.display = "none";
document.getElementById("pay-bill").style.display = "none";
document.getElementById("transactions").style.display = "block";


document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactions").style.display = "none";
});
document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactions").style.display = "none";
});
document.getElementById("transfer-money-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "block";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactions").style.display = "none";
});
document.getElementById("get-bonus-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "block";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactions").style.display = "none";
});
document.getElementById("pay-bill-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "block";
  document.getElementById("transactions").style.display = "none";
});
document.getElementById("transaction-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactions").style.display = "block";
});
