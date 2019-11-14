//weather class with methods:- displayDate, displayValues, displayFahrenheit, displayCelcius
class Weather{
    //constructor which intializing city variable of class with value which we will get from front end. 
    constructor(city)
    {
        this.city=city;
    }

    //this function will display day and date
    displayDate()
    {
        var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
        var newD = new Date();
        var n = newD.getDay()
        let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        document.getElementById("day").innerHTML =week[n]+" , "+d;
    }
    
    //display weather,temperature of specified city 
    displayValues()
    {
        let selectedCity=this.city;
        $.getJSON("http://api.openweathermap.org/data/2.5/find?q="+selectedCity+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
            function(data){
                let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
                document.getElementById("cityName").innerHTML=data.list[0].name;
                document.getElementById("stateName").innerHTML=data.list[0].sys.country;
                $("#icon").attr("src",icon);
                document.getElementById("weatherName").innerHTML=data.list[0].weather[0].main;
                document.getElementById("temperature").innerHTML=data.list[0].main.temp;
                document.getElementById("celcius").disabled = true;
            })
    }
    //taking present value of temperature and converting it into farenheit unit value
    displayFahrenheit()
    {
            let celTemp=document.getElementById("temperature").textContent;
            let fahTemp=Math.round((celTemp*1.8)+32);
            document.getElementById("temperature").innerHTML=fahTemp;
            document.getElementById("fahrenheit").style.backgroundColor = "rgb(178, 183, 189)";
            document.getElementById("fahrenheit").disabled = true;
            document.getElementById("celcius").disabled = false;
            document.getElementById("celcius").style.backgroundColor="white";

    }
     //taking present value of temperature and converting it into celcius unit value
    displayCelcius()
    {
        let fahTemp=document.getElementById("temperature").textContent;
        let celTemp=Math.round((fahTemp-32) * 5/9 );
        document.getElementById("temperature").innerHTML=celTemp;
        document.getElementById("celcius").disabled = true;
        document.getElementById("fahrenheit").disabled= false;
        document.getElementById("fahrenheit").style.backgroundColor="white";
        document.getElementById("celcius").style.backgroundColor = "rgb(178, 183, 189)";
    }

}
