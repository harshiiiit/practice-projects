/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
	if (typeof str1 !== "string" || typeof str2 !== "string") return;
	const firstStrArr = trimAndSplitAndSort(str1).join("");
	const secondStrArr = trimAndSplitAndSort(str2).join("");

	console.log(firstStrArr, secondStrArr);
	return firstStrArr === secondStrArr;
}
function trimAndSplitAndSort(str) {
	return str.trim().toLowerCase().split("").sort();
}

console.log(isAnagram("hello", "world"));

module.exports = isAnagram;
