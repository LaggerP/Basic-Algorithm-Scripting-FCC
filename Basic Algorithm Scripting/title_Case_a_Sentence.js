function titleCase(str) {
    var minusculaArray = str.toLowerCase().split(" ");
    var final = minusculaArray.map(function (valorFinal) {
        return valorFinal.replace(valorFinal.charAt(0), valorFinal.charAt(0).toUpperCase());
        //replace: selecciona la primera letra del array y la transforma en mayuscula.
    });
    return final.join(" ");


}

titleCase("I'm a little tea pot");