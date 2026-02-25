// O correto e usar a chave no backend
const key = '835e0be4412628b5f3fb1d44d9fa9645';
const input = document.getElementById('input');
const form = document.getElementById('search-wrapper');
const iconDisplay = document.getElementById('icon-display');
const tempDisplay = document.getElementById('temp-display');
const placeDisplay = document.getElementById('city-display');
const humidDisplay = document.getElementById('humid-display');
const windDisplay = document.getElementById('wind-display');

form.addEventListener('submit', async event => {
    event.preventDefault();

    if(input.value) {
        try {
            const data = await getApiData(input.value);
            showData(data);
        }
        catch(error) {
            if(error.message === 'API_ERROR') {
                console.log(error.message);
                console.log(error);
            }
            else {
                console.log('Unespected error\n', error);
            }
        }
    }
});

async function getApiData(input) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`;
    const response = await fetch(apiUrl);

    if(!response.ok) {
        throw new Error('API_ERROR');
    }

    const data = await response.json();
    console.log(data);
    return data;
}

function showData(data) {
    const {
        name,
        main: {temp, humidity},
        wind: {speed: windSpeed},
        weather: [{id}]
    } = data;

    iconDisplay.textContent = getEmoji(id);
    tempDisplay.textContent = `${temp.toFixed(0)}°C`;
    humidDisplay.textContent = `${humidity}%`;
    windDisplay.textContent = `${(windSpeed * 3.6).toFixed(0)}km/h`;
    placeDisplay.textContent = name;
}

function getEmoji(id) {
    if(id >= 200 && id < 300) return '⛈️';
    if(id >= 300 && id < 400) return '🌦️';
    if(id >= 500 && id < 600) return '🌧️';
    if(id >= 600 && id < 700) return '❄️';
    if(id === 800) return '☀️';
    if(id >= 800) return '⛅';
    return '❔';
}