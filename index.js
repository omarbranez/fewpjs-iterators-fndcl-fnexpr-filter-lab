// Code your solution here
function findMatching(arr, q) {
   return arr.filter( el => 
        el.toLowerCase() === q.toLowerCase()) // case insensitive because we make everything lowercase
}

function fuzzyMatch(arr, q) { 
    return arr.filter( el =>
        el.toLowerCase().indexOf(q.toLowerCase()) === 0 // "1" doesnt return a driver if the beginning matches
    )
}

function matchName(arr, q) {
    return arr.filter( obj => 
        obj.name === q)
}