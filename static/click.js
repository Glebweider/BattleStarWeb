const doq = document.querySelector("#dow");
const dowmenu = document.querySelector("#domenu");
const menu = document.querySelector("#menu");
const menubtn = document.querySelector("#menubtn");
doq.onclick = () => {
    dowmenu.classList.toggle("styles_actives__caofr")
},
menubtn.onclick = () => {
    menu.classList.toggle("styles_menu_active__S_Ndc"),
    menubtn.classList.toggle('styles_open__1L5yL')
}