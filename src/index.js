"use strict";
import "./styles.css";

class Elevator {
  constructor() {
    this.currentPos = 0;
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

class Building {
  constructor(height) {
    this.height = height;
    this.floors = [];

    for (let i = 0; i < this.height; i++) {
      this.floors.push(new Floor(i));
    }
  }
}

const myBuild = new Building(5);
const el1 = new Elevator();
console.log(myBuild.floors[2]);

myBuild.floors[4].callElevator(el1);
