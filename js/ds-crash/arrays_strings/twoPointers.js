/*: Return true if a given string is a palindrome, false otherwise.

A string is a palindrome if it reads the same forwards as backwards. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".*/
const checkIfPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true

}
s = 'racecar';
console.debug(checkIfPalindrome(s));

/*Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This
For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.*/
const checkForTarget = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currentSum = nums[left] + nums[right];
        if (currentSum === target) {
            console.info('Because :' + [nums[left], nums[right]] + "=>" + target)
            return true;
        }
        if (currentSum < target) {
            left++;

        } else {
            right--
        }


    }
    return false
}
nums = [1, 2, 4, 6, 8, 9, 14, 15];
target = 9 // return true because 4 + 9 = 13.
console.debug(checkForTarget(nums, target));