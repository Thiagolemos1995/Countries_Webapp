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

function subfilter(){
    let regionfilter = `<span id="subfilterselect">Região</span>
                        <select id="subselect">
                            <option value="">Escolha uma Opção</option>
                            <option value="africa">África</option>
                            <option value="americas">Americas</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>`
    let capitalfilter = `<span id="subfilterselect">Capital</span>
                         <input type="text" id="generalinput">`
    let langfilter = `<span id="subfilterselect">Lígua</span>
                      <input type="text" id="generalinput">`
    let countryfilter = `<span id="subfilterselect">Moeda</span>
                         <input type="text" id="generalinput">`
    let codefilter = `<span id="subfilterselect">Código de Ligação</span>
                      <input type="number" id="generalinput">`                

    var option = document.getElementById("select").value;
    if(option == "Região"){
        $("#search").click(function(){
            $('#countries-list').empty()
            let subselect = document.getElementById('subselect')
            let region = subselect.options[subselect.selectedIndex].value
            if(region !== ""){
                fetch(`https://restcountries.eu/rest/v2/region/${region}`)
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
            }
        });
        cardFilter.innerHTML = regionfilter
    }
    else if(option == "Capital"){
        $("#search").click(function(){
            $('#countries-list').empty()
            let capital = document.getElementById('generalinput').value
            if(capital !== ""){
                fetch(`https://restcountries.eu/rest/v2/capital/${capital}`)
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
            }
        });
        cardFilter.innerHTML = capitalfilter
    }
    else if(option == "Lingua"){
        $("#search").click(function(){
            $('#countries-list').empty()
            let et = document.getElementById('generalinput').value
            if(et !== ""){
                fetch(`https://restcountries.eu/rest/v2/lang/${et}`)
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
            }
        });
        cardFilter.innerHTML = langfilter
    }
    else if(option == "Moeda"){
        $("#search").click(function(){
            $('#countries-list').empty()
            let moeda = document.getElementById('generalinput').value.toLowerCase()
            if(moeda !== ""){
                fetch(`https://restcountries.eu/rest/v2/currency/${moeda}`)
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
            }
        });
        cardFilter.innerHTML = countryfilter
    }
    else if(option == "Código de ligação"){
        $("#search").click(function(){
            $('#countries-list').empty()
            let callingcode = parseInt(document.getElementById('generalinput').value)
            if(callingcode !== ""){
                fetch(`https://restcountries.eu/rest/v2/callingcode/${callingcode}`)
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
            }
        });
        cardFilter.innerHTML = codefilter
    }else{
        $("#search").click(function(){
            $('#countries-list').empty()
            
        });
    }
}