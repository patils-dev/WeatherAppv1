class displayWeather{
    // constructor(city)
    // {
    //     this.city=city;
    //     this.weather=[
    //         {city:"Pune",state:"Maharashtra", weather:"Cloudy",temperature:32,icon:"⛅"},
    //         {city:"Kolhapur",state:"Maharashtra", weather:"Rainy",temperature:26,icon:"🌧️"},
    //         {city:"Banglore",state:"Karnataka", weather:"Sunny",temperature:28,icon:"☀️"},
    //         {city:"Mumbai",state:"Maharashtra", weather:"Rainy",temperature:29,icon:"🌧️"},
    //         {city:"Chennai",state:"Tamilnadu", weather:"Sunny",temperature:30,icon:"☀️"},
    //         {city:"Dehli",state:"Dehli", weather:"Cloudy", temperature:28,icon:"⛅"},
    //         {city:"Hyderabad",state:"Andhrapradesh",weather:"Sunny",temperature:30,icon:"☀️"},
    //         {city:"Belgaum",state:"Karnataka", weather:"Rainy",temperature:"25",icon:"🌧️"}
    //     ]
    // }
    constructor(city)
    {
        this.city=city;
    }
    displayValues(){
        //console.log(dw.city)
        let icon;
        
        
        let selectedCity=this.city;
        //let selectedCity=dw.weather.find(v=>{return v.city==result});
        console.log(selectedCity);
        $.getJSON("http://api.openweathermap.org/data/2.5/find?q="+selectedCity+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
        (data)=>{
        // data=data;
        console.log(data);
         icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
            console.log(icon);
       
        console.log(data.list[0].name)
        document.getElementById("cityName").innerHTML=data.list[0].name;
        document.getElementById("stateName").innerHTML=data.list[0].sys.country;
        document.getElementById("weatherName").innerHTML=data.list[0].weather[0].main;
        document.getElementById("temperature").innerHTML=data.list[0].main.temp;

        })
    }


}
// class UI{
//     //display day and date
//     displayDate()
//     {
//         var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
//         var newD = new Date();
//         var n = newD.getDay()
//         let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//         document.getElementById("day").innerHTML =week[n]+" , "+d;
//     }

//     displayValues(dw){
//         //console.log(dw.city)
//         let selectedCity=dw.city;
//         //let selectedCity=dw.weather.find(v=>{return v.city==result});
//         // console.log(resultcity);
//         //console.log(dw.weather)
//         // let selectedCity=dw.weather.find(v=>{return v.city==resultcity})
//         // console.log(selectedCity);
//         document.getElementById("cityName").innerHTML=selectedCity['city'];
//         document.getElementById("stateName").innerHTML=selectedCity['state'];
//         document.getElementById("weatherName").innerHTML=selectedCity['weather']+selectedCity['icon'];
//         document.getElementById("temperature").innerHTML=selectedCity['temperature'];
//     }
//     displayFahrenheit(dw){
//             // let cityTemp=document.getElementById("cityName").innerHTML;
//             let resultcity=dw.city;
//             //console.log(resultcity);
//             let selectedCity=dw.weather.find(v=>{return v.city==resultcity}); 
//             let fahTemp=Math.round((selectedCity.temperature*1.8)+32);
//             //console.log(fahTemp);
//             document.getElementById("temperature").innerHTML=fahTemp;
        
//         }
//      displayCelcius(dw){
//             // let cityTemp=document.getElementById("cityName").innerHTML;
//             let resultcity=dw.city;
//             let selectedCity=dw.weather.find(v=>{return v.city==resultcity});
//             document.getElementById("temperature").innerHTML=selectedCity['temperature'];
//             //console.log(selectedCity);
//         }
// }

