import './style.css';

document.addEventListener("DOMContentLoaded", ()=>{


    let eredmeny;
    async function adatBetoltes(){
        let response = await fetch('/quotes.json');
        eredmeny = await response.json();
    }

    adatBetoltes();

    function mindBetolt(quotesLista){
        let szulo = document.getElementById("all");

        quotesLista = quotesLista.sort((a, b) => a.author.localeCompare(b.author));

        for(let e of quotesLista){
            let li = document.createElement("li");
            li.innerHTML = e.author + ": " + e.quote;

            szulo.appendChild(li);
        }
    }

    function bold(quotesLista){
        
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
        
        
        
        
        
        let quote = "The alma nem esett messze the fatol!";
        let quotes = quote.split(" ");
        console.log(quotes);
        
        

        


    }

    document.getElementById("megjelenit").addEventListener("click", ()=>{
        mindBetolt(eredmeny.quotes);
    })

    document.getElementById("bold").addEventListener("click", ()=>{
        bold(eredmeny.quotes);
    })

})


