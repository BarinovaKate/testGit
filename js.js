function buy() {
            let name = prompt("Hello! What is your name?");
            let discountCard = prompt( name + ", how much is this purchase in our store?");
        
            if (discountCard >= 1 && discountCard <= 3 ) {
                alert("Fine! " + name + ", we are giving you a 10% discount on this book!");
            } else if (discountCard >= 4 ) { 
                alert("Fine! " + name + ", we are giving you a 30 % discount on this book!");
            }
        }
        let buyButton = document.querySelector("button");
            buyButton.addEventListener("click", buy);