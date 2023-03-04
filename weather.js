const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const callApi = (city) =>
{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(res => res.json())
  .then(data=>displayTemp(data))
}
const displayTemp = (temps) =>{
  const Temperature = document.getElementById('Temperature')
  Temperature.innerText = temps.main.temp
  const cloud = document.getElementById('cloud')
  cloud.innerText =  temps.weather[0].main
}
document.getElementById('search-btn').addEventListener('click',function(){
  const inputField = document.getElementById('input-field');
  const city = inputField.value
  const cityName = document.getElementById('city');
  cityName.innerText = city;
inputField.value=''
 callApi(city)
})
document.getElementById('input-field').addEventListener('keydown',function(event){
  console.log(event.key)
  if(event.keycode === 13)
  {

   callApi(event)
  }
})
callApi();