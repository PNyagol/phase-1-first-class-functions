function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function namedFunction() {
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
    };
  }
  
  receivesAFunction(function () {
    console.log("Callback function is called");
  });