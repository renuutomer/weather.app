const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab11cef4ecmshe28d8234f643e04p11f143jsncc1734608b60',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));