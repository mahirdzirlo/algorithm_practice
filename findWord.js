function findWord(arr) {
  let map = {};

  for (const item of arr) {
    map[item[0]] = item[2];
  }

  let firstLetters = Object.keys(map);
  let secondLetters = Object.values(map);

  let firstLetter = firstLetters.find(
    (letter) => !secondLetters.includes(letter)
  );

  let res = firstLetter;
  let preLetter = firstLetter;

  while (firstLetters.includes(preLetter)) {
    res += map[preLetter];
    preLetter = map[preLetter];
  }

  return res;
}

console.log(findWord(["P>E", "E>R", "R>U"])); //PERU

console.log(findWord(["I>N", "A>I", "P>A", "S>P"])); // SPAIN

console.log(findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"])); // HUNGARY
console.log(findWord(["I>F", "W>I", "S>W", "F>T"])); // SWIFT
console.log(findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])); // PORTUGAL
console.log(
  findWord([
    "W>I",
    "R>L",
    "T>Z",
    "Z>E",
    "S>W",
    "E>R",
    "L>A",
    "A>N",
    "N>D",
    "I>T",
  ])
); // SWITZERLAND
