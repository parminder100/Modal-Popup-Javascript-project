const modalBtn = document.querySelectorAll(".modal-btn");
const modalInfo = document.querySelector(".modal-info");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal-btn");


const showModal = () =>{
    modalInfo.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () =>{
    modalInfo.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < modalBtn.length; i++){
    modalBtn[i].addEventListener('click', showModal)
}

closeModalBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modalInfo.classList.contains('hidden')){
        closeModal();
    }
})