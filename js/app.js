var counter= (function() { //Declare a function called counter
	var count=0; //Assignment of count to zero occurs just once in a self invoking function
	return function() { //return an inside function which returns an incremented value of count
		return count+=1;
	}
})();

console.log(counter()); //Call the function counter
console.log(counter());
console.log(counter());
console.log(counter());