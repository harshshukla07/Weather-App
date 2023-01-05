const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '568f07cb8bmsh83155d1d3e51b8ep134634jsn740e948b05e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})


getWeather("Bangalore")



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_delhi.innerHTML = response.cloud_pct
		temp_delhi.innerHTML = response.temp
		feels_like_delhi.innerHTML = response.feels_like
		humidity_delhi.innerHTML = response.humidity
		min_temp_delhi.innerHTML = response.min_temp
		max_temp_delhi.innerHTML = response.max_temp
		wind_speed_delhi.innerHTML = response.wind_speed
		wind_degrees_delhi.innerHTML = response.wind_degrees
		sunrise_delhi.innerHTML = response.sunrise
		sunset_delhi.innerHTML = response.sunset
	})
	.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_mumbai.innerHTML = response.cloud_pct
		temp_mumbai.innerHTML = response.temp
		feels_like_mumbai.innerHTML = response.feels_like
		humidity_mumbai.innerHTML = response.humidity
		min_temp_mumbai.innerHTML = response.min_temp
		max_temp_mumbai.innerHTML = response.max_temp
		wind_speed_mumbai.innerHTML = response.wind_speed
		wind_degrees_mumbai.innerHTML = response.wind_degrees
		sunrise_mumbai.innerHTML = response.sunrise
		sunset_mumbai.innerHTML = response.sunset
	})
	.catch(err => console.error(err));





fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_london.innerHTML = response.cloud_pct
		temp_london.innerHTML = response.temp
		feels_like_london.innerHTML = response.feels_like
		humidity_london.innerHTML = response.humidity
		min_temp_london.innerHTML = response.min_temp
		max_temp_london.innerHTML = response.max_temp
		wind_speed_london.innerHTML = response.wind_speed
		wind_degrees_london.innerHTML = response.wind_degrees
		sunrise_london.innerHTML = response.sunrise
		sunset_london.innerHTML = response.sunset
	})
	.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_tokyo.innerHTML = response.cloud_pct
		temp_tokyo.innerHTML = response.temp
		feels_like_tokyo.innerHTML = response.feels_like
		humidity_tokyo.innerHTML = response.humidity
		min_temp_tokyo.innerHTML = response.min_temp
		max_temp_tokyo.innerHTML = response.max_temp
		wind_speed_tokyo.innerHTML = response.wind_speed
		wind_degrees_tokyo.innerHTML = response.wind_degrees
		sunrise_tokyo.innerHTML = response.sunrise
		sunset_tokyo.innerHTML = response.sunset
	})
	.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_sydney.innerHTML = response.cloud_pct
		temp_sydney.innerHTML = response.temp
		feels_like_sydney.innerHTML = response.feels_like
		humidity_sydney.innerHTML = response.humidity
		min_temp_sydney.innerHTML = response.min_temp
		max_temp_sydney.innerHTML = response.max_temp
		wind_speed_sydney.innerHTML = response.wind_speed
		wind_degrees_sydney.innerHTML = response.wind_degrees
		sunrise_sydney.innerHTML = response.sunrise
		sunset_sydney.innerHTML = response.sunset
	})
	.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_paris.innerHTML = response.cloud_pct
		temp_paris.innerHTML = response.temp
		feels_like_paris.innerHTML = response.feels_like
		humidity_paris.innerHTML = response.humidity
		min_temp_paris.innerHTML = response.min_temp
		max_temp_paris.innerHTML = response.max_temp
		wind_speed_paris.innerHTML = response.wind_speed
		wind_degrees_paris.innerHTML = response.wind_degrees
		sunrise_paris.innerHTML = response.sunrise
		sunset_paris.innerHTML = response.sunset
	})
	.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct_moscow.innerHTML = response.cloud_pct
		temp_moscow.innerHTML = response.temp
		feels_like_moscow.innerHTML = response.feels_like
		humidity_moscow.innerHTML = response.humidity
		min_temp_moscow.innerHTML = response.min_temp
		max_temp_moscow.innerHTML = response.max_temp
		wind_speed_moscow.innerHTML = response.wind_speed
		wind_degrees_moscow.innerHTML = response.wind_degrees
		sunrise_moscow.innerHTML = response.sunrise
		sunset_moscow.innerHTML = response.sunset
	})
	.catch(err => console.error(err));