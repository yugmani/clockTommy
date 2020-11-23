setInterval(setClock, 1000);
const timer = document.getElementById("timer");
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotation(hourHand, hourRatio);
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);

  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const html = `<h1>${hour}:${minute}:${second}</h1>`;
  timer.innerHTML = html;

  //   console.log(hour);
  //   console.log(minute);
  //   console.log(second);
  //   console.log(html);
}

function setRotation(element, RotationRatio) {
  element.style.setProperty("--rotation", RotationRatio * 360);
}

setClock();
