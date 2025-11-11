console.log("=================(A class called Baby)");
//defining a class with a class declaration (using class keyword)
//also adding a constructor
class Baby {
    constructor(name, stinky){
        this.name=name;
        this.stinky = stinky;
    }

    cry(){
        alert(this.name + " goes *WAHHHHHHHHH* from a class declaration")
    }
}

console.log(Baby); //print the contents of the Baby Class to the console