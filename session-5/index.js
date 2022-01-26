function getGrade (total){
    if (getGrade >= 90) {
        console.log ("A+");
    }
    else if (total > 80 && total <= 90)
    console.log("A");

    else if (total > 70 && total <= 80)
    console.log("B"); 

    else if (total > 60 && total <= 70)
    console.log("C");

    else if (total > 50 && total <= 60)
    console.log("D");

    else if (total > 40 && total <= 50)
    console.log("E");

    else if (total > 30 && total  <= 40)
    console.log("F"); 

    else (total  < 30)
    console.log("Fail"); 

}

console.log(getGrade (40)); 

// let grade 
// if (total > 90){
// grade= "A+"; 
// }
// console.log ("Your grade is" + grade) 


//switch statements do not use comparison operators 
//therefore the exercise completely changes
//switch can replace multiple "if" and gives a more descriptive way 
//to compare a value with multiple variants


function getGrade(total){
    let grade;
  
        switch (true) {
        case (total > 90):
        grade = 'A+';
        break;
  
        case (total > 80):
        grade = 'A';
        break;
  
        case (total > 70):
        grade = 'B';
        break;
  
        case (total > 60):
        grade = 'C';
        break;
  
        case (total > 50):
        grade = 'D';
        break;
  
        case (total > 40):
        grade = 'E';
        break;
  
        case (total > 30):
        grade = 'F';
        break;
  
        case (total < 30):
        grade = 'FAIL';
        break;
  
        default:
        grade = 'Not found';
      }
      return grade
  }
  console.log("Your grade is: " + getGrade(95)+"!");
