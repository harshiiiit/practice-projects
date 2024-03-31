/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str) {
  var array = str.split(""); // "India" => ["I", "n", "d", "i", "a"]
  array = array.sort(); //["I", "n", "d", "i", "a"] => ["a", "d", "i", "I", "n"]
  var sortedString = array.join(""); // ["a", "d", "i", "I", "n"] => "andiI"
  return sortedString;
}
function isAnagram(str1, str2) {
  if (sort(str1) == sort(str2)) {
    return true;
  } else {
    return false;
  }
}

var ans = isAnagram("kingas", "sagnik");
console.log(ans);

module.exports = isAnagram;
