let finalcal = document.getElementById('result');
var display=''

function pressed(currentKey){
    if (currentKey === 'C'){
        clearLast()
    }
    else if (currentKey === 'AC'){
        clearALl()
    }
    else{
    console.log(currentKey);
    res=document.getElementById('result')
    display=display+currentKey
    res.innerHTML=display
}
}

function calculateResult(){
    finalcal.innerHTML=eval(display)
    current=eval(display)
    display=current
}

function clearLast(){
    display=display.slice(0, -1)
    res=document.getElementById('result')
    res.innerHTML=display 
}

function clearALl(){
    display=''
    res=document.getElementById('result')
    res.innerHTML=display 
}

document.addEventListener('keydown', function(event) {
key=event.key
validKeys=['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','Enter','Backspace']
if (validKeys.includes(key)) {
    event.preventDefault();
    if (key === 'Enter') {
        console.log('hey');
      calculateResult();
    } else if (key === 'Backspace') {
      clearLast();
    } else if (key === 'Backspace') {
        clearLast();
    } else {
      pressed(key);
    }
  }
})