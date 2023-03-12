function mirror(matrix) {


    // Initialize unordered set
    var set = new Set();

    // Traverse the matrix
    for (var i = 0; i < matrix.length; i++) {
        var minr = Infinity;
        for (var j = 0; j < matrix[i].length; j++) {

            // Update the minimum
            // element of current row
            minr = Math.min(minr, matrix[i][j]);
        }

        // Insert the minimum
        // element of the row
        set.add(minr);
    }

    for (var j = 0; j < matrix[0].length; j++) {
        var maxc = -Infinity;

        for (var i = 0; i < matrix.length; i++) {

            // Update the maximum
            // element of current column
            maxc = Math.max(maxc, matrix[i][j]);
        }

        // Checking if it is already present
        // in the unordered_set or not
        if (set.has(maxc)) {
            return maxc
        }
    }
}
var mat
    = [[1, 10, 4],
    [9, 3, 8],
    [15, 16, 17]];

console.log(mirror(mat))
