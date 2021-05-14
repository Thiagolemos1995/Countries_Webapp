'use strict'

//Declaração de variáveis
const countriesList = document.getElementById('countries-list')
const cardFilter = document.getElementById('subfilter')

// Fetch da API
fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(function(countries){ 
        //Array com os países
        var countries = countries;
        countries.forEach(country => {            
            // Template Strings
            var countryCard = ` <a href="country.html?${country.alpha3Code}">
                                <article class="country">
                                <div class="flag" style="background-image: url(${country.flag});"></div>
                                </article>
                                </a>`;
            // Inserindo as divs depois de cada elemento com a Template String
            countriesList.insertAdjacentHTML('beforeend', countryCard);
    });
});

document.getElementById('back').onclick=()=>{
    window.history.go(-1);
}


document.getElementById('search').onclick=()=>{
    
}

function subfilter(){
    let regionfilter = `<span id="filterselect">Região</span>
                        <select id="subselect">
                            <option value="">Escolha uma Opção</option>
                            <option value="africa">África</option>
                            <option value="americas">Americas</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>`
    let capitalfilter = `<span id="filterselect">Capital</span>
                         <input type="text" id="">`
    let langfilter = `<span id="filterselect">Lígua</span>
                      <input type="text" id="">`
    let countryfilter = `<span id="filterselect">País</span>
                         <input type="text" id="">`
    let codefilter = `<span id="filterselect">Código de Ligação</span>
                      <input type="number" id="">`                

    var option = document.getElementById("select").value;
    if(option == "Região"){
        cardFilter.innerHTML = regionfilter
    }
    if(option == "Capital"){
        cardFilter.innerHTML = capitalfilter
    }
    if(option == "Lingua"){
        cardFilter.innerHTML = langfilter
    }
    if(option == "País"){
        cardFilter.innerHTML = countryfilter
    }
    if(option == "Código de ligação"){
        cardFilter.innerHTML = codefilter
    }

}
