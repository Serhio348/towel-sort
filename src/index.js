
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || null) return [];
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    (i % 2 !== 0) ? newMatrix = [...newMatrix, ...matrix[i].reverse()] : newMatrix = [...newMatrix, ...matrix[i]];
  }
  return newMatrix;

}
