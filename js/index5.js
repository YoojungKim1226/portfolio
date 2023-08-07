/* add filtering 필터링 기능 더함 */
const menuBtn = document.querySelector('.header_toggle');   
const nav = document.querySelector('.header_nav');     
menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('on')

})

/* header_menu_item */


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



/* 필터링 처리 부분 */


  // init Isotope
  let $projects=$('.projects').isotope({    //필터링 될 아이템의 전체 wrapper
    itemSelector:'.project', //필터링될 아이템의 선택자
    layoutMode :'fitRows', //fitrows를 쓰게 되면 각 item의 너비를 지정해야 한다.
  });


  //filter items on button click
    $('.categories').on('click', 'button', function(){
        $('categories button').removeClass('selected');
        $(this).addClass('selected');
        var filterValue = $(this).attr('data-filter');
        $projects.isotope({filter:filterValue});
    });