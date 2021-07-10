import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButoon = document.querySelector('.modal button');

//Pegar todos os botões que exitem com a class check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach( button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})

// Quando o botão delete for clicado, abre a modal 
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach( button =>{
    //adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, false));
})

//If ckeck = false : change the text 
function handleClick(event, check = true){
    //Não adiciona nada a URL
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir";
    const slug = check ? "check" : "delete";
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()}?`
    modalButoon.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButoon.classList.remove('red') : modalButoon.classList.add('red');

    modal.open();
}



