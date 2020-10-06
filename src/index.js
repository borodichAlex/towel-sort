module.exports = function towelSort(matrix) {
    if (!(matrix && matrix.length)) return [];
    return matrix
        .reduce((res, el, index) => res.concat((index & 1) ? el.reverse() : el), []);
}
