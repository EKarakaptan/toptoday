function createForecast(container, response, caller) {
  state = {
    city: response.city.name,
    country: response.city.country
  }
  let weather_elem = document.createElement('div')
  let weather_elem_content = `    
      <link
      href="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/css/openweathermap-widget-left.min.css"
      rel="stylesheet"
      />
      <div class="widget-left">
        <div class="widget-left-menu widget-left-menu--brown">
          <div class="widget-left-menu__layout">
            <h2 class="widget-left-menu__header">${state.city}, ${state.country}</h2>
            <div class="widget-left-menu__links">
              <span>More at</span
              ><a
                href="//openweathermap.org/"
                target="_blank"
                class="widget-left-menu__link"
                >OpenWeatherMap</a
              >
            </div>
          </div>
        </div>
        <div class="widget-left__body">
          <div class="weather-left-card">
            <div class="weather-left-card__row1">
              <img
                src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/02n.png"
                width="128"
                height="128"
                alt="Weather in ${state.city}, ${state.country}"
                class="weather-left-card__img"
              />
              <div class="weather-left-card__col">
                <p class="weather-left-card__number">
                  7<span class="weather-left-card__degree">°C</span>
                </p>
                <span class="weather-left-card__rising">and rising</span>
              </div>
            </div>
            <div class="weather-left-card__row2">
              <p class="weather-left-card__means">few clouds</p>
              <p class="weather-left-card__wind">Wind: 6.2 m/s Moderate breeze</p>
            </div>
          </div>
          <div class="widget-left__calendar">
            <ul class="calendar">
              <li class="calendar__item">
                Today<br />23 Dec<img
                  src="https://openweathermap.org/img/w/01d.png"
                  width="32"
                  height="32"
                  alt="Today"
                />
              </li>
              <li class="calendar__item">
                Tue<br />24 Dec<img
                  src="https://openweathermap.org/img/w/10d.png"
                  width="32"
                  height="32"
                  alt="Tue"
                />
              </li>
              <li class="calendar__item">
                Wed<br />25 Dec<img
                  src="https://openweathermap.org/img/w/01d.png"
                  width="32"
                  height="32"
                  alt="Wed"
                />
              </li>
              <li class="calendar__item">
                Thu<br />26 Dec<img
                  src="https://openweathermap.org/img/w/10d.png"
                  width="32"
                  height="32"
                  alt="Thu"
                />
              </li>
              <li class="calendar__item">
                Fri<br />27 Dec<img
                  src="https://openweathermap.org/img/w/10d.png"
                  width="32"
                  height="32"
                  alt="Fri"
                />
              </li>
              <li class="calendar__item">
                Sat<br />28 Dec<img
                  src="https://openweathermap.org/img/w/04d.png"
                  width="32"
                  height="32"
                  alt="Sat"
                />
              </li>
              <li class="calendar__item">
                Sun<br />29 Dec<img
                  src="https://openweathermap.org/img/w/10d.png"
                  width="32"
                  height="32"
                  alt="Sun"
                />
              </li>
              <li class="calendar__item">
                Mon<br />30 Dec<img
                  src="https://openweathermap.org/img/w/04d.png"
                  width="32"
                  height="32"
                  alt="Mon"
                />
              </li>
            </ul>
            <div id="graphic2" class="widget-left__graphic">
              <svg
                class="axis"
                width="420"
                height="79"
                fill="#FEB020"
                style="stroke: rgb(255, 255, 255);"
              >
                <g>
                  <path
                    d="M15,39.5L72.14285714285714,32.94444444444444L129.28571428571428,46.05555555555556L186.42857142857142,36.22222222222222L243.57142857142856,32.94444444444444L300.7142857142857,29.66666666666667L357.85714285714283,26.388888888888893L415,26.388888888888893L415,32.94444444444444L357.85714285714283,32.94444444444444L300.7142857142857,39.5L243.57142857142856,42.77777777777778L186.42857142857142,49.333333333333336L129.28571428571428,52.611111111111114L72.14285714285714,42.77777777777778L15,49.333333333333336L15,39.5"
                    style="stroke-width: 1px; stroke: rgb(254, 176, 32); fill: rgb(254, 176, 32); opacity: 1;"
                  ></path>
                </g>
                <text
                  x="15"
                  y="35"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  9°
                </text>
                <text
                  x="15"
                  y="66.33333333333334"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  6°
                </text>
                <text
                  x="72.14285714285714"
                  y="28.444444444444443"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  11°
                </text>
                <text
                  x="72.14285714285714"
                  y="59.77777777777778"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  8°
                </text>
                <text
                  x="129.28571428571428"
                  y="41.55555555555556"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  7°
                </text>
                <text
                  x="129.28571428571428"
                  y="69.61111111111111"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  5°
                </text>
                <text
                  x="186.42857142857142"
                  y="31.72222222222222"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  10°
                </text>
                <text
                  x="186.42857142857142"
                  y="66.33333333333334"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  6°
                </text>
                <text
                  x="243.57142857142856"
                  y="28.444444444444443"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  11°
                </text>
                <text
                  x="243.57142857142856"
                  y="59.77777777777778"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  8°
                </text>
                <text
                  x="300.7142857142857"
                  y="25.16666666666667"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  12°
                </text>
                <text
                  x="300.7142857142857"
                  y="56.5"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  9°
                </text>
                <text
                  x="357.85714285714283"
                  y="21.888888888888893"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  13°
                </text>
                <text
                  x="357.85714285714283"
                  y="49.94444444444444"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  11°
                </text>
                <text
                  x="415"
                  y="21.888888888888893"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  13°
                </text>
                <text
                  x="415"
                  y="49.94444444444444"
                  text-anchor="middle"
                  style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
                >
                  11°
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

    `

  weather_elem.innerHTML = weather_elem_content
  container.appendChild(weather_elem)
}

function addTemp(container) {
  let time = []
  let xArr = []
  let yArr = []
  let width = 420

  let temp = document.createElement('div')
  let temp_content = `
  <text
     x="15"
     y="35"
     text-anchor="middle"
     style="font-size: 12px; stroke: rgb(51, 51, 51); fill: rgb(51, 51, 51);"
   >
     9°
   </text>
}`
  // temp.innerHTML = temp_content
  // container.appendChild(temp)
}
