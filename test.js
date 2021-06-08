function isCapital(str) {
  return !/[a-z]/.test(str) || /[A-Z]/.test(str);
}

console.log(isCapital("Ramy"));
console.log(isCapital("ramy"));
