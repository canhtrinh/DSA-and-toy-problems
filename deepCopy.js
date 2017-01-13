function deepCopy(input){
    
    var results; 
    
    //test the type of input being sent in

    //if primitive, return primitive
    if(typeOf input !== 'object'){
        results = input;
        return;
    }
    
    if(Array.isArray(input)){
        results = [];
        for(var i = 0; i < input.length; i++){
            results.push(deepCopy(input[i]))   
            
        }
    } else if(typeOf input === 'object'){
        results = {};
        var keys = Object.keys(input);
        for(var k in keys){
            results[k] = deepCopy(input[k]); // {d: "a string"}
        }
    }
    
    return results;
}