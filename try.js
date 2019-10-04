
let temp1;
document.getElementById("list").onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
       displayData()
    }
};
function displayData(){

    let result=document.getElementById("list").value;
    const proxy="https://cors-anywhere.herokupp.com/"
    $.getJSON(`${proxy}http://api.openweathermap.org/data/2.5/find?q="+result+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3`, 
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

document.getElementById("fahrenheit").addEventListener("click",function displayFah(e){
    let temp1=document.getElementById("temperature").textContent;
    console.log(temp1);

    let fahTemp=Math.round((temp1*1.8)+32);
    // console.log(fahTemp);
    document.getElementById("temperature").innerHTML=fahTemp;
    document.getElementById("fahrenheit").style.backgroundColor = "rgb(178, 183, 189)";
    document.getElementById("fahrenheit").disabled = true;
    document.getElementById("celcius").disabled = false;
    document.getElementById("celcius").style.backgroundColor="white";
})


document.getElementById("celcius").addEventListener("click",function displayCel(e){

    let temp1=document.getElementById("temperature").textContent;
    console.log(temp1);
    let celTemp=Math.round((temp1-32) * 5/9 );
    document.getElementById("temperature").innerHTML=celTemp;
    document.getElementById("celcius").disabled = true;
    document.getElementById("fahrenheit").disabled= false;
    document.getElementById("fahrenheit").style.backgroundColor="white";
    document.getElementById("celcius").style.backgroundColor = "rgb(178, 183, 189)";
})


$(document).ready(function(){
        var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
        var newD = new Date();
        var n = newD.getDay()
        let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        document.getElementById("day").innerHTML = week[n]+" , "+d;
})
