
let input = document.querySelector("input");
let btn = document.getElementById("button");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let temperature = document.getElementById("temp");
let maxtemp = document.getElementById("max");
let mintemp = document.getElementById("min");
let wind = document.getElementById("wind")
let mist = document.getElementById("mist")



btn.addEventListener("click", function(e){
    
    let search = input.value;
    fetch(search);
    
    input.value =" " ;
})


function fetch(search){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`)
    .then(function(weather){
        console.log(weather.data);
        city.textContent= weather.data.name;
        temperature.textContent = weather.data.main.temp + "'C"
        humidity.textContent = weather.data.main.humidity+ "%";
        mintemp.textContent = weather.data.main.temp_min+ "'C";
        maxtemp.textContent = weather.data.main.temp_max+ "'C";
        wind.textContent = weather.data.wind.speed+ "m/s";
        mist.textContent = weather.data.weather.decription;

    });  
//     btn.addEventListener("click", function(e){
//         let time = input.value;
//         fetchh(time);
        
//     })
//     function fetchh(time){
//         axios.get(`https://timeapi.io/api/Time/current/zone?timeZone=${time}`)
//        .then(function(time){
// console.log(time);
//        })
//     }
  

}


















