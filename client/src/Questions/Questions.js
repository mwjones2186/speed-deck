// // random addition question code 
// function question() {
//     this.a = Math.round(Math.random()*10);
//     this.b = Math.round(Math.random()*10);
//     this.result = this.a + this.b;
//     this.checkResult = function(givenResultString) {
//         return (""+result == givenResultString);
//     }
// }

// // random addition, multiplication, and subtraction code 
// function question() {
//     var add(x, y) { return x+y; };
//     var subtract(x, y) { return x-y; };
//     var multiply(x, y) { return x*y };
//     var operators = [add, subtract, multiply];

//     this.a = Math.round(Math.random()*10);
//     this.b = Math.round(Math.random()*10);
//     var operatorIdx = Math.min(Math.floor(Math.random()*4),3);
//     this.operator = operators[operatorIdx];
//     this.result = operator(this.a,this.b);
//     this.checkResult = function(givenResultString) {
//         return (""+this.result == givenResultString);
//     }
// }