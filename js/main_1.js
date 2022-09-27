
var welcome_message = "This is a welcome message stored inside a variable.";
var myAge = 24;
var exactAge = 24.2;

//alert("My age is toatally not this :" + (myAge + exactAge));
alert(welcome_message);

console.log("This is a log.");
console.log("My age is "+ myAge);

var iLikeCheese = true;

var isPremiumUser = false;
if(isPremiumUser == true) {
    console.log("Thanks for being a loyal customer!")
}else {
    console.log("You should subscribe to our services :)")
}

if(myAge < 1){
  console.log("You are a baby!")
}else if(myAge < 3){
  console.log("You are a todler!")
}else if(myAge < 10){
  console.log("you're a big kid.")
}else if(myAge <=19){
  console.log("You are a teenager")
}else if(myAge < 40){
  console.log("You are an adult")
}else {
  console.log("You must be old, you are not in our records.")
}
var doUntill = 5;

for(var i =0 ;i < 10; i++){
  console.log("Current i value is: ", 1);
}