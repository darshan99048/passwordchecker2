let input = document.getElementById('input');
let t1 = document.querySelector('#list1');
let t2 = document.querySelector('#list2');
let t3 = document.querySelector('#list3');
let t4 = document.querySelector('#list4');
function checkLength(value){
  if(value.length < 8 || value.length > 15){
    t1.classList.remove('true');
    t1.classList.add('false');
  }else{
    t1.classList.remove('false');
    t1.classList.add('true');
  }
}
function checkUpper(value){
  for(var i = 0; i < value.length; i++){
    let ch = value.charCodeAt(i);
    if(ch >= 65 && ch <= 90){
      return true;
    }
  }
}
function checkNumber(value){
  for(var i = 0; i < value.length; i++){
    for(var j = 0; j <= 9; j++){
      if(value[i] === j.toString()){
        return true;
      }
    }
  }
}
function checkSpecial(value){
  for(var i = 0; i < value.length; i++){
    let ch = value.charCodeAt(i);
    console.log(ch);
    if(!(ch >= 65 && ch <= 90) && !(ch >= 97 && ch <= 122) && !(ch >= 48 && ch <= 57) && !(ch == 32)){
      return true;
    }
  }
}

function trim(value){
  let str = '';
  for(var i = 0; i < value.length-1; i++){
    str = str +  value[i];
  }
  return str;
}

input.addEventListener('keyup',function(e){
  if(input.value === ''){
          t1.classList.remove('true'); t1.classList.remove('false');
          t2.classList.remove('true'); t2.classList.remove('false');
          t3.classList.remove('true'); t3.classList.remove('false');
          t4.classList.remove('true'); t4.classList.remove('false');
  }
  else if(e.key == ' '){
    alert("spaces are not allowed");
    let a = input.value;
       a = trim(a);
    let b = input.value.length;
      input.value = a;
  }
  else{
          checkLength(input.value);
          if(checkUpper(input.value)){
            t2.classList.remove('false'); t2.classList.add('true');
          }else{
            t2.classList.remove('true'); t2.classList.add('false');
          }
          if(checkNumber(input.value)){
            t3.classList.remove('false'); t3.classList.add('true');
          }else{
            t3.classList.remove('true'); t3.classList.add('false');
          }
          if(checkSpecial(input.value)){
            t4.classList.remove('false'); t4.classList.add('true');
          }else{
            t4.classList.remove('true'); t4.classList.add('false');
          }

  }
});