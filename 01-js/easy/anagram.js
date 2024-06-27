/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  sz1 = str1.length;
  sz2 = str2.length;
  if(sz1!=sz2)return false;
  flg = true;
  for (var i = 0; i < sz1; i++) {
    if (str1[i] != str2[sz1 - 1 - i]) {
      flg = false;
      break;
    }
  }
  if (flg) return true;
  else return false;
}

module.exports = isAnagram;

// console.log(isAnagram('ab','ba')) - To print in vsCode