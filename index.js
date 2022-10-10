const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isNumberCheckbox=true
let isSymbolCheckbox=true

let passwordButton=document.querySelector('#password-button')
let passlenghtInput=document.querySelector('#passlenght-input')
let numberCheckbox=document.querySelector('#number-checkbox')
let symbolCheckbox=document.querySelector('#symbol-checkbox')
let password1P=document.querySelector('#password1-p')
let password2P=document.querySelector('#password2-p')

password1P.addEventListener('click',function(){
  let copyText=password1P.textContent
  navigator.clipboard.writeText(copyText);
  alert("Copied the text: " + copyText);
})
password2P.addEventListener('click',function(){
    let copyText=password2P.textContent
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
})

passwordButton.addEventListener("click",function(){
        password1P.textContent=generatePassword()
        password2P.textContent=generatePassword()
    }
)

numberCheckbox.addEventListener('change',function(){
    isNumberCheckbox=!isNumberCheckbox
    console.log(isNumberCheckbox)
})
symbolCheckbox.addEventListener('change',function(){
    isSymbolCheckbox=!isSymbolCheckbox
    console.log(isSymbolCheckbox)
})

function generatePassword(){
    let password=""
    for (let index = 0; index < passlenghtInput.value; index++) {
        let randomNumber=Math.round(Math.random()*(characters.length-1))
        
        if (isSymbolCheckbox===false && isNumberCheckbox===false) {
            do {
                randomNumber=Math.round(Math.random()*(characters.length-1));
            } while (characters[randomNumber].match(/[a-zA-Z]/)===null);    
        }
        else if(isSymbolCheckbox===false){
            do {
                randomNumber=Math.round(Math.random()*(characters.length-1));
            } while (characters[randomNumber].match(/[^a-zA-Z0-9]/)!==null);
        }
        else if(isNumberCheckbox===false)
        {
            do {
                randomNumber=Math.round(Math.random()*(characters.length-1));
            } while (characters[randomNumber].match(/[^0-9]/)===null);
        }

        password+=characters[randomNumber]
    }
    return password
}
