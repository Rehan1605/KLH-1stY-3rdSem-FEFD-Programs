const name = "Jyothi";  
const score = 95;
const subject = "JavaScript";
 

const old = "Hello, " + name + "! You scored " + score + " in " + subject;
 

const modern = `Hello, ${name}! You scored ${score} in ${subject}`;
 

const grade = `Grade: ${score >= 90 ? "A" : "B"}`;
 

const multiLine = `Line 1
		  Line 2
		  Line 3`;
console.log(modern);
console.log(grade);
console.log(multiLine);
