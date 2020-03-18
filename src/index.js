
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) return []

  return matrix
    .map((element, index) => (index & 1) ? element.reverse() : element)
    .reduce((res, item) => res.concat(item))
}
