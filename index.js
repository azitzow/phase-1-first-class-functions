const receivesAFunction = (callback) => callback();

const  returnsANamedFunction = () => {
  return function namedFunc() {
    Console.log('Hello World');
  }
}

const returnsAnAnonymousFunction = () => {
  return function () {
    console.log('Hello World');
  }
}