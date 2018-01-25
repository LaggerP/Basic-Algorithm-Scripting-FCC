function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length <= num) {
        return str;
    }

    var sliceString = str.slice(0, num);

     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //     if the given maximum string length num is less than or equal to 3, then the addition of the three dots does //       not add to the string length in determining the truncated string.
     // ---------------------------------------------------ES-----------------------------------------------------------
     //
     //     si la longitud de sliceString es menor o igual a 3, adicionar ... (tres puntos).
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (sliceString.length <= 3) {
        return sliceString + "...";
    }
    return sliceString.slice(0, -3) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);