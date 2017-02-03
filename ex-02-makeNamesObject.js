// EXAMPLE:
// ex-02: `makeNamesObject`

// Create a function that accepts 3 strings with first + last names as arguments
// The function should return an object with 3 properties:
// The first name will be a property-name and the last name will be the value
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function makeNamesObject(name1, name2, name3) {
var namesArr = []
var namesObj = {}

   namesArr.push (name1.split (" "))
   namesArr.push (name2.split (" "))
   namesArr.push (name3.split (" "))


for (var i = 0; i < namesArr.length; i++)
var fullName = namesArr[i]
namesObj [fullName[0]] = fullName[1]

   return namesObj
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
