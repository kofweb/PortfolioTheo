const menus = document.getElementById('menu');
const navLink = document.querySelector('.navLinks');

menus.addEventListener("click", () => {
    navLink.classList.toggle("active");
});

const realName = "EKLU KOFFI THEOPHILE";
const encryptedChars ="<>/#@01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 function unlockName(){
    let code = prompt("Entrez le code secret");
    if(code !=="2026"){
        alert("code incorrect");
        return;
    }
    let iterations = 0;
    const interval = setInterval(() =>{
        document.getElementById("nom").innerText = realName.split("").map((letter,index) =>{
            if(index < iterations){
                return realName[index];
            }
            return encryptedChars[Math.floor(Math.random() * encryptedChars.length)];
        })
        .join("");
        if(iterations >= realName.length){
            clearInterval(interval);
        }
        iterations += 1/2;

    },100);
 }    


