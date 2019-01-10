// Challenge 3
function map(array, callback) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(callback(array[i]));
  }
  return res;
}

console.log(map([1, 2, 3], a => a + 2));

// Challenge 4

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

//Extension 1
function mapWith(array, callback) {
  let newArray = [];
  forEach(array, function(e) {
    newArray.push(callback(e));
  });

  return newArray;
}

console.log(mapWith([1, 2, 3], e => e + 1));

//Extension 2
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;

  forEach(array, function(element) {
    accumulator = callback(accumulator, element);
  });

  return accumulator;
}

let res = reduce([4, 1, 3], (a, b) => a + b, 0);
console.log(res);

//Extension 3
function intersection(...arrays) {
  return reduce(
    arrays,
    (a, b) => {
      let res = [];

      forEach(b, element => {
        if (a.indexOf(element) > -1) {
          res.push(element);
        }
      });

      return res;
    },
    arrays[0]
  );
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return reduce(
    arrays,
    (a, b) => {
      let res = a;
      forEach(b, element => {
        if (a.indexOf(element) === -1) {
          a.push(element);
        }
      });

      return res;
    },
    arrays[0]
  );
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let res = {};

  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      res[array1[i]] = array2[i];
    }
  }
  return res;
}

console.log(
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function(str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let res = {};

  forEach(arrVals, element => {
    res[element] = map(arrCallbacks, callback => {
      return callback(element);
    });
  });

  return res;
}

console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function(str) {
        return str.toUpperCase();
      },
      function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function(str) {
        return str + str;
      }
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
