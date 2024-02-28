const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myFilteration = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
        result.push(this[i])        
    }
    }
    return result;
};

let anseven = arr.myFilteration( (value) => {
    return value % 2 == 0;
});
let ansodd = arr.myFilteration( (value) => {
    return value % 2 == 0;
});

console.log(anseven, ansodd);