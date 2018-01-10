
function factorialize(num) {
  var array=[];
  var reducer= function reducer(accumulator, currentValue){
    return accumulator*currentValue;};
  for(i=num;i>0;i--){
    array.push(i);
  }
  if(num==0){
    array.push(1);
  }
  return array.reduce(reducer);
}

factorialize(0);
