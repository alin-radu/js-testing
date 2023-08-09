const woof = (str) => {
  if (typeof str !== 'string') {
    return null;
  }
  return str.length;
};

module.exports = woof;
