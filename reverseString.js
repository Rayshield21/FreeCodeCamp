function reverseString(str) {
  var string=str;
  var array=[];
  var reducer = function reducer(accumulator, currentValue){ 
    return accumulator + currentValue;};
  for(i=string.length-1;i>=0;i--){ 
    array.push(string[i]);
  }
  return array.reduce(reducer);
}

reverseString("Hello World");
