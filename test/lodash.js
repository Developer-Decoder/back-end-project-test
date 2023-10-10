const _ = require("lodash");

console.log(_.defaults({ a: 3}, {a: 1   ,b: 2 }));

console.log(_.partition([1, 2, 3, 4, 5, 67, 9, 8], (n) => n % 2));
