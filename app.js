// O correto e usar a chave no backend
const key = '835e0be4412628b5f3fb1d44d9fa9645';
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
const inputValue = document.getElementById('input').value;
const form = document.getElementById('search-wrapper');
const iconDisplay = document.getElementById('icon-display');
const tempDisplay = document.getElementById('icon-display');
const cityDisplay = document.getElementById('city-display');
const humidDisplay = document.getElementById('humid-display');
const windDisplay = document.getElementById('wind-display');

form.addEventListener('submit', event => {
    event.preventDefault();

    if(inputValue) {

    }
    else {
        
    }
});
