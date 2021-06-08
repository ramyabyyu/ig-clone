// check if there is capital letter in a string
export const isCapital = (str) => {
  return !/[a-z]/.test(str) || /[A-Z]/.test(str);
};
