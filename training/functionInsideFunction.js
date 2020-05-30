
function runWithDebugger(ourFunction){
  debugger;
  ourFunction();
}

function alarmWakeUp(){
  setTimeout(function() {
    soundWakeUp();
  }, 5000)
}

function soundWakeUp(){
  console.log('Banguuuuuuun');
}

var student = ['Midoria', 'Endavour', 'All Might']

function logName(name) {
  return console.log(name);
}

function makeForEach (myArray, ourFunction){
  for (var i = 0, len = myArray.length; i < len; i++) {
    return ourFunction(myArray[i]); 
  }
}


