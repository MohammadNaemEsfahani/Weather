let go = document.getElementById('btn')
let txt = document.getElementById('txt');
let cityName = document.getElementById('cityName')
let country = document.getElementById('country')
let temp = document.getElementById('temp')
let fells= document.getElementById('fells-like');
let tempF = document.getElementById('temp-f');
let iconTxt= document.getElementById('icon-txt');
let image = document.querySelector('img')
let pError = document.getElementById('error')
function getData(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=6e419656fb1541dc933135756240112&amp;amp&amp&q=${txt.value}&amp;amp;aqi=no`)
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        pError.style.display ='block'
            setInterval(()=>
                 pError.style.display ='none'
                ,3000)
    }
})
.then((data)=>{
    console.log(data)
    cityName.innerHTML=data.location.name
     country.innerHTML=data.location.country
     temp.innerHTML=`${data.current.temp_c}°C`
     fells.innerHTML=`${data.current.feelslike_c}°C`     
    tempF.innerHTML=`${data.current.temp_f}°F`
    iconTxt.innerHTML=data.current.condition.text
    image.src = `https:${data.current.condition.icon}`
     date.innerHTML=data.location.localtime
    })
}
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
document.addEventListener('keydown' ,(event)=>{
   if(event.code == 'Enter'){
    getData()
   }
} )
go.addEventListener('click' , getData)
window.addEventListener('load', function () {
    document.querySelector('.loader-overlay').style.display = 'none';
  });
