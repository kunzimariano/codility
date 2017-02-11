'use strict';

function solution(A) {
  let result = {};

  A.forEach(function(number) {
    if (number in result) {
      delete result[number];
    }
    else {
      result[number] = number;
    }
  });

  let key = Object.keys(result)[0];
  return result[key];
}
