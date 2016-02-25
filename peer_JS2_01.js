// Coder Enrique
// 1. Start with the number 42 and set that equal to 'value'
var value = 42;

// 2. Create condition logic to check if the value is greater than or equal to 53
if(value >= 53){
	// 2-1. If true, add 42 to 'value'
	value = value + 42;
} else {
	// 2-2. If false, subtract 13 from 'value'
	value = value - 13;
}

console.log(value); // 29


// 3. Create a string that is set to 11, add it to 'value'

value = value + "11";

console.log(value); // "2911"

// 4. Create an array, loop through 'value' using charAt, set array[i] to each value

var mittens = [];

for(var i = 0 ; i < value.length ; i++){
	mittens[i] = value.charAt(i);
}

console.log(mittens); // ["2", "9", "1", "1"]

// 5. Remove the first and last values off the array

mittens.shift();
mittens.pop();

console.log(mittens); // ["9", "1"]

// 6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

var boots = "";

for(var j = (mittens.length - 1); j > (mittens.length - (mittens.length + 1)) ; j--){
	//console.log(boots);
	boots += mittens[j];
}

console.log("Boots = " + boots); // "19"

// 7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

value = parseInt(value);
boots = parseInt(boots);

console.log(value, boots); // 2911, 19 

// ******* SWITCH PROGRAMMERS *******  Coder Michael

// 8. Add 'value' and the new variable created in Step 6 together and store them in 'value'

value = value + boots;

console.log(value);  // 2930

// 9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27. 
// If neither of these are true, set the value to 2.

if(value < 60){

	value = 14;
}  else if (value == 2930){
	value = 27;
}	else {
	value = 2;
}

console.log(value); // 27

// 10. Create a while loop that counts down from 10 and increments 'value' by 1.

var x = 10;

	while(x > 0){
	value++;
	x--;
}

console.log(value); // 37

// 11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
// is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

function reallyCoolFunction(val){
	val = val.toString();
	if(val.length == 1){ 
			// do nothing
	} else {
		//console.log(val);
		val = val.slice(1); // .slice() function extracts parts of a string.  Removes first character.
	}
	value = val;
	 return val;
}

// 12. Call the function.

reallyCoolFunction(value);


// 13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

console.log(value); // "7"

// 14. Your answer should be a String value that equals 7. Is that what you got?
