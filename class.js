class displayWeather{
    constructor(city)
    {
        this.city=city;
        this.weather=[
            {city:"Pune",state:"Maharashtra", weather:"Cloudy",temperature:32,icon:"⛅"},
            {city:"Kolhapur",state:"Maharashtra", weather:"Rainy",temperature:26,icon:"🌧️"},
            {city:"Banglore",state:"Karnataka", weather:"Sunny",temperature:28,icon:"☀️"},
            {city:"Mumbai",state:"Maharashtra", weather:"Rainy",temperature:29,icon:"🌧️"},
            {city:"Chennai",state:"Tamilnadu", weather:"Sunny",temperature:30,icon:"☀️"},
            {city:"Dehli",state:"Dehli", weather:"Cloudy", temperature:28,icon:"⛅"},
            {city:"Hyderabad",state:"Andhrapradesh",weather:"Sunny",temperature:30,icon:"☀️"},
            {city:"Belgaum",state:"Karnataka", weather:"Rainy",temperature:"25",icon:"🌧️"}
        ]
    }
}
class UI{
    
    displayValues(dw){
        let resultcity=dw.city;
        // let selectedCity=dw.weather.find(v=>{return v.city==result});
        console.log(resultcity);
        console.log(weather)
        let selectedCity=dw.weather.find(v=>{return v.city==resultcity})
        // console.log(selectedCity);
        document.getElementById("cityName").innerHTML=selectedCity['city'];
        document.getElementById("stateName").innerHTML=selectedCity['state'];
        document.getElementById("weatherName").innerHTML=selectedCity['weather']+selectedCity['icon'];
        document.getElementById("temperature").innerHTML=selectedCity['temperature'];
    }
    displayFahrenheit(dw){
            let cityTemp=document.getElementById("cityName").innerHTML;
            let selectedCity=weather.find(v=>{return v.city==cityTemp}); 
            let fahTemp=Math.round((selectedCity.temperature*1.8)+32);
            console.log(fahTemp);
            document.getElementById("temperature").innerHTML=fahTemp;
        
        }
      
}

// document.getElementById("myBtn").addEventListener("click", displayDate);

// document.getElementById("fahrenheit").addEventListener("click",function display(v)
// {
//     ui.displayFahrenheit(dw);
// })