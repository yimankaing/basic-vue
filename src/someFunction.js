
export const calculate = (inputa, inputb, operator) => {
//there is no this. here...
// X this.operator
// X this.inputa
// X this.inputb

  if (operator === "sum") {
    // return sum(inputa, inputb); ???
    return inputa + inputb;
  } else if (operator === "sub") {
    return inputa - inputb;
  } else if (operator === "mul") {
    return inputa * inputb;
  } else if (operator === "div") {
    return inputa / inputb;
  }
  //else
};













// export const sub = (a, b) => {
//     return a - b;
// };

// // function sub (){
// //     return
// // }


// // export default class Calculator {
// //     static
// // }

// const calculator =(a, b)=>{
//     return a + b;
// };
// export default calculator;

// export default class Cal {
//     static sum =(a, b)=>{
//         return a + b;
//     };
//     static sub = (a, b) => {
//         return a - b;
//     };

// }

// export const white = "#000000";
