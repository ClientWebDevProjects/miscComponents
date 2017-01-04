/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num-1);
}

// unit tests
// do not modify the below code
describe('factorial', function() {
  it('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});

describe('setTimeout', function() {
    // beforeEach(function(done) {
    //   setTimeout(() => {
    //     value = 0;
    //     done();
    //   }, 1);
    // });

    // it("should support async execution of test preparation and expectations", function(done) {
    //   value++;
    //   expect(value).toBeGreaterThan(0);
    //   done();
    // });

  let val = "";
  beforeEach((done) => {
    setTimeout(() => {
      val = "TIMEDOUT!";
      done();
    }, 1000);
  });
  

  it('should simulate an asynchronous call', (done) => {
    expect(val).toEqual("TIMEDOUT!");
    done();
  });
});