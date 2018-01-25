
function findLongestWord(str) {
  var palabras = str.split(' ');
  var largoMax = 0;

  for(var i = 0; i<palabras.length; i++){
    if (palabras[i].length > largoMax){
      largoMax = palabras[i].length;
    }
  }
  return largoMax;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
