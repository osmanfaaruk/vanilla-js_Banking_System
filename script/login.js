

// step got the id at the first step
document.getElementById("login-btn").addEventListener("click", function(event){
    console.log(event)
    event.preventDefault();
    const AccountNumber = document.getElementById("Account-number").value;
    const PinNumber = document.getElementById("pin-number").value;
    if(AccountNumber.length == 9){
         if(PinNumber == 5555){
            window.location.href="/main.html";
         }else{
            alert("Wrong Pin Number")
         }
    }else{
        console.log("wrong");
    }
   
})