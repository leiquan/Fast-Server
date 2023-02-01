
function random(min = 100000, max = 999999) {
  return parseInt(Math.random() * (max - min + 1) + min, 10);
};

module.exports = random;