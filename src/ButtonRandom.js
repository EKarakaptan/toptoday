class RandomButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a class="navbar-brand text-light m-auto" id="random" title="Random City">
      <h4 class="fas fa-globe m-0"></h4>
    </a>
    `

    let style = document.createElement('style')
    style.textContent = `
      #random {                   
          cursor: pointer           
      }

      #random :hover {
          color: #ffbf3c;
          transform: scale(1.15);                              
          transition: transform 0.05s ease-in-out         
      }
      `

    this.appendChild(wrapper)
    this.appendChild(style)
    let widget = getElem('#widget_2')

    this.onclick = event => {
      function rand(min, max) {
        return Math.round(Math.random() * (max - min) + min)
      }
      let lat = rand(-90, 90)
      let lon = rand(-180, 180)

      get_weather_by_coord(widget, lat, lon, 'random-button')
      wrapper.innerHTML = `
      <a class="navbar-brand text-light m-auto" id="random" title="Random City">
        <h4 class="fas fa-circle-notch fa-spin m-0 text-warning"></h4>
      </a>
      `
    }

    this.click()
  }
}
customElements.define('random-button', RandomButton)
