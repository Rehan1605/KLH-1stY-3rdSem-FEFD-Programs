
if (true) {
	  var leaked = "I escaped!";
}
console.log(leaked); 

if (true) {
  let safe = "I am block-scoped";
  console.log(safe); 
}

safe = "I am Outside";
console.log(safe);
 

const PI = 3.14159;
console.log("PI is: " + PI);

