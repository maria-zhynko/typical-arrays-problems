
exports.min = function min (array) {
    if(array === undefined || array.length == 0){
    return 0;
  }else{
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;}
}

exports.max = function max (array) {
    if(array === undefined || array.length == 0){
    return 0;
  }else{
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;}
}

exports.avg = function avg (array) {
    if(array === undefined || array.length == 0){
    return 0;
  }else{
 let summ = 0;
  for (let i = 1; i < array.length; i++) {
   summ+=array[i];
  }
    let avg=summ/array.length;
  return avg;}
}
