var password = document.querySelectorAll(".password");
var icon = document.querySelectorAll(".icon")
console.log(password, icon);
// Login dark:
icon[0].addEventListener("click", ()=>{
    if(password[0].type == "password"){
        password[0].type = "text";
        icon[0].classList.remove("open");
        icon[0].classList.add("closed");
    }else{
        password[0].type = "password";
        icon[0].classList.add("open");
        icon[0].classList.remove("closed");
    }
});
// Login light:
icon[1].addEventListener("click", ()=>{
    if(password[1].type == "password"){
        password[1].type = "text";
        icon[1].classList.remove("open1");
        icon[1].classList.add("closed1");
    }else{
        password[1].type = "password";
        icon[1].classList.add("open1");
        icon[1].classList.remove("closed1");
    }
});