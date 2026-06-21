 const age =50;

if (age>=80) {
    console.log('You are capable for Vote')
} else {
    console.log('Not for Vote')
    
}

// Used ternary operators for one condition statement
const mark=50
const result = mark>=35 ? 'Congratulation!! You are Pass': 'Sorry You are Fail. '; //ternary operator
console.log(result)



//Switch Case

const choice =6;

 switch(choice){
    case 1: console.log('Add')
    break;
    case 2: console.log("sub")
    break;

    default:console.log('IDK')
 }

 //Another Example

 const a=30;
 const opt='+'
 const b=5

 switch (opt) {
    case '+':
        console.log(a+b)
        break;
 case '-':
        console.log(a-b)
        break;
 case '*':
        console.log(a*b)
        break;


    default: console.log("You choice invalid number")
        break;
 }

 const day=5;

 switch (day) {    
    case 1: console.log('Monday')
    break; 
     case 2: console.log('Tuesday')
    break;          
    case 3: console.log('Wednesday')
    break;
    case 4: console.log('Thursday')
    break;
    case 5: console.log('Friday')
    break;
    case 6: console.log('Saturday')
    break;
    case 7: console.log('Sunday')
    break;
    default: console.log('Invalid day')
        break;
 }