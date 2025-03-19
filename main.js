// Código da barra lateral versão mobile

const barraList = document.querySelector('.lista-lateral .bi-list');
const barraClose = document.querySelector('.barra-lateral .bi-x-lg');
const barraLateral = document.querySelector('.container-barra-lateral');

barraList.addEventListener('click', () => {
    barraLateral.classList.toggle('ativo');
});

barraClose.addEventListener('click', () => {
    barraLateral.classList.toggle('ativo');
});

//-----------------------------------------------------------------------------------------------