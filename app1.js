//display city details
document.getElementById("list").addEventListener("keypress",function displayData(e){
    if(e.keyCode==13)
    {
        console.log("kegjd")
        let result=document.getElementById("list").value;
        dw =new displayWeather(result);
        dw.displayValues();
    }

})

// display temperature in Fahrenheit
document.getElementById("fahrenheit").addEventListener("click",function displayFah(e){

        let result=document.getElementById("list").value;
    
        dw =new Weather(result);
        dw.displayFahrenheit();
})
 //display temperature in celcius
document.getElementById("celcius").addEventListener("click",function displayCel(e){
    
    let result=document.getElementById("list").value;
    dw =new Weather(result);
    dw.displayCelcius();
})