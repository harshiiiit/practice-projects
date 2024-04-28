/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var str_1 = str1.split("").sort().join("");
  var str_2 = str2.split("").sort().join("");

  if(str_1 == str_2)
  {
    return true;
  }
  else{
    return false;
  }
  

}
var result = isAnagram("hello","olleh");
console.log(result);

// module.exports = isAnagram;
