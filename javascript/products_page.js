fetch('../json/product_data.json')
.then(Response => Response.json())
.then(items => {
        const products = document.querySelector("#products");
        for (let i of items.data) {
            let cards = document.createElement("div");
            cards.classList.add("cards", i.category,"hide","text-center","mb-5","col-lg-3","col-md-4","col-sm-6","col-12");

            let imge = document.createElement("img");
            imge.setAttribute("src", i.img);
            imge.classList.add("img-fluid","md-3");
            cards.appendChild(imge);
            
            let stars = document.createElement("div");
            let itn = document.createElement("i");
            itn.classList.add("fa-solid","fa-glass-citrus");
            stars.appendChild(itn);
            cards.appendChild(stars);

            let name = document.createElement("h5");            
            name.classList.add("p-name");
            name.innerText = i.name.toUpperCase();
            cards.appendChild(name);

            let price = document.createElement("h6");
            price.classList.add("p-price");
            price.innerText = "$ " + i.price;
            cards.appendChild(price);

            let button = document.createElement("button");
            button.classList.add("buy-btn");
            button.innerText = "Buy Now";
            cards.appendChild(button);
            
            products.appendChild(cards);
        }
    });
    
    function filterProduct(value){
        let buttons = document.querySelectorAll(".button-value");
        buttons.forEach((button) => {
            if (value.toUpperCase() == button.innerText.toUpperCase()){
                button.classList.add("active"); 
            }
            else{
                button.classList.remove("active");
            }
        });
        
        
        let elements = document.querySelectorAll(".cards");
        elements.forEach((element) => {
            if (value == "Menu") {
                element.classList.remove("hide");
            }
            else{
                if (element.classList.contains(value)){
                    element.classList.remove("hide");
                }
                else{
                    element.classList.add("hide");
                }
            }
        });
    };
    window.onload = () => {
        filterProduct("Menu");
    };
    