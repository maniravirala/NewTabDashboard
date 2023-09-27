class MyClock extends HTMLElement {
  static styles = `
    <style>
    /* CSS styles go here */
    /* You can define the styles for your clock element */
    /* For example, you can style the clock's font, size, color, etc. */
    #clock {
      font-size: 3rem;
      color: #333;
    }
    </style>
  `;

  get template() {
    return `
      ${MyClock.styles}
      <div id="clock">
        <span id="hours">00</span>:
        <span id="minutes">00</span>:
        <span id="seconds">00</span>
      </div>
    `;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    this.init();
  }

  init() {
    const setTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      
      const hoursSpan = this.shadowRoot.getElementById("hours");
      const minutesSpan = this.shadowRoot.getElementById("minutes");
      const secondsSpan = this.shadowRoot.getElementById("seconds");

      hoursSpan.textContent = hours;
      minutesSpan.textContent = minutes;
      secondsSpan.textContent = seconds;
    };

    setTime(); // Set the initial time

    setInterval(() => {
      setTime(); // Update the time every second
    }, 1000);
  }
}

customElements.define("my-clock", MyClock);
