const lpaInput = document.getElementById('lpaInput');
const vpaInput = document.getElementById('vpaInput');
const resultado = document.getElementById("resultado");

function limpar() {
    lpaInput.value = '';
    vpaInput.value = '';
    resultado.style.display = 'none';
}

function mask(input) {
    input.addEventListener('input', function (e) {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = (value / 100).toFixed(2).replace('.', ',');
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        e.target.value = value;
    });
};

mask(lpaInput);
mask(vpaInput);

function graham(lpa, vpa) {
    return Math.sqrt(22.5 * lpa * vpa)
};

function printJusto(justo) {
    let precoJusto = `R$ ${justo.toFixed(2).replace('.', ',')}`;
    document.getElementById('precoJusto').textContent = precoJusto;
    resultado.style.display = 'block';
}

function calcular() {
    if (lpaInput.value == '' || vpaInput.value == '') {
        alert('Preencha todos os campos!')
    }
    else {
        let lpa = parseFloat(lpaInput.value.replace('.', '').replace(',', '.'));
        let vpa = parseFloat(vpaInput.value.replace('.', '').replace(',', '.'));
        let justo = graham(lpa, vpa);
        printJusto(justo);
    };
};