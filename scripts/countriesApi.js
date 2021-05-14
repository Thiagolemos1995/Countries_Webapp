'use strict'

//Declaração de variáveis
const countriesList = document.getElementById('countries-list')

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