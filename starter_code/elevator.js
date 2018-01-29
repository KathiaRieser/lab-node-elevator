class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.directionUp = true; // up or down
    this.intervalId;
  }

  start() {

      this.intervalId = setInterval(() => this.update(), 1000);

   }
  stop() {

      clearInterval(this.intervalId);

   }
  update() { 

    this.log();
    this.floorUp();
    this.floorDown();
    setTimeout(() => this.stop(), 30000);
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { 
      if(this.directionUp && this.floor < this.MAXFLOOR){
        this.floor++ ;
      }else{
        this.directionUp = false;
      }
      
  }
  floorDown() { 

      if(!this.directionUp && this.floor > 0){
        this.floor--;
      }else{
        this.directionUp = true;
      }
      
  }
  call(person) { 

    this.requests.push(person);
    this.waitingList.push(person);
  }
  log() {

    let direction = this.directionUp? "Up" :"Down";
    console.log("Direction: "+  direction + " | Floor: "+ this.floor );

   }
}

module.exports = Elevator;
