
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var auxArray = [];
    // auxArray va a contener los valores que se le agreguen 
    var i =0;
     
    while (i < arr.length){
        auxArray.push(arr.slice(i, i+size));
        i = i + size;
    }

    return auxArray;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
