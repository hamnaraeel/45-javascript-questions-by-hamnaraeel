// Question 2
var pName = "Eric";
document.write("Hello " + pName + ", would you like to learn some Python today? <br>");

// Question 3
var uppercase = pName.toUpperCase();
document.write(uppercase + "<br>");

var lowercase = pName.toLowerCase();
document.write(lowercase + "<br>");

const str = "Hello " + pName + ", would you like to learn some Python today? <br>";
const newStr = str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
document.write(newStr);

// Question 4
document.write('Albert Einstein once said, “A person who never made a mistake never tried anything new.” <br>');


// Question 5
var famous_person = "Albert Einstein";
var message = famous_person + ' once said, “A person who never made a mistake never tried anything new.” <br>';
document.write(message);

// Question 6
var personName = "                                   Eric ";
document.write(personName);
document.write("\t" + personName + "\n");
document.write( personName + "\t"  + "\n"  + "<br>" );

// Question 7
document.write(4 + 4);
document.write(16 - 8);
document.write(2 * 4);
document.write(80 / 10);

document.write("<br>")


// Question 8
console.log( 4 + 4);
console.log(16 - 8);
console.log(2 * 4);
console.log(80 / 10);

// Question 9
var favNumber = 7;
var message = ("My Favourite Number is " + favNumber + "<br>");
document.write(message);

// Question 11
var names = ["\t \n Moniba", "\n Taha", "\n Fahad", "\n Banin", "\n Atiqa"];
for (i = 0; i < 5; i++) {
    document.write(names[i] + "<br>");
}

// Question 12
for (i = 0; i < 5; i++) {
    document.write(names[i] + " Hello! <br>");
}

// Question 13
var cars = ["Saab", "Volvo", "BMW"];
for (i = 0; i < 3; i++) {
    document.write("<br> \n I would like to own a \n" + cars[i] );
}

// Question 14
var guest = ["\t \n Miss Moniba", "\n Miss Banin", "\n Miss Atiqa"];
for (i = 0; i < 3; i++) {
    document.write(" <br>" + guest[i] + " I Would like to invite you to dinner tonight.");
}

// Question 15
document.write(" <br>" + guest[2] + " is not able to join us at dinner.")
guest[2] = "Miss Sonia";
for (i = 0; i < 3; i++) {
    document.write(" <br>" + guest[i] + " I Would like to invite you to dinner tonight.");
}

document.write("<br><br>");

// Question 16
guest[3] = "Mr Taha";
guest[4] = "Mr Fahad";
guest[5] = "Miss Hani";

for (i = 0; i < 6; i++) {
    document.write(" <br>" + guest[i] + " I Would like to invite you to dinner tonight.");
}
document.write("<br> I've found a bigger dinner table");

document.write("<br>");

guest.unshift("Mr Abdullah");
for (i = 0; i < 6; i++) {
    document.write(" <br>" + guest[i] );
}
document.write("<br>");

guest.splice(3, 0, "Miss Zarnab");
guest.splice(7, 0, "Miss Hamna");
for (i = 0; i < 9; i++) {
    document.write(" <br>" + guest[i] + " I Would like to invite you to dinner tonight." );
}

document.write("<br><br>");
// Question 17
document.write("I can invite only two people for dinner. <br><br>");

for (i = 0; i < 7; i++) {
    let guestName = guest.pop();
    document.write(guestName + " I’m sorry for not inviting you to dinner. <br>");
}
document.write(guest);
for (i = 0;i < 2; i++) {
    document.write(" <br>" + guest[i] + " I Would like to invite you to dinner tonight." );
}
// Question 19
document.write("<br><br> There are " + guest.length + " people that are invited to dinner. <br><br>");
// end Question 19

guest.pop();
guest.pop();
document.write("The remaining array elements are: [ " + guest.lenght + "]");
console.log(guest);
// end Question 17

// Question 18
document.write("<br> <br>");
var destinations = ["France", "Korea", "Switzerland", "Turkey", "Bali"];

