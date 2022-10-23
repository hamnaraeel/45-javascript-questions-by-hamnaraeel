
// Question 3
var uppercase = pName.toUpperCase();
document.write(uppercase + "<br>");

var lowercase = pName.toLowerCase();
document.write(lowercase + "<br>");

const str = "Hello " + pName + ", would you like to learn some Python today? <br>";
const newStr = str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
document.write(newStr);
