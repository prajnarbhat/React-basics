import React, { useState } from "react";

function Switchconditionalrendering2() {

    const [ weather, setWeather] = useState("")
    function changeWeather() {
        switch(weather) {
            case "sunny":
                return "Weather is sunny";
            case "rainy":
                return "Rain";
            case "winter":
                return "Weather is cold"
        }
    }
    return (
        <>
            <p>{changeWeather()} </p>
            <button type="button" onClick={() => setWeather("sunny")}>Sunny</button>
            <button type="button" onClick={() => setWeather("winter")}>Winter</button>
            <button type="button" onClick={() => setWeather("rainy")}>Rainy</button>
        </>
    )
}

export default Switchconditionalrendering2;