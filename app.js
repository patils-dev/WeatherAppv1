
// //display day and date
// function displayDate()
// {
//   var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
//   var newD = new Date();
//   var n = newD.getDay()
//   let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//   document.getElementById("day").innerHTML =week[n]+" , "+d;
// }

const weather=[
    {city:"Pune",state:"Maharashtra", weather:"Cloudy",temperature:32,icon:"⛅"},
    {city:"Kolhapur",state:"Maharashtra", weather:"Rainy",temperature:26,icon:"🌧️"},
    {city:"Banglore",state:"Karnataka", weather:"Sunny",temperature:28,icon:"☀️"},
    {city:"Mumbai",state:"Maharashtra", weather:"Rainy",temperature:29,icon:"🌧️"},
    {city:"Chennai",state:"Tamilnadu", weather:"Sunny",temperature:30,icon:"☀️"},
    {city:"Dehli",state:"Dehli", weather:"Cloudy", temperature:28,icon:"⛅"},
    {city:"Hyderabad",state:"Andhrapradesh",weather:"Sunny",temperature:30,icon:"☀️"},
    {city:"Belgaum",state:"Karnataka", weather:"Rainy",temperature:"25",icon:"🌧️"}
]

//display city details

document.getElementById("list").addEventListener("submit",function displayData(v){
    let result=document.getElementById("list").value;
    console.log(result);
})
  


// class User {

//     constructor(name) {
//       this.name = name;
//     }
//     sayHi() {
//       alert(this.name);
//     } 
//   }
  
//   // Usage:
//   let user = new User("John");
//   user.sayHi();


//     function displayData()
//     {
//     displayDate();
//     let result=document.getElementById("list").value;
//     let selectedCity=weather.find(v=>{return v.city==result})
//     //console.log(selectedCity);
//     document.getElementById("cityName").innerHTML=selectedCity['city'];
//     document.getElementById("stateName").innerHTML=selectedCity['state'];
//     document.getElementById("weatherName").innerHTML=selectedCity['weather']+selectedCity['icon'];
//     document.getElementById("temperature").innerHTML=selectedCity['temperature'];
// }
// }


//to find temperature in fahrenheit
// function displayFahrenheit(){
//     let cityTemp=document.getElementById("cityName").innerHTML;
//     let selectedCity=weather.find(v=>{return v.city==cityTemp}); 
//     let fahTemp=Math.round((selectedCity.temperature*1.8)+32);
//     //console.log(fahTemp);
//     document.getElementById("temperature").innerHTML=fahTemp;

// }
 //to find temperature in celcius
// function displayCelcius()
// {
//     let cityTemp=document.getElementById("cityName").innerHTML;
//     let selectedCity=weather.find(v=>{return v.city==cityTemp});
//     document.getElementById("temperature").innerHTML=selectedCity['temperature'];
//     //console.log(selectedCity);
// }
document.getElementById("btn").addEventListener("click",function displayData(e){

    let result=document.getElementById("list").value;
    const dw=new displayWeather(result);
    // console.log(dw.city);
    // console.log(dw.weather);
    ui=new UI();
    ui.displayValues(dw);
    
    // console.log(result);
})
