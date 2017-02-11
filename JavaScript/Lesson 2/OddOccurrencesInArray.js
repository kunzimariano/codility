'use strict';

function solution(A) {
  let result = 0;

  A.forEach(function(number) {
    //using XOR bitwise operator
    //equal numbers cancel each other
    //leaving at the end the only number that isn't twice
    result = result ^ number;
  });  
  return result;
}
