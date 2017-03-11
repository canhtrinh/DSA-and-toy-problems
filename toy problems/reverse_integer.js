/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. 
Your function should return 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    //accounts for overflow in other languages
    var INT_MAX = Math.pow(2,31)-1; 
    
    if(x < 0){ 
        x = -x;
        var negative = true;
    }
    
    var results = 0;
    while(x/10 > 0){
        results = results * 10 + x % 10;
        x = Math.floor(x/10);
    }

    //accounts for overflow in other languages    
    if(results > INT_MAX || results < -(1+INT_MAX)) return 0;
    
    return (negative) ? -results : results;
};