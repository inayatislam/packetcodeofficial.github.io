var Small drinks = 2.45
var Medium drinks  = 2.95
var Large drinks = 3.45
var Extra cream = 0.50
var Marshmellows = 0.50
var Cream = 0.50
var Malt = 0.50
var isBasketEmpty = false;
var vc1 = false;
var vc2 = false;
var vc3 = false;
var vc4 = false;
var orderTotal = 0;


function SaveOrder(){
    var item1 = document.getElementById("cart");
    localStorage.setItem('saveorder', item1.innerHTML);
    console.log(localStorage);
    localstorage.setItem("price", orderTotal);
}


function AddToOrder(){
    var basket = document.getElementById("cart");
    var s = document.getElementById('size');
    if (s.value == 1) {
        var cupSize = "Small";
        var cupPrice = i1;
        vc1 = true;
    }
    else if(s.value == 2){
        var cupSize = "Medium";
        var cupPrice = i2;
        vc1 = true;
    }
    else if(s.value==3){
        var cupSize = "Large";
        var cupPrice = i3;
        vc1 = true;
    }
    var n = document.getElementById('name');
    if (n.value==1){
        var drinkName = "Banana";
        vc2 = true;
    }
    else if(n.value==2){
        var drinkName = "Strawberries";
        vc2 = true;
    }
    else if(n.value==3){
        var drinkName = "Rasberries";
        vc2 = true;
    }
    else if(n.value==4){
        var drinkName = "Blueberries";
        vc2 = true;
    }
    else if(n.value==5){
        var drinkName = "Mango";
        vc2 = true;
    }
    else if(n.value==6){
        var drinkName = "Chocolate";
        vc2 = true;
    }
    else if(n.value==6){
        var drinkName = "White Chocolate";
        vc2 = true;
    }








    var x = document.getElementById("extras");
    if (x.value == 1){
        var xtraItem = "Extra Cream";
        var xtraPrice = i4;
        vc3 = true;
    } else if(x.value==2){
        var xtraItem = "Syrup";
        var xtraPrice = i5;
        vc3 = true;
    } else if(x.value==3){
        var xtraItem = "";
        var xtraPrice = 0;
        vc3 = true;
    }
    
    if ((vc1 == true && vc2 == true && vc3 == true)){
            var txtSize = document.createTextNode(cupSize + "£3.00");
            basket.appendChild(txtSize);

            var txtName = document.createTextNode(drinkName + " ");
            basket.appendChild(txtName);
        

            var totalPrice = cupPrice + xtraPrice;
            var txtPrice = document.createTextNode(totalPrice + " ");
            basket.appendChild(txtPrice);

            var linebreak = document.createElement('br');
            basket.appendChild(linebreak);
            orderTotal = orderTotal + totalPrice;
            console.log(orderTotal);
            isBasketEmpty = false;
        }else{
            console.log("ERROR 4759: You've done something wrong!")
        }
    
    
        
}
function PlaceOrder(){
    if (isBasketEmpty==false){
        if (confirm("Your total is: £" + orderTotal + " Continue?") == true){
            alert("Your order has been placed! Thank you");
            var myNode = document.getElementById('basket');
            var size = document.getElementById("size");
            var name = document.getElementById("name");
            var extras = document.getElementById("extras");

            myNode.innerHTML = '';
            location.reload();

        } else{
            alert("You've cancelled placing the order! Please continue");
        }   
    } else{
        alert("Your basket is empty!");
    }
    
    
}


