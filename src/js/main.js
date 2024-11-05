
const bureger = document.querySelector('.customers__burger');
const customers = document.querySelector('.customers');
const sidebar = document.querySelector('.sidebar');
const clouse = document.querySelector('.sidebar__clouse');
const sidebarItems = document.querySelectorAll('.sidebar__items');



const burgerMenu = () => {
    bureger.addEventListener('click', () => {
        customers.classList.remove('active');
        sidebar.classList.add('active');
    })

    clouse.addEventListener('click', () => {
        sidebar.classList.remove('active');
        customers.classList.add('active');
    })
}
burgerMenu();



sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('active');
        customers.classList.add('active');
    })
})

