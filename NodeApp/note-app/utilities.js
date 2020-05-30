const personData = {
  sasongko: {
    name: "Sasongko",
    Age: 28,
  },
  fauzi: {
    name: "Fauzi",
    Age: 22,
  },
};

function showPersonData(name, age) {
  var data = "My Name is " + name + " I'm " + age;
  return data;
}

module.exports = {
  personData,
  showPersonData,
};
