let passwordOneEl = document.getElementById("passwordOne") 
let passwordTwoEl = document.getElementById("passwordTwo")

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords() {
    randomIndexOne = Math.floor(Math.random() * characters.length)
    randomIndexTwo = Math.floor(Math.random() * characters.length)

    randomPasswordOne = characters[randomIndexOne]
    randomPasswordTwo = characters[randomIndexTwo]

    console.log(randomPasswordOne)

    passwordOneEl.textContent = randomPasswordOne
    passwordTwoEl.textContent = randomPasswordTwo
}
