


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

document.getElementById("btn").addEventListener("click",function displayData(e){

    let result=document.getElementById("list").value;
    const dw=new displayWeather(result);
    // console.log(dw.city);
    // console.log(dw.weather);
    ui=new UI();
    ui.displayDate();
    ui.displayValues(dw);
    // ui. displayFahrenheit(dw);
    
    // console.log(result);
})

//display temperature in Fahrenheit
document.getElementById("fahrenheit").addEventListener("click",function displayFah(e){

    let result=document.getElementById("list").value;
    const dw=new displayWeather(result);
    ui=new UI();
    ui.displayFahrenheit(dw);
})

//display temperature in celcius
document.getElementById("celcius").addEventListener("click",function displayCel(e){
    
    let result=document.getElementById("list").value;
    const dw=new displayWeather(result);
    ui=new UI();
    ui.displayCelcius(dw);
})
