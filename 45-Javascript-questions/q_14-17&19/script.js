
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
