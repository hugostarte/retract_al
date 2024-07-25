import { useState } from 'react';
import './Weather.css';

export default function Weather(){
    const [weather,setWeather] = useState({weather:[]});
    const [city, setCity] = useState("");

    const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55d80056ec5dfe2ab7c017eb130631b4`)
        .then(result => result.json())
        .then(data => {
            setWeather(data)
        })
    }

    return(
        <div className='weather'>
            <input type="text" onChange={(e) => setCity(e.target.value)}/>
            <button onClick={() => getWeather()}>Chercher la météo</button>
            <span className="city">{weather?.name}</span>
            <span className="current">{weather.weather && weather?.weather[0]?.description}</span>
        </div>
    )
}