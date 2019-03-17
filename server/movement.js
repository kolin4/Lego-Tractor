
const pigpio = require('pigpio');

const { Gpio } = pigpio;
const serwo = new Gpio(12, { mode: Gpio.OUTPUT });
const forward = new Gpio(20, { mode: Gpio.OUTPUT });
const backward = new Gpio(21, { mode: Gpio.OUTPUT });

const servoMiddle = 1500;
serwo.servoWrite(servoMiddle);
forward.pwmFrequency(10);
backward.pwmFrequency(10);

const catchMove = ({ y = 0 }) => {
  if (y > 0) {
    const countPower = y * 5;

    forward.pwmWrite(countPower);
    backward.digitalWrite(0);
  } else if (y < 0) {
    const countPower = -y * 5;

    forward.digitalWrite(0);
    backward.pwmWrite(countPower);
  } else {
    forward.digitalWrite(0);
    backward.digitalWrite(0);
  }
};

const catchSteering = ({ x }) => {
  if (x < -4) {
    const countServo = servoMiddle + Math.ceil(-x / 5) * 60;

    serwo.servoWrite(countServo < 500 ? 500 : countServo);
  } else if (x > 4) {
    const countServo = servoMiddle - Math.ceil(x / 5) * 60;

    serwo.servoWrite(countServo > 2500 ? 2500 : countServo);
  } else {
    serwo.servoWrite(1500);
  }
};

module.exports.catchMove = catchMove;
module.exports.catchSteering = catchSteering;
