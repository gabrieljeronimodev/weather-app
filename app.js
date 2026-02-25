// O correto e usar a chave no backend
const key = '835e0be4412628b5f3fb1d44d9fa9645';
const inputValue = document.getElementById('input').value;
const form = document.getElementById('search-wrapper');
const iconDisplay = document.getElementById('icon-display');
const tempDisplay = document.getElementById('temp-display');
const placeDisplay = document.getElementById('city-display');
const humidDisplay = document.getElementById('humid-display');
const windDisplay = document.getElementById('wind-display');

form.addEventListener('submit', async event => {
    event.preventDefault();

    if(inputValue) {
        try {
            const data = await getApiData(inputValue);
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
}