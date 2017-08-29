function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  var name = function named() {}
  return name
}

function returnsAnAnonymousFunction() {
  return () => {}
}
