const btn = document.querySelector(".btn");
const cityInput= document.querySelector("#city");
const temp=document.querySelector("#temp-div");
const apiKey="fe7ffcb8e08bb57494c6cb9291977cae";  

btn.addEventListener("click",async function(){
   let city= cityInput.value ;
//    temp.innerHTML=city
   const weatherinfo= await getWeatherinfo(city)
   console.log(weatherinfo.main.temp)
   temp.innerHTML=weatherinfo.main.temp     
});
async function getWeatherinfo(city)
{
const apiUrl=` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey} `

    const response= await fetch(apiUrl);
const data= await response.json();
return data;

}
