// check if there is capital letter in a string
export const isCapital = (str) => {
  return !/[a-z]/.test(str) || /[A-Z]/.test(str);
};

export const userNameValidate = (username) => {
  let convertToLower = username.toLowerCase();
  let removeWhiteSpaces = convertToLower.replace(/\s/g, "");
  return removeWhiteSpaces;
};
