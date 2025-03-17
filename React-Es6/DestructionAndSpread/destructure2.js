let array = [1,2,3,4,5,6,7];

let [a,b, ...rest] = array;

// a=1 b=2 rest=?

console.log(a,b,rest);
// rest will return an array of remaining elements

// 1 2 [ 3, 4, 5, 6, 7 ]