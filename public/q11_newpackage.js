// transformer that "TRANSFORMS" the case of any string

function toUpper(str) {
  return str.toUpperCase();
}

function toLower(str) {
  return str.toLowerCase();
}

function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, '') // toremove symbols
    .split(' ')
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}

module.exports = { toUpper, toLower, toCamelCase };