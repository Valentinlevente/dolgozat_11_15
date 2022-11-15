import './style.css';

document.addEventListener("DOMContentLoaded", ()=>{


    let eredmeny;
    async function adatBetoltes(){
        let response = await fetch('/quotes.json');
        eredmeny = await response.json();
    }

    adatBetoltes();

    function torol (id){
        let parent = document.getElementById(id);
        parent.innerHTML = "";
    }

    function mindBetolt(quotesLista){
        torol("all");
        let szulo = document.getElementById("all");

        quotesLista = quotesLista.sort((a, b) => a.author.localeCompare(b.author));

        for(let e of quotesLista){
            let li = document.createElement("li");
            li.innerHTML = e.author + ": " + e.quote;

            szulo.appendChild(li);
        }
    }

    function bold(quotesLista){
        torol("boldList");
        for(let e of quotesLista){
            let li = document.createElement("li");
            let szulo = document.getElementById("boldList")
            
            let quotes = e.quote.split(" ");
            for(let i = 0; i < quotes.length; i++){
                if(quotes[i] == "the" || quotes[i] == "The"){
                    quotes[i] = quotes[i].bold();
                }
                li.innerHTML += quotes[i] + " ";
            }

            szulo.appendChild(li);

        }
        
    }

    function nums(quotesLista){
        torol("numskiir");
        let numsList = [];
        let kiir = document.getElementById("numskiir");
        for(let e of quotesLista){
            numsList.push(e.quote.length);
        }
        let text = numsList.join(", ");
        kiir.innerHTML = text;
        /*for(let e of numsList){
            kiir.innerHTML += e;
        }*/

    }

    function szerzo(quotesLista){
        let szerzoNev = document.getElementById("szerzoNev").value;
        let counter = 0;

        for(let e of quotesLista){
            if(e.author == szerzoNev){
                counter++;
            }
        }

        document.getElementById("szerzoEredmeny").value = counter;
    }


    document.getElementById("megjelenit").addEventListener("click", ()=>{
        mindBetolt(eredmeny.quotes);
    })

    document.getElementById("bold").addEventListener("click", ()=>{
        bold(eredmeny.quotes);
    })

    document.getElementById("nums").addEventListener("click", ()=>{
        nums(eredmeny.quotes);
    })

    document.getElementById("szerzo").addEventListener("click", ()=>{
        szerzo(eredmeny.quotes);
    })

})


