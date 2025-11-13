"use strict";
class GasCar {
    constructor() {
        this.locked = true;
        this.started = false;
        this.distance = 0;
    }
    open() {
        if (this.locked) {
            this.locked = false;
        }
    }
    ;
    close() {
        if (!this.locked) {
            this.locked = true;
        }
    }
    ;
    start() {
        if (!this.started) {
            this.started = true;
        }
    }
    ;
    stop() {
        if (this.started) {
            this.started = false;
        }
    }
    go(distance) {
        this.distance += distance;
        console.log("Vroom Vroom!");
        return this.distance;
    }
}
let myCar = new GasCar();
myCar.go(10);
console.log(myCar.distance);
class Helicopter {
    constructor() {
        this.locked = true;
        this.started = false;
        this.distance = 0;
    }
    open() {
        if (this.locked) {
            this.locked = false;
        }
    }
    ;
    close() {
        if (!this.locked) {
            this.locked = true;
        }
    }
    ;
    start() {
        if (!this.started) {
            this.started = true;
        }
    }
    ;
    stop() {
        if (this.started) {
            this.started = false;
        }
    }
    go(distance) {
        this.distance += distance;
        console.log("Thump Thump Thump Thump Thump Thump");
        return this.distance;
    }
    land() {
        console.log("Thump Thump         Thump               Bump.");
    }
}
let myHelicopter = new Helicopter();
myHelicopter.land();
let myRide2 = new Helicopter();
let myHelicopert2 = myRide2;
myHelicopert2.land();
let distance = myRide2.go(100);
console.log("distance traveled:", distance);
// union type, can be helicopter or vehicle
let myNewThing = new Helicopter();
myNewThing.land();
//# sourceMappingURL=interfaces.js.map