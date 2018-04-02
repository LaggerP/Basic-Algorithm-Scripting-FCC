function rot13(str) { // LBH QVQ VG!
    var resultado = '';
    for (var i = 0; i<str.length; i++){
        var numeroAscii = str[i].charCodeAt(); //nos devuelve el valor que tiene la letra en codigo ascii
        //codigo ascii va del numero 65 a 77 | se sabe que son letras en mayusculas --> corroborar en una tabla ascii
        if (numeroAscii >= 65 && numeroAscii <=77){
            resultado = resultado + String.fromCharCode(numeroAscii + 13);
        }
        else if (numeroAscii >=78 && numeroAscii <= 90){
            resultado = resultado + String.fromCharCode(numeroAscii - 13);
        }
        else {
            resultado = resultado + str[i];
        }
    }
    return resultado;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
