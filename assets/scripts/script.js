const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "f00c38e0279b7bc85480c3fe775d518c";

$(document).ready(function () {
  weatherFn("Kabul");
});

async function weatherFn(cName) {
  const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(temp);
    const data = await res.json();
    if (res.ok) {
      weatherShowFn(data);
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function weatherShowFn(data) {
  $("#city-name").text(data.name);
  $("#date").html(moment().format("MMMM Do<br> h:mm:ss a"));
  $("#temperature").html(`${data.main.temp}°C`);
  $("#description").text(data.weather[0].description);
  $("#wind-speed").html(`${data.wind.speed} m/s<br> Wind Speed`);
  $("#weather-info").fadeIn();
}