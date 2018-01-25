function confirmEnding(str, target) {
    // “Never give up and good luck will find you.”
    // – Falcor
    var stringAux = str.substring(str.length - target.length);
    if (stringAux === target) {
        return true;
    }
    return false;
}

confirmEnding("Bastian", "n");

