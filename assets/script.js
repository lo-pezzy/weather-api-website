var searchCity = document.querySelector("#name-input");
var searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", cityLookup);

function cityLookup() {
  var cityEl = searchCity.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityEl}&appid=e72e1c5166cdaf6f9768d3651b6ab0c8`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
