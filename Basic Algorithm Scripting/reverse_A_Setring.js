function reverseString(str) {
  var splitStr = str.split("");
  // ("h" "e" "l" "l" "o")

  var reverseStr = splitStr.reverse();
  // ("o" "l" "l" "e" "h")

  var joinStr = reverseStr.join("");
  // ("h" "e" "l" "l" "o")

  return joinStr;

}

reverseString("hello");
