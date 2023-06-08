const words = ["Full Stack Engineer", "Backend Engineer", "Frontend Engineer"];
let i = 0;
const word = words[i].split("")
let check = ""
let loopTyping = function () {
    if (word.length > 0) {
      check += word.shift();
      console.log(check)
      loopTyping()
    } else {
        console.log("done")
    }
}
loopTyping();