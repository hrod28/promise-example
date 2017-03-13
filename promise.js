'use strict';
function promiseFun () {
    var values = [1,2,3,4];
    var newValues = [];
    var promise = Promise.resolve(null);
    values.forEach(function(value) {
        promise = promise.then(function() {
            return asyncOperation(value);
        }).then(function(newValue) {
            newValues.push(newValue);
        });
    });
    return promise.then(function() {
        return newValues;
    });
}

//another example that does not use 'forEach'

function morPromiseFun() {
    var that = this;
    return Promise.resolve()
        .then(function() {
            return that.task1();
        })
        .then(function() {
            return that.task2();
        })
        .then(function() {
            console.log('complete');
        });
}

//an example that uses reduce:
function promiseReduce () {
    var values = [1,2,3,4];
    var newValues = [];

    return values.reduce(function(memo, value) {
        return memo.then(function() {
            return asyncOperation(value);
        }).then(function(newValue) {
            newValues.push(newValue);
        });
    }, Promise.resolve(null)).then(function() {
        return newValues;
    });
}
