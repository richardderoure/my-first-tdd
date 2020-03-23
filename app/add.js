exports.addTogether = array => { 
    return !Array.isArray(array) || !array.every(Number.isInteger) 
    ? "Numbers must be an array of numbers" 
    : array.reduce((a,c) => a+c) 
}

// exports.addTogether = array => { return !Array.isArray(array) || !array.every(Number.isInteger) ? "Numbers must be an array of numbers" : array.reduce((a,c) => a+c) }