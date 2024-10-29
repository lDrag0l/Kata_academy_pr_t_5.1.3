const button = document.querySelector('.Repair-section_button')
const container = document.querySelector('.Repair-section_container')

button.addEventListener('click', function () {

    if (container.style.height != "100%") {
        container.style.height = "100%";
        button.classList.add('Repair-section_button__rotate')
        button.textContent = 'Скрыть'
    }
    else {
        button.classList.remove('Repair-section_button__rotate')
        container.style.height = "160px"
        button.textContent = 'Показать все'
    }
})

const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




