function myFunction(){
  console.log("My name is Alex")
} 
myFunction();

function printName(name,age){
  console.log("Hello,", name,". You are",age,"years old.");
} 
printName("Spintoc",4);


var btn = document.getElementById("go-button");

function buttonClicked(){
  console.log("Button clicked.");
  btn.removeEventListener("click", buttonClicked);
  document.getElementById("text").innerHTML = "Don't do it!";
  console.log(document.getElementById("text").innerHTML);
}
btn.addEventListener("click", buttonClicked);