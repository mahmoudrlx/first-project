let guessnumber = prompt("Guess my number!");
let rightNum = Math.floor(Math.random() * 10) + 1;

if(guessnumber === rightNum.toString())
{
    alert("Number" + guessnumber + " was correct!");
}
else{
    alert(`${"Number"} ${guessnumber} ${"was wrong!"} ${"the correct number is"} ${rightNum}`)
}
