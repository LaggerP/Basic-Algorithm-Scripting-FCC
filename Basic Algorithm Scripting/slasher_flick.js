function slasher(arr, howMany) {
    // it doesn't always pay to be first
    
    arr.splice(0, howMany); // splice cambia el contenido de un array eliminando o agregando elementos
                            // el primer parametro, 0, nos indica que se va a empezar a cambiar el array desde el inicio del mismo
                            // el segundo, howMany, indica cuantos elementos se van a eliminar del array. En este caso howMany = 2.
                            //                                 *-- ¿Cómo funciona? --*
                            //              Indicamos que inicie desde el principio pasando por parametro el numero 0, el howMany
                            //              va a eliminar los dos primeros elementos.
                            //                                  *-- ¿Cómo quedaría? --*
                            //                                      [1,2,3] -> [3]
    return arr;
}

slasher([1, 2, 3], 2);
