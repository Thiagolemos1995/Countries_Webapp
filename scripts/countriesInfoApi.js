'use strict'

// Pegando o código do páis pela URL
const paramsURL = window.location.search.slice(1);
//Declaração de variáveis
const countriesInfo = document.getElementById('countries-info')

// Fetch da API
fetch(`https://restcountries.eu/rest/v2/alpha/${paramsURL}`)
        .then(response => response.json())
        .then(function(country){
            // Template string  
            var countryInfo = ` 
                                <article id="country">
                                <div class="flag" style="background-image: url(${country.flag});"></div>
                                <div id="country-info">
                                <div class="info" id="name">Nome: ${country.name}</div>
                                <div class="info" id="population"><span>População: </span>${country.population}</div>
                                <div class="info" id="region"><span>Região: </span>${country.region}</div>
                                <div class="info" id="region"><span>Sub-região: </span>${country.subregion}</div>
                                <div class="info" id="capital"><span>Capital: </span>${country.capital}</div>
                                <div class="info" id="region"><span>Línguas: </span>${country.languages[3]}</div>
                                <div class="info" id="border"><p>Países Vizinhos:</p></div>
                                </article>`;
            // Inserindo as divs depois de cada elemento com a Template String
            countriesInfo.insertAdjacentHTML('beforeend', countryInfo);
            for(let i=0; i<country.borders.length;i++){
                let currentCountry = country.borders[i]
                countriesInfo.insertAdjacentHTML('beforeend', `<div class="flag" id="bordercountries" style="background-image: url(https://restcountries.eu/data/${currentCountry.toLowerCase()}.svg);"></div>`);  
            }
})

document.getElementById('back').onclick=()=>{
    window.history.go(-1);
}
