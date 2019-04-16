var FlipClock = require("flipclock");

const el = document.querySelector(".clock");

const clock = new FlipClock(el, new Date(), {
  face: "HourCounter"
});
