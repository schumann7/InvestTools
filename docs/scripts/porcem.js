const resultado1 = document.getElementById('resultado1');
const resultado2 = document.getElementById('resultado2');
const resultado3 = document.getElementById('resultado3');
const resultado4 = document.getElementById('resultado4');

function calcular1() {
    let percentual = document.getElementById('percentual');
    let valor = document.getElementById('valor');
    if (percentual.value == '' || valor.value == '') {
        alert("Preencha todos os campos!")
        return;
    }
    else if (valor.value == 0) {
        alert("O valor não pode ser igual a 0");
        return;
    }
    percentual = Number(percentual.value);
    valor = Number(valor.value);
    if (valor < 0 || percentual < 0) {
        alert('Insira um valor maior que 0');
    }
    else {
        let resultado = (percentual / 100) * valor;
        resultado = resultado.toFixed(2).replace('.', ',');
        resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        resultado1.textContent = resultado;
    }
}

function calcular2() {
    let valor1 = document.getElementById('valor1');
    let percentual1 = document.getElementById('percentual1');
    if (percentual1.value == '' || valor1.value == '') {
        alert("Preencha todos os campos!")
        return;
    }
    else if (percentual1.value == 0) {
        alert("O valor não pode ser igual a 0")
        return;
    }
    percentual1 = Number(percentual1.value);
    valor1 = Number(valor1.value);
    if (valor1 < 0 || percentual1 < 0) {
        alert('Insira um valor maior que 0');
    }
    else {
        let resultado = (valor1 / percentual1) * 100;
        resultado = resultado.toFixed(2).replace('.', ',');
        resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        resultado2.textContent = `${resultado}%`;
    }
}

function calcular3() {
    let valorInicial = document.getElementById('valorInicial');
    let valorFinal = document.getElementById('valorFinal');
    if (valorInicial.value == '' || valorFinal.value == '') {
        alert('Preencha todos os campos!');
        return;
    }
    else if (valorInicial.value == 0 || valorFinal.value == 0) {
        alert('O valor não pode ser igual a 0');
        return;
    }
    valorInicial = Number(valorInicial.value);
    valorFinal = Number(valorFinal.value);
    if (valorInicial < 0 || valorFinal < 0) {
        alert('Insira um valor maior que 0');
    }
    else if (valorInicial > valorFinal) {
        alert('O valor inicial não pode ser maior que o valor final');
    }
    else {
        let resultado = ((valorFinal - valorInicial) / valorInicial) * 100;
        resultado = resultado.toFixed(2).replace('.', ',');
        resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        resultado3.textContent = `${resultado}%`;
    }
}

function calcular4() {
    let valorInicial1 = document.getElementById('valorInicial1');
    let valorFinal1 = document.getElementById('valorFinal1');
    if (valorInicial1.value == '' || valorFinal1.value == '') {
        alert('Preencha todos os campos!')
        return;
    }
    valorInicial1 = Number(valorInicial1.value);
    valorFinal1 = Number(valorFinal1.value);
    if (valorInicial1 <= 0) {
        alert('O valor não pode ser igual ou menor que 0')
    }
    else if (valorFinal1 < 0) {
        alert('Insira um valor maior ou igual a 0');
    }
    else if (valorFinal1 > valorInicial1) {
        alert('O valor final não pode ser maior que o valor inicial');
    }
    else {
        let resultado = ((valorInicial1 - valorFinal1) / valorInicial1) * 100;
        resultado = resultado.toFixed(2).replace('.', ',');
        resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        resultado4.textContent = `${resultado}%`;
    }
}