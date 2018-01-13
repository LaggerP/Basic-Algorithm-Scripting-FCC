
function palindrome(str) {
  var str1 = str.replace(/[\W_]/g, '').toLowerCase();
  var str2 = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  return  str1 === str2;
}


palindrome("eye");
