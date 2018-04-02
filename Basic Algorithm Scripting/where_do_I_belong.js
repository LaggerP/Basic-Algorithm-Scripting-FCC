function getIndexToIns(arr, num) {
    var contador = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i]-num<0){
            contador++;
        }
    }
    return contador;
}

getIndexToIns([60, 60], 50);
