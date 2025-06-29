async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = "dc2285326234236a1f01869b867d7392";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const weatherInfo = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;

    document.getElementById('weatherInfo').innerHTML = weatherInfo;

  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}
