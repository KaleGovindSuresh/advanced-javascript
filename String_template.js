var name = "ABCD";
var salary = 200;
var acc = 123456;
var month =  "July 2022";

var msg = "Hello '"+name+"',\n" + "Your salary amount " + salary + "\n" + 'for"' + month + '"mouth.';
console.log(msg);


// var msg2 = "'Hello'" + name + 


var msg3 = `Hello '${name}'
Your Salary amount ${salary}
transferred to your acc. ${acc}
for ${month}  month.
`;

console.log(msg3);

