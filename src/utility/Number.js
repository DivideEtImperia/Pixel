class Number {
  isEven(input) {
    return input % 2 === 0;
  }

  msToTime(input) {
    return {
      milliseconds: parseInt((input % 1000) / 100),
      seconds: parseInt((input / 1000) % 60),
      minutes: parseInt((input / (1000 * 60)) % 60),
      hours: parseInt((input / (1000 * 60 * 60)) % 24),
      days: parseInt(input / (1000 * 60 * 60 * 24))
    };
  }

  hoursToMs(input) {
    return input * 3600000;
  }
}

module.exports = new Number();