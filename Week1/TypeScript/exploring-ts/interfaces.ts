interface Vehicle {
    locked: boolean;
    started: boolean;
    distance: number;

    open():void
    close():void
    start():void
    stop():void
    go(distance:number):number
}

class GasCar implements Vehicle {
    locked: boolean = true;
    started: boolean = false;
    distance = 0;

    open(){
        if(this.locked){
            this.locked = false;
        }
    };

    close(){
        if(!this.locked){
            this.locked = true;
        }
    };

    start(){
        if(!this.started){
            this.started = true;
        }
    };

    stop(){
        if(this.started){
            this.started = false;
        }
    }

    go(distance:number){
        this.distance +=distance;
        console.log("Vroom Vroom!")
        return this.distance;
    }


}

let myCar: Vehicle = new GasCar()
myCar.go(10);
console.log(myCar.distance)

class Helicopter implements Vehicle {
    locked = true;
    started = false;
    distance = 0;

    open(){
        if(this.locked){
            this.locked = false;
        }
    };

    close(){
        if(!this.locked){
            this.locked = true;
        }
    };

    start(){
        if(!this.started){
            this.started = true;
        }
    };

    stop(){
        if(this.started){
            this.started = false;
        }
    }

    go(distance: number){
        this.distance +=distance;
        console.log("Thump Thump Thump Thump Thump Thump")
        return this.distance;
    }

    land():void{
        console.log("Thump Thump         Thump               Bump.")
    }


}

let myHelicopter = new Helicopter()
myHelicopter.land()

let myRide2:Vehicle = new Helicopter()
let myHelicopert2 = myRide2 as Helicopter
myHelicopert2.land()
let distance: number = myRide2.go(100);
console.log("distance traveled:", distance)

// union type, can be helicopter or vehicle
let myNewThing: Helicopter | Vehicle = new Helicopter();
(myNewThing as Helicopter).land()

let x:number |string |boolean | Object | Function |any |undefined;
x="one"
x=1

