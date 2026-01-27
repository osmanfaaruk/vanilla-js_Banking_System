document.getElementById('add-money').addEventListener("click", function(event){
  event.preventDefault();
  const amount = document.getElementById("Amount-number").value
  const convertedAmount = parseFloat(amount);
  const pin = document.getElementById("pin-number").value;
  const convertedPin = parseInt(pin);
  const displayBalance = document.getElementById("display-amount").innerText;
  const converted_displayBalance = parseFloat(displayBalance);
  

  if(convertedPin == 5555){
    const totalBalanceSum = converted_displayBalance + convertedAmount;
    document.getElementById("display-amount").innerText = totalBalanceSum;
  }else{
    console.log("not ok")
  }

});