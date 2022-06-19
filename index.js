let convertToArray = (data) => {
    if (typeof(data) === 'object') {
        return [] = [...Object.values(data)]
    } else {
        return data
    }
}

let myEach = (collection, cb) => {
    let col = convertToarrayay(collection)

    for (let i = 0; i < col.length; i++) {
        cb(col[i])
    }
    return collection
}

let myMap = (collection, cb) => {
    let col = convertToarrayay(collection)
    let array = []

    for (let i = 0; i < col.length; i++) {
        array.push(cb(col[i]))
    }
    return array
}

function myReduce(collection, cb, acc) {
    let col = convertToArray(collection)

    if (arguments.length === 2) {
        acc = col[0]
        col.shift()
    }

    for (let i = 0; i < col.length; i++) {
        acc = cb(acc, col[i])
    }
    return acc
}

function myFind(collection, cb) {
    let col = convertToArray(collection)
    for (let i = 0; i < col.length; i++) {
        if (cb(col[i])) {
            return col[i]
        }
    }
}

function myFilter(collection, cb) {
    let col = convertToArray(collection)
    let passedValues = []

    for (let i = 0; i < col.length; i++) {
        if (cb(col[i])) {
            passedValues.push(col[i])
        }
    }
    return passedValues
}

function mySize(collection) {
    let size = 0
    if (typeof(collection) === 'object') {
        size = Object.keys(collection).length
    } else {
        size = collection.length
    }
    return size
}

function myFirst(array, n) {
    if (arguments.length === 2) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

function myLast(array, n) {
    if (arguments.length === 2) {
        return array.slice(-n)
    } else {
        return array[array.length - 1]
    }
}

function mySortBy(data, cb) {
    let array = []
    for (let i = 0; i < data.length; i++) {
        array.push(cb(data[i]))
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}