const tabBody = document.querySelectorAll('.kooding_body')
const tabMenu = document.querySelectorAll('.header-menu .sub-nav li.active')
console.log(tabBody, tabMenu);
tabMenu.forEach((item, index) =>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        document.querySelector('.kooding_body.active').classList.remove('active')
        tabBody[index].classList.add('active')
    })
})