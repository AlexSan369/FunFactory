//Efeito botão Alavanca
let btnOn = document.querySelector('.btn');
let styleApplied = false; //Variável de controle

btnOn.addEventListener('click', function(){
    if (!styleApplied) {
        btnOn.style.top = '50%';
        btnOn.style.backgroundColor = 'red';
        styleApplied = true;
    }
    else {
        btnOn.style.top = '';
        btnOn.style.backgroundColor = '';
        styleApplied = false;
    }
});