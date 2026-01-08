"use strict";
import "./styles.css";

class Elevator {
  constructor() {
    this.currentPos = 4;
  }

  goUp() {
    this.currentPos += 1;
  }

  goDown() {
    this.currentPos -= 1;
  }

  receiveCall(num) {
    if (this.currentPos === num) {
      console.log("reached call");
      return;
    } else if (this.currentPos >= num) {
      console.log(`reached ${this.currentPos}`);
      this.goDown();
    } else if (this.currentPos <= num) {
      console.log(`reached ${this.currentPos}`);
      this.goUp();
    }
    const movementInterval = setInterval(() => {
      this.receiveCall(num);
      clearInterval(movementInterval);
    }, 1000);
  }
}

class Floor {
  constructor(number) {
    this.level = number;
  }

  callElevator(lift) {
    if (lift.currentPos !== this.level) {
      lift.receiveCall(this.level);
    }
  }
}

const floor1 = new Floor(1);
const floor2 = new Floor(2);
const floor3 = new Floor(3);
const floor4 = new Floor(4);

const lift1 = new Elevator();
floor1.callElevator(lift1);
