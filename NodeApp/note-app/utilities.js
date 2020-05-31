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

function showPersonData(person) {
  var data = person;
  var final = "My Name is " + data.name + " I'm " + data.Age;
  return final;
}

module.exports = {
  personData,
  showPersonData,
};
