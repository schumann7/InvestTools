const mediaDividendos = document.getElementById('mediaDividendos');
const retornoEsperado = document.getElementById('retornoEsperado');
const resultado = document.getElementById("resultado");

function limpar() {
    mediaDividendos.value = '';
    retornoEsperado.value = '';
    resultado.style.display = 'none';
}

mediaDividendos.addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2).replace('.', ',');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    e.target.value = value ? `R$ ${value}` : '';
});

retornoEsperado.addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2).replace('.', ',');
    e.target.value = value ? `${value}%` : '';
});

function bazin(media, retorno) {
    return media / (retorno / 100);
};

function printPreco(teto) {
    let precoStr = teto.toFixed(2).replace('.', ',');
    precoStr = precoStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    let precoTeto = `R$ ${precoStr}`;
    document.getElementById('precoTeto').textContent = precoTeto;
    resultado.style.display = 'block';
}

function calcular() {
    if (mediaDividendos.value == '' || retornoEsperado.value == '') {
        alert('Preencha todos os campos!')
    }
    else if (retornoEsperado.value == '0,00%') {
        alert('O retorno esperado não pode ser 0%')
    }
    else {
        let media = parseFloat(mediaDividendos.value.replace(/R\$\s?/g, '').replace(/\./g, '').replace(',', '.'));
        let retorno = parseFloat(retornoEsperado.value.replace('%', '').replace(',', '.'));
        let teto = bazin(media, retorno);
        printPreco(teto);
    };
};