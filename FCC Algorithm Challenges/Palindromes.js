
function palindrome(str) {
  // Good luck!

  var newStr = str.replace(/(\W*)(_*)/g, '');
  var newForwardStr = newStr.toLowerCase();
  var array=[];
  var reducer = function reducer(accumulator, currentValue){
    return accumulator + currentValue;};
  for(i=newForwardStr.length-1;i>=0;i--){
    array.push(newForwardStr[i]);
  }
  var backStr = array.reduce(reducer);
  if(newForwardStr==backStr){
    return true;}
  return false;
}



palindrome("My age is 0, 0 si ega ym.");
