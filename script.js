
async function currWether(){
  let input = document.getElementById("searchBox").value;
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=55abeb14e3f70c6ee4d63ba977ad3e75&units=metric`
  const response = await fetch(baseURL)
  const data = await response.json()
  // console.log(data.main.temp);
  const temp = data.main.temp
  document.querySelector("#temp").innerHTML = `${temp} °c`
  document.querySelector("#city").innerHTML = (input)

  const windspeed = data.wind.speed
  document.querySelector("#windSpeed span").innerHTML = `${windspeed} km/h `
  
  let humidity = data.main.humidity
  document.querySelector("#humidity span").innerHTML = `${humidity}% km/h `
  

}

const button = document.querySelector(".click")

button.addEventListener('click', (e) => {
  e.preventDefault()
  currWether()
  console.log(input);
})