// let getweather = ()=>{
//     let c_name = document.querySelector("#inp").value
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=ea80d3a8ca00b24637536186c1fc1565`)
//     .then((res)=>{
//        console(res)
        
       
       


//     })
//     .catch((err)=>{
//         document.querySelector('#err').innerHTML = "error is: "+ err
//     })
// }














let apikey = "ea80d3a8ca00b24637536186c1fc1565";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let weathericon = document.querySelector(".weather-icon")

async function cheackweather(city){
 let response = await fetch(apiurl+city+`&appid=${apikey}`);
 var data = await response.json();
document.querySelector('.city').innerHTML = data.name;
document.querySelector('.city-sub').innerHTML = data.sys.country;


document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + "°C";
document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
document.querySelector('.speed').innerHTML = Math.round(data.wind.speed)  + "km/h";
document.querySelector('.feels-like').innerHTML = Math.round(data.main.feels_like) + "°C";
document.querySelector('.pressure').innerHTML = data.main.pressure;


if(data.weather[0].main == "Clouds"){
weathericon.src = "img/cloudy.png";

}
else if(data.weather[0].main == "Clear"){
    weathericon.src = "img/clear.png";
}

else if(data.weather[0].main == "Rain"){
    weathericon.src = "img/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weathericon.src = "img/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weathericon.src = "img/must.png";
}
else if(data.weather[0].main == "Smoke"){
    weathericon.src = "img/cloudy (1).png";
}
else if(data.weather[0].main == "Haze"){
    weathericon.src = "img/haze.png";
}
 console.log(data)
}






btn.addEventListener("click",()=>{
    cheackweather(searchbox.value);
 searchbox.value = ""
})
