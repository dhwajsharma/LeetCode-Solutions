var setZeroes = function(matrix) {
    let track = [];
    
    // find zeroes
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] == 0) track.push([i, j]);
        }
    }
    
    for(let i = 0; i < track.length; i++){
        let [x, y] = track[i];
    
    
    // update row
    for(let j = 0; j < matrix[0].length; j++){
        matrix[x][j] = 0;
        }
    
    // update column
    for(let j = 0; j < matrix.length; j++){
        matrix[j][y] = 0;
        }
        
    }
    
};
