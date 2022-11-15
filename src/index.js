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

    document.getElementById("megjelenit").addEventListener("click", ()=>{
        mindBetolt(eredmeny.quotes);
    })

})


