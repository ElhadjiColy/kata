const hasDuplicates = (param) =>
  Array.isArray(param) && param
    .every(
      (el) =>
        Array.isArray(el) &&
        [...new Set(el.filter((x) => Number.isInteger(x)))].length ===
          param.length
    )
    
// [(7, 8, 4, 1, 5, 9, 3, 2, 6)].slice(6, 9);
// Array.isArray([1]);
hasDuplicates([
  [1, 4, 2, 3],
  [3, 2, 4, 1],
]);