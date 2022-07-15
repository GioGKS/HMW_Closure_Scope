
//Excercise 1 - Function Times 3
console.log("____________________________________________EXAMPLE 1____________________________________________");

var product = function first(num1, num2){
    return function second(num3, num4){
        return function third(num5, num6){
            var result = num1 * num3 * num5 + num2 * num4 * num6
            console.log(result)
        }
    }
}

product(1,2)(1,1)(2,3); //8
product(10,2)(5,0)(2,3); //100
product(1,2)(2,3)(3,4); //30
product(1,2)(0,3)(3,0); //0

//Excercise 2 - Un-Mutating an Array
console.log("____________________________________________EXAMPLE 2____________________________________________");  

let x = [3, 3, 3, 3, 3, 3, 3];
function change(x, times){
    for (let i = 0; i < x.length; i++) {
        let j = 1;
        while(j <= times){
            if(i >= j && i < x.length-j){
                x[i]--;
            }
            j++;
        }
        
    }
    return x;
}

change(x,2);

//Excercise 3 - Metaprogramming: Making a Test Case
console.log("____________________________________________EXAMPLE 3____________________________________________");

function createTest(first, second,result){
    if(typeof(first,second) === 'number'){
        assertEquals(first,second)
    }
    else if(typeof(first,second) === 'string'){
        assertEquals(first,second);
    }
    else{
        assertSimilar(first,second);
    }
}

function assertEquals(firstNum, secondNumd){
    return console.log("Test Passed: " + firstNum + secondNumd);
}
function assertSimilar(x1, x2){
    
    return console.log("Test Passed: " + x1.concat(x2));
}

createTest(1,2);
createTest("a", "b");
createTest([2],[5]);



//Excercise 4 - Backspace Attack
console.log("____________________________________________EXAMPLE 4____________________________________________");

var firstName = prompt("Enter Your Example Name For Excercise: ");
var counter = 0;
var newString = "";

for(var i = 0; i < firstName.length; i++) {
    counter++;
    if(firstName[i] == "#"){
        firstName[i].slice(0,-1);
    }
    else{
        console.log("Found Letter At Index: " + counter);
        newString += firstName[i];
    }

    if(counter == firstName.length){
        console.log(newString);
    }
}

//Excercise 5 - Moving Partition
console.log("____________________________________________EXAMPLE 5____________________________________________");

function movingPartition(arr){
    var newArr = [1, 2, 3, 4, 5];
    
    for(var i = arr.length -1 ; i >= 0; i--){
        var mArr = []
        mArr.push([arr.slice(0,-i)]);
        mArr.push([arr.slice(arr.length-i)]);
        newArr.push(mArr);
    }
    return newArr.splice(0,arr.length-1);
}

movingPartition([1, 2, 3, 4, 5]);

//Excercise 6 - Function Factory
console.log("____________________________________________EXAMPLE 6____________________________________________");

function makePlusFunction(BaseNumber){
    return function innerFunc(number2){
        return BaseNumber + number2;
    }
}
const plusFive = makePlusFunction(5)
console.log(plusFive(2));


const plusTen = makePlusFunction(10)
console.log(plusTen(0));

