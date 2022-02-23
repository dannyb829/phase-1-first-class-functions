function receivesAFunction(cb) {
    cb()
}

function returnsAnAnonymousFunction() {
    return function () {1 + 1}
}

function returnsANamedFunction() {
    const newFunction = function () {1 + 1}
    return newFunction
}