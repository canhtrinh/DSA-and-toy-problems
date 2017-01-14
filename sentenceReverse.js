/*
You are given an array of characters arr, which consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.
How can you most efficiently reverse the order of the words in the array?
Explain and implement your solution. Lastly, analyze its time and space complexities.

For example:
[ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

would turn into:
[ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/

//linear time, linear space
function sentenceReverse_old(arr) {
   //arr [w,o,r,d," ",s,e,c,o,n,d]
   arr.join('').split(' ').reverse();
   
   //[second]
   var results = [];
   
   for(var i = 0; i < arr.length; i++){
      results.push(arr[i]);
      if(i !== arr.length - 1){
        results.push(" ");   
      }
   }
   //[second," ",word]
   
   for(var j = 0; j < results.length; j++){
      results[i] = results[i].split('');
   }
   
   return results;
   

}

//linear time, constant space
function sentenceReverse(arr) {
  
  arr.reverse();
  var start = 0;
  for(var i = 0; i < arr.length; i++){
     if(arr[i] === '' || i === arr.length - 1){
        var end = i;
        helperReverse(arr,start,end)
     }
     start = i+1;
  }
  
   return arr;
}

  function helperReverse(arr, start, end){
     for(var i = start; i <=(end - start) / 2; i++){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
     }
     
     
  }

sentenceReverse();