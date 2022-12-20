const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = ""
let password2 = ""
let password1El = document.getElementById("pass1")
let password2El = document.getElementById("pass2")
// fo this twice for the 2 new passwords
//loop through 15 times to find 15 random characters
function generatePasswords() {
    for (let i = 0; i < 15; i++) {
        let character1 = random()
        let character2 = random()
        password1 += character1
        password2 += character2
    }
    password1El.textContent = password1
    password2El.textContent = password2
    password1 = ""
    password2 = ""
}


//random number genrerator
function random() {
    let result = Math.floor(Math.random() * characters.length)
    return characters[result]
}


