# Week5Assign
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.



// creating a class for computer that assigns name
class Computer {
    constructor(name, storage) {
        this.name = name;
        this.storage = storage;
    }
}

class Menu {
    constructor() {
        this. Computers = [];
    }
}

// open to application
Start() 
    let selection = this.showMainMenuOptions();
    while (selection !=0) {
        switch(selection){
            case "1":
                this.createComputer();
                break;
            case "2":
                this.deleteComputer();
                break;
            case "3":
                this.displayComputers();
                break;
            default:
                selection = 0;        
        } 
    }

        selection = this.showMainMenuOptions();
      
       alert('goodbye');


showMainMenuOptions() {
    return promt('
    0) exit
    1) createComputer
    2) deleteComputer
    3) displayComputerList
');

}

// 
createComputer() {
   // prompt user to enter both 
   let name= prompt('enter name of computer');
   let storage = prompt ('enter size of computer storage');
   // after data is entered, push into computers array
   this.computers. push(new Computer(name, storage));
   // entering what createComputer pushes into "computer" array"
   console.log("this computer was added to computer array"');
}

displayAllComputers() {
    let computerNameslist = '';
    for (let index = 0; index<this.computers.length; index++) {
        computersNameList; +=" '/n Computer ${index} is: ${this.computer[index].name}" - ${this.computers[index].storage}
    }
    return computerNamesList;
}

deleteComputer() {
    let index = prompt ('enter the index of the computer to delete: $[this.availableComputers()}');

    if (index > -1 && index < this.computers.length){
        console.log(${this.computer[index].name} - ${this.computers[index].storage};
        // alert('${this.computer[index].name}- ${this.computer[index].storage deleted}');
        this.computers.splice(index, 1);
    }

    else {
        console.log('entered wrong index: ${this.computers.length} ')
    }
}// end menu class

displayComputers() {
    let menu + new Menu();
    menu.start();
     