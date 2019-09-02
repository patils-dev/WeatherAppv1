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
    //display day and date
    displayDate()
    {
        var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
        var newD = new Date();
        var n = newD.getDay()
        let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        document.getElementById("day").innerHTML =week[n]+" , "+d;
    }

    displayValues(dw){
        let resultcity=dw.city;
        // let selectedCity=dw.weather.find(v=>{return v.city==result});
        console.log(resultcity);
        console.log(dw.weather)
        let selectedCity=dw.weather.find(v=>{return v.city==resultcity})
        // console.log(selectedCity);
        document.getElementById("cityName").innerHTML=selectedCity['city'];
        document.getElementById("stateName").innerHTML=selectedCity['state'];
        document.getElementById("weatherName").innerHTML=selectedCity['weather']+selectedCity['icon'];
        document.getElementById("temperature").innerHTML=selectedCity['temperature'];
    }
    displayFahrenheit(dw){
            // let cityTemp=document.getElementById("cityName").innerHTML;
            let resultcity=dw.city;
            console.log(resultcity);
            let selectedCity=dw.weather.find(v=>{return v.city==resultcity}); 
            let fahTemp=Math.round((selectedCity.temperature*1.8)+32);
            console.log(fahTemp);
            document.getElementById("temperature").innerHTML=fahTemp;
        
        }
     displayCelcius(dw){
            // let cityTemp=document.getElementById("cityName").innerHTML;
            let resultcity=dw.city;
            let selectedCity=dw.weather.find(v=>{return v.city==resultcity});
            document.getElementById("temperature").innerHTML=selectedCity['temperature'];
            //console.log(selectedCity);
        }
}

