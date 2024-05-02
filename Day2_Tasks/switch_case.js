console.log("This is a switch case");

let marks = 100;

switch(1){
    case 1: if(marks >= 80){
        console.log("Distinction")
        break;
    }

    case 2: if(marks >= 60){
        console.log("First class")
        break;
    }

    case 3: if(marks >= 55){
        console.log("Second class")
        break;
    }

    case 4: if(marks >= 55){
        console.log("Pass class")
        break;
    }

    case 5: if(marks <= 35){
        console.log("Failed")
        break;
    }

    default : console.log("Invalid data");
}