/* 
    Teniendo un array conformado por 4 subArray devolver aquellos números de los subArray mas altos

    Ejemplo:

    largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 
    
    return [27,5,39,1001]

*/

function largestOfFour(arr) {
    // You can do this!
    var numeroMax = [];
    for (var i = 0; i < arr.length; i++) {
        numeroMax.push(Math.max.apply(null, arr[i]));
    }

    return numeroMax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


