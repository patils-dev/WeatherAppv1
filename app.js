
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
