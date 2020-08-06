//This is syntax arrow function

//This is long version arrow function
const square = (y) => {
  return y * y;
};
//This is short version arrow function
const z = (y) => y * y;
//This is object method
const event = {
  name: "Birthday Party",
  guests: ["Fitroh", "Ardi", "Bobby"],
  printGuestList() {
    console.log("Guest List for " + this.name); //normal function can use normal binding (this.name)
    this.guests.forEach((guest) => {
      console.log(guest + " attending " + this.name); //arrow function in this binding (this.guests) can use binding (this.name)
    });
  },
};

event.printGuestList();

console.log(square(3));
console.log(z(5));
