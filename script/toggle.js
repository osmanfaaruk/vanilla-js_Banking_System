document.getElementById("cashOutCard").style.display = "none";


document.getElementById("add-money-box").addEventListener("click", function(){

    document.getElementById("cashOutCard").style.display = "none";
    document.getElementById("addMoneyCard").style.display = "block";
})

document.getElementById("cashOut-box").addEventListener("click", function(){
    document.getElementById("addMoneyCard").style.display = "none";
    document.getElementById("cashOutCard").style.display = "block";
})