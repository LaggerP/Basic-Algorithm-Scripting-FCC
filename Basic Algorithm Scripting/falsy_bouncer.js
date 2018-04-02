function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean); //boolean especifica si es true o false. Filter nos determina que todos los elementos del array cumplan                                     //con la condición, en este caso true o false (boolean).
                                // boolean ya determina los valores falsos como pueden ser:
                                //            -  false
                                //            -  0 and - 0
                                //            -  "" and ''
                                //            -  null
                                //            -  undefined
                                //            -  NaN
                                //            -  document.all
}

bouncer([7, "ate", "", false, 9]);