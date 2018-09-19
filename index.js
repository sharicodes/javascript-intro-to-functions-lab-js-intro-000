function shout(argument){
  return argument.toUpperCase();
}
function whisper(argument){
  return argument.toLowerCase();
}
function logShout(newArg){
  console.log(newArg.toUpperCase());
}
function logWhisper(newArg){
  console.log(newArg.toLowerCase());

}


function sayHiToGrandma(str1) {
  if(str1.toLowerCase() === str1) {
    return "I can\'t hear you!";
  } else if (str1.toUpperCase() === str1){
      return "YES INDEED!";
    } else if(str1 ===  "I love you, Grandma."){
      return "I love you, too."
  }
}

function sayHiToGrandma
