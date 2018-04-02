function destroyer(arr){
    var argumentos = Array.prototype.slice.call(arguments, 1);
    return arr.filter(function(item){
        return !argumentos.includes(item);
    });

}

destroyer([1,2,3,1,2,3],2,3);