function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        console.log("Hi")
        newArr.push(callback(array[i], function(x) {
            console.log("newarr push")
            return x * 2;
        }));
    }
    console.log("DONE")

    return newArr;
}

function doSomething(num, callback) {
    console.log("doSome");
    return callback(num + 2);
}

modifyArray([1,2,3], doSomething)