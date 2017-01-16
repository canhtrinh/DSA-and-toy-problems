/*
Find The Duplicates

Given two arrays of US social security numbers: Arr1 and Arr2 of lengths n and m respectively, how can you most efficiently compute an array of all persons included on both arrays?

Solve and analyze the complexity for 2 cases:
1. m ≈ n - lengths are approximately the same
2. m ≫ n - one is much longer than the other
*/

//linear time: O(n+m)
function pramp1() {
   console.log("Practice Makes Perfect");
   
   /*
   var arr1 = [123,456,789,...] //shorter
   var arr2 = [012,221,123,456,...] //longer
   var arr2Hashed = {
     '012': 1,
     '221: 2,
   }
   call function => [123,456]
   */
   
   // var minLength = (m.length <= n.length) ? m.length : n.length; 
   var shorter = (minLength === m.length) ? m : n;
   var longer = (shorter === m) ? n : m;
   
   //turn longer array into an object {}
   //arr2Hashed.hasOwnProperty(shorter[i]) //constant time
   var results = [];
   
   for(var i = 0; i < shorter.length; i++){
      if(shorter[i].indexOf(longer) !== -1){  
         results.push(shorter[i]);
      }
   }
   
   
   return results;
}

//when one array (m) is bigger than the other (n)... time complexity is O(n * log m) 
function pramp2() {
   console.log("Practice Makes Perfect");
   
   /*
   var arr1 = [123,456,789,...] //shorter
   var arr2 = [012,221,123,456,...] //longer
   var arr2Hashed = {
     '012': 1,
     '221: 2,
   }
   call function => [123,456]
   */
   
   // var minLength = (m.length <= n.length) ? m.length : n.length; 
   var shorter = (minLength === m.length) ? m : n;
   var longer = (shorter === m) ? n : m;
   
   //turn longer array into an object {}
   //arr2Hashed.hasOwnProperty(shorter[i]) //constant time
   var results = [];
   
   for(var i = 0; i < shorter.length; i++){
      if(shorter[i].indexOf(longer) !== -1){  
         results.push(shorter[i]);
      }
   }
   
   function binarySearch(arr,target){
      //implemented binary search
   }
   // O(n*lgm)
   
   // 
   
   
   return results;
}

pramp();