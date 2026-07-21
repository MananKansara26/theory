const person = {
  name: "Manan"
};

function greetings(time) {
  console.log(`Hello ${this.name}, Good ${time}`);  
}

greetings.call(person, "Morning")



