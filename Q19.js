/*Dinner Guests: Working with one of the programs from Exercises
 14 through 18, print a message indicating the number of people
  you are inviting to dinner.*/
var guestArr = ["Saima", "Imran", "Maha", "Mehak"];
var canNotattend = "Mehak";
var newGuest = "Hasan";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Daniyal");
var middleGuest = "Javeria";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Ali");
//  console.log(guestArr);
console.log(guestArr.length + " " + "peoples" + " " + "are invited to dinner.");
