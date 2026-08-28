import { useState } from 'react';

function WeatherApp()
{
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    async function getWeather() {
    try {
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
        const geoData = await geoResponse.json()
        const { latitude, longitude } = geoData.results[0]

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        const weatherResult = await weatherResponse.json()
        setWeatherData(weatherResult.current_weather)
        setError(null)
    }
    catch (err) {
        setError('Failed to fetch weather data')
    }
}

    return (
        <div>
            <h2>Weather App</h2>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
            <button onClick={getWeather}>Check Weather</button>
            {weatherData && (
                <div>
                    <h3>Weather in {city}</h3>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Wind speed: {weatherData.windspeed} km/h</p>
                    
                </div>
                
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default WeatherApp