let input = "";  // initialize as empty string
const inputdisplay = document.getElementById('inputdisplay');
const Cayo_Perico_output= document.getElementById("Cayo_Perico_output");
let fp =0.12;

// buttons showing input
// 1
document.getElementById("input1").addEventListener("click", function() {
 input += "1";
  inputdisplay.textContent = input;
  calculate()
});
//2 
document.getElementById("input2").addEventListener("click", function() {
 input += "2";
  inputdisplay.textContent = input;
  calculate()
});
// 3
document.getElementById("input3").addEventListener("click", function() {
 input += "3";
  inputdisplay.textContent = input;
  calculate()
});
// 4 
document.getElementById("input4").addEventListener("click", function() {
 input += "4";
  inputdisplay.textContent = input;
  calculate()
});
// 5
document.getElementById("input5").addEventListener("click", function() {
 input += "5";
  inputdisplay.textContent = input;
  calculate()
});
// 6
document.getElementById("input6").addEventListener("click", function() {
 input += "6";
  inputdisplay.textContent = input;
  calculate()
});
// 7 
document.getElementById("input7").addEventListener("click", function() {
 input += "7";
  inputdisplay.textContent = input;
  calculate()
});
// 8
document.getElementById("input8").addEventListener("click", function() {
 input += "8";
  inputdisplay.textContent = input;
  calculate()
});
// 9
document.getElementById("input9").addEventListener("click", function() {
 input += "9";
  inputdisplay.textContent = input;
  calculate()
});
// 0
document.getElementById("input0").addEventListener("click", function() {
 input += "0";
  inputdisplay.textContent = input;
  calculate()
});
// clear
document.getElementById("inputnull").addEventListener("click", function() {
 input = "";
  inputdisplay.textContent = input;
});
// changing the input into the output
function calculate(){

fees = input*fp;

take = input-fees;
cayo_output = take*0.50;

Cayo_Perico_output.textContent= cayo_output;
}

