

    document.getElementById("cashOut-btn").addEventListener("click", function(event){
    event.preventDefault();
    const pin = document.getElementById("cashOutPin-number").value;
    const convertedPin = parseInt(pin);
    const cashOutAmount = document.getElementById("cashOut_Amount").value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);
    const mainBalance = document.getElementById("display-amount").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(convertedPin == 5555){
        const afterCashOutBalance = convertedMainBalance - convertedCashOutAmount;
        document.getElementById("display-amount").innerText = afterCashOutBalance;
    }else{
        alert("Wrong Pin Number, Enter Valid Pin Number")
    }
    }); 





