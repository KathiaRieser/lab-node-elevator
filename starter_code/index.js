const Elevator = require('./elevator.js');
const Person = require('./person.js');


var elevator = new Elevator();

elevator.start();

var personProof = new Person("Kathia", 3, 7);
elevator.call(personProof);
console.log(elevator.requests);
console.log(elevator.waitingList);


