// let weather;

// $(document).ready(function(){
//     $.getJSON("http://api.openweathermap.org/data/2.5/find?q=kolhapur&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
//     function(data){
//     console.log(data);
//     weather=data;
//     let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
//         console.log(icon);
//     })
//     display();
// })

document.getElementById("list").onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
       displayData()
    }
};
function displayData(){

    let result=document.getElementById("list").value;
    $.getJSON("http://api.openweathermap.org/data/2.5/find?q="+result+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
    function(data){
        
        let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
        document.getElementById("cityName").innerHTML=data.list[0].name;
        document.getElementById("stateName").innerHTML=data.list[0].sys.country;
        $("#icon").attr("src",icon);
        document.getElementById("weatherName").innerHTML=data.list[0].weather[0].main;

        document.getElementById("temperature").innerHTML=data.list[0].main.temp;
    })
}
// $(document).ready(){

// }
document.getElementById("fahrenheit").addEventListener("click",function displayFah(e){
    let result=document.getElementById("list").value;
    $.getJSON("http://api.openweathermap.org/data/2.5/find?q="+result+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
    function(data){

            let fahTemp=Math.round((data.list[0].main.temp*1.8)+32);
            //console.log(fahTemp);
            document.getElementById("temperature").innerHTML=fahTemp;
    })
    
})

document.getElementById("celcius").addEventListener("click",function displayCel(e){
    
    let result=document.getElementById("list").value;
    $.getJSON("http://api.openweathermap.org/data/2.5/find?q="+result+"&units=metric&appid=344b790f76ac39d29c9973f2736c19c3", 
    function(data){

        document.getElementById("temperature").innerHTML=data.list[0].main.temp;
    })
})
