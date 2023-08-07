/*  */
const menuBtn = document.querySelector('.header_toggle');    //햄버거버튼을 선택했다.
const nav = document.querySelector('.header_nav');      //대상요소(네비메뉴) 선택
menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('on')
    //(cf) querySelector에서는 지금 불러올게 class인지 id인지 모르므로 .이나 #를 붙여야 한다.
        ////하지만 classList는 명확히 class를 불러올 것이므로 .를 붙이면 안된다.
})

/* header_menu_item */
// header_menu 클릭하면 (event 위임) item이 active 상태가 바뀌게

const menuBox = document.querySelector('.header_menu');
const menu = document.querySelectorAll('.header_menu_item');

const menuUpdate = (selectA) =>{
    menu.forEach((a)=>{
        a.classList.remove('active')
    })
    selectA.classList.add('active')
}


menuBox.addEventListener('click',(e)=>{
    const selectMenu = e.target;
    console.log(selectMenu);
    menuUpdate(selectMenu);
})