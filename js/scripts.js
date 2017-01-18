// Back-end logic

var factorial = function(number) {
  for (var index = (number-1); index >= 1; index -= 1) {
    number *= index;
  }
  return number;
};

var showFactor = function(number) {
  var numbersArray = [];
  for (var index = (number-1); index >= 1; index -=1) {
    numbersArray.push(index);
  }
  return numbersArray;
};

var recursiveFactor = function(number) {
  if (number === 0) {
    return 1;
  }
  else {
    return number * recursiveFactor(number - 1);
  }
}


// Front-end user-interface

$(document).ready(function() {
  $("#factorial-form").submit(function(event) {
    event.preventDefault();

    var usrNum = parseInt($("input#userFactorial").val());
    var usrNumExplained = showFactor(usrNum);

    for (var index = 0; index < usrNumExplained.length; index += 1) {
      $(".factorial-explained").append(" " + usrNumExplained[index] + " " + "*")
    }

    $(".factorialNumber").text(usrNum);
    $(".factorial-results").text(factorial(usrNum));
    $(".recursive-results").text(recursiveFactor(usrNum));


    $("#factorial-results").show();
    $("#recursive-results").show();
  });


});
