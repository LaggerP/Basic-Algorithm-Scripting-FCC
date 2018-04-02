function mutation(arr) {
    var word1 = arr[1].toLowerCase(); //ponemos la segunda palabra en minuscula
    var word2 = arr[0].toLowerCase(); //ponemos la primera palabra en minuscula

    for (i = 0; i < word1.length; i++) {
        if (word2.indexOf(word1[i]) === -1)
            return false;
    }
    return true;
}

mutation(["hello", "hey"]);