document.write(destinations);
document.write("<br> <br>");
document.write(destinations.reverse());
document.write("<br> <br>");
document.write("Sorted array: " + destinations.sort());
document.write("<br> <br>");
document.write("Original array: " + destinations);
document.write("<br> <br>");
document.write("Reverse array: " + destinations.reverse());
document.write("<br> <br>");
document.write("Original array: " + destinations);
document.write("<br> <br>");
document.write("Reverse array to make it original: " + destinations.reverse());
document.write("<br> <br>");
var alphabeticalOrder = destinations.sort();
document.write(alphabeticalOrder);
document.write("<br> <br>");
var reverseAlphabeticalOrder = destinations.reverse();
document.write(reverseAlphabeticalOrder);

// Question 20
document.write("<br> <br>");
var anything = ["mountains", "rivers", "countries", "cities", "languages"];
for (i = 0; i < 5; i++) {
    document.write("<li>" + anything[i] + "</li>");
}
// Question 21
const mountain = {name: "Mount Everest", height: "8000ft", country: "Pakistan"};

// Question 22 
// console.log(guest[]);

// Question 23
let car = 'subaru';
console.log(car == 'subaru');
console.log(car == 'Subaru');
console.log(car === 'subaru');
console.log(car != 'subaru');
console.log(mountain.name === "Mount Everest");
console.log(mountain.name === "MountEverest");
console.log(mountain.height === "8000ft");
console.log(mountain.height === "Mount Everest");
console.log(mountain.country === "Pakistan");
console.log(mountain.country === "pakistan");
document.write("<br> <br>");


// Question 24
console.log("this is a string" == "This is a string");
console.log("This is a string" == "This is a string");
console.log("this is a string" === "This is a string");
var str2 = "This is a string";
console.log("this is a string" === str2.toLowerCase());
console.log("This Is A String" === str2.toLowerCase());


console.log(5>4);
console.log(5<4);
console.log(5>=5);
console.log(5<=6);
console.log(5>4 && 4>5);
console.log(5>4 || 4>5);

guest.push("Mr Fahad");
console.log(guest.includes("Mr Fahad"));
console.log(guest.includes("Mr Usama"));

// Question 25
var alien_color = "green";
if(alien_color == "green") {
    document.write("You just earned 5 points. <br>");
} else {
    document.write("You just earned 0 points. <br>");
}

var alien_color = "yellow";
if(alien_color == "green") {
    document.write("You just earned 5 points. <br>");
} else {
    document.write("You just earned 0 points. <br>");
}


// Question 26
var alien_color = "green";
if(alien_color == "green") {
    document.write("You just earned 5 points. <br>");
} else {
    document.write("You just earned 10 points. <br>");
}

var alien_color = "red";
if(alien_color == "green") {
    document.write("You just earned 5 points. <br>");
} else {
    document.write("You just earned 10 points. <br>");
}

// Question 26
var alien_color = "green";
if(alien_color == "green") {
    document.write("You just earned 5 points. <br>");
} else if(alien_color == "yellow"){
    document.write("You just earned 10 points. <br>");
} else if(alien_color == "red"){
    document.write("You just earned 15 points. <br>");
} else {
    document.write("You just earned 0 points. <br>");
}

var alien_color = "yellow";
if(alien_color == "green") {
    document.write("You just earned 5 points. <br>");
} else if(alien_color == "yellow"){
    document.write("You just earned 10 points. <br>");
} else if(alien_color == "red"){
    document.write("You just earned 15 points. <br>");
} else {
    document.write("You just earned 0 points. <br>");
}
var alien_color = "red";
if(alien_color == "green") {
    document.write("You just earned 5 points. <br>");
} else if(alien_color == "yellow"){
    document.write("You just earned 10 points. <br>");
} else if(alien_color == "red"){
    document.write("You just earned 15 points. <br>");
} else {
    document.write("You just earned 0 points. <br>");
}

// Question 28
var age = 4;
if(age < 2) {
    document.write("person is a baby.");
} else if (age < 4) {
    document.write("person is a toddler.");
} else if (age < 13) {
    document.write("person is a kid.");
} else if (age < 20) {
    document.write("person is a teenager.");
} else if (age < 65) {
    document.write("person is a adult.");
} else {
    document.write("person is a elder.");
}

// Question 29
var favorite_fruits = ["mango", "banana", "apple"];
