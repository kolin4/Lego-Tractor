// engines sterings
const Gpio = require('pigpio').Gpio;

const forward = new Gpio(21, {mode: Gpio.OUTPUT});
const backward = new Gpio(20, {mode: Gpio.OUTPUT});
const pwaForward = new Gpio(16, {mode: Gpio.OUTPUT});

let dutyCycle = 0;
forward.digitalWrite(1)
setInterval(() => {
  pwaForward.pwmWrite(dutyCycle);

  dutyCycle += 5;
  if (dutyCycle > 255) {
    dutyCycle = 0;
  }
}, 20);

const catchMove = ({x = 0,y = 0}) => {
  console.log('x=' + x)
  console.log('y=' + y)
}

module.exports.catchMove = catchMove