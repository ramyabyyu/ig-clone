const testJson = {
  name: "Ramy Abyyu",
  email: "ramyadmin99@test.com",
};

const testStringifyJson = JSON.stringify(testJson);

const testName = JSON.parse(testStringifyJson);

console.log(testName.name);
