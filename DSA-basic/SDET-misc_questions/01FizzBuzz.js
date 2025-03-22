//func that prints numbers 1 to 100
//for multiples of three pring "fizz" and for five print "buzz".
//for both print "fizzbuzz"

function sol() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("fizzbuzz");
    } else if (num % 3 === 0) {
      console.log("fizz");
    } else if (num % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(num);
    }
  }
}

sol();
