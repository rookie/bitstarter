#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";
var primes = new Array();
var nextNumber = 3;

primes[0] = 2;

//prime function
function isPrime(toTest)
{
	var maxDivisor = Math.sqrt(toTest)
	for (var i = 0; i < primes.length; i++) {
		if (primes[i] > maxDivisor) {
			return true;
		};
		if (toTest%primes[i] == 0){
			return false;
		};
	};
	return true;
}

//get prime numbers
do
{
	if (isPrime(nextNumber)) {
		primes.push(nextNumber);
	}
	nextNumber += 2; // only test odd numbers
} while (primes.length < 100)

//write to file
fs.writeFileSync(outfile, primes.toString());

console.log("Script: " + __filename + "\nWrote: \n" + primes.toString() + "\nTo: " + outfile);
