import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Sangli",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Cloud Point</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}