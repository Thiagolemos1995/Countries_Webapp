'use strict'

// Pegando o código do páis pela URL
const paramsURL = window.location.search.slice(1);
//Declaração de variáveis
const countriesInfo = document.getElementById('countries-info')
const countriesBorder = document.getElementById('countries-border')

// Fetch da API
fetch(`https://restcountries.eu/rest/v2/alpha/${paramsURL}`)
        .then(response => response.json())
        .then(function(country){
            // Template string  
            var countryInfo = ` 
                                <article id="country">
                                <div class="flag-border" style="background-image: url(${country.flag});"></div>
                                <div id="country-info">
                                <div class="info" id="name">Nome: ${country.name}</div>
                                <div class="info" id="population"><span>População: </span>${country.population}</div>
                                <div class="info" id="region"><span>Região: </span>${country.region}</div>
                                <div class="info" id="region"><span>Sub-região: </span>${country.subregion}</div>
                                <div class="info" id="capital"><span>Capital: </span>${country.capital}</div>
                                <div class="info" id="region"><span>Línguas: </span>${country.languages[3]}</div>
                                </article>`;
            // Inserindo as divs depois de cada elemento com a Template String
            countriesInfo.insertAdjacentHTML('beforeend', countryInfo);
            countriesInfo.insertAdjacentHTML('beforeend', `<div class="info-border" id="border"><p>Países Vizinhos:</p></div>`);
            for(let i=0; i<country.borders.length;i++){
                let currentCountry = country.borders[i]
                countriesBorder.insertAdjacentHTML('beforeend', `<a href="country.html?${currentCountry}">
                                                                 <div class="flag" id="bordercountries" style="background-image: url(https://restcountries.eu/data/${currentCountry.toLowerCase()}.svg);"></div></a>`);  
            }
})

document.getElementById('back').onclick=()=>{
    window.history.go(-1);
}
