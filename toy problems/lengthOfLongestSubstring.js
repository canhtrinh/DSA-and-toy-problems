/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    
    var max = 0;
    var start = 0;
    var hash = {};
    
    for(var i = 0; i < s.length; i++){
        if(s[i] in hash && hash[s[i]] >= start){
            start = hash[s[i]] + 1;
        } 
        hash[s[i]] = i;
        max = Math.max(max, i - start + 1);
    }
    
    return max;  
    
};