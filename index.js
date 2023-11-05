const apiKey = "34f5d9f52d17d59d5c6fc1e5dc89804b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response1 = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var Data1 = await response1.json();
    const baseUrl = "http://api.openweathermap.org/data/2.5/air_pollution/forecast";
    const latitude = Data1.coord.lat; // Replace with the desired latitude
    const longitude = Data1.coord.lon; // Replace with the desired longitude
    const response2 = await fetch(`${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
    var Data2 = await response2.json();

    console.log(Data2);
    console.log(Data2.list[0]);
    console.log(Data1.coord.lon);
    console.log(Data1.coord.lat);
    console.log(Data1);
    document.querySelector(".city").innerHTML = Data1.name;
    document.querySelector(".temp").innerHTML = Math.round(Data1.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Data1.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Data1.wind.speed + " km/hr";

    if(Data1.weather[0].main == "Clouds"){
        weatherIcon.src = "/EEP/images/wimages/clouds.png"
    }
    else if(Data1.weather[0].main == "Clear"){
        weatherIcon.src = "/EEP/images/wimages/clear.png"
    }
    else if(Data.weather[0].main == "Rain"){
        weatherIcon.src = "/EEP/images/wimages/rain.png"
    }
    else if(Data1.weather[0].main == "Drizzle"){
        weatherIcon.src = "/EEP/images/wimages/drizzle.png"
    }
    else if(Data1.weather[0].main == "Mist"){
        weatherIcon.src = "/EEP/images/wimages/mist.png"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})