const aporteInicial = document.getElementById("aporteInicial");
const aporteMensal = document.getElementById("aporteMensal");
const taxa = document.getElementById("taxa");
const periodo = document.getElementById("periodo");
const resultados = document.getElementById("resultados");

function limpar() {
    aporteInicial.value = '';
    aporteMensal.value = '';
    taxa.value = '';
    periodo.value = '';
    resultados.style.display = 'none';
}

function mask(input) {
    input.addEventListener('input', function (e) {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = (value / 100).toFixed(2).replace('.', ',');
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        e.target.value = value ? `R$ ${value}` : '';
    });
}

mask(document.getElementById('aporteInicial'));
mask(document.getElementById('aporteMensal'));

document.getElementById('taxa').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2).replace('.', ',');
    e.target.value = value ? `${value}%` : '';
});

function jurosCompostos(vInicial, vMensal, cTaxa, cPeriodo) {
    return vInicial * Math.pow(1 + cTaxa / 100, cPeriodo) + vMensal * (Math.pow(1 + cTaxa / 100, cPeriodo) - 1) / (cTaxa / 100);
}

function printJuros(juros, total) {
    let tJuros = juros - total;
    let resultado = juros.toFixed(2).replace('.', ',');
    resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    resultado = `R$ ${resultado}`;
    let rInvestido = total.toFixed(2).replace('.', ',');
    rInvestido = rInvestido.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    rInvestido = `R$ ${rInvestido}`;
    let rJuros = tJuros.toFixed(2).replace('.', ',');
    rJuros = rJuros.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    rJuros = `R$ ${rJuros}`;
    document.getElementById("montante").textContent = resultado;
    document.getElementById("investido").textContent = rInvestido;
    document.getElementById("valorJuros").textContent = rJuros;
    resultados.style.display = 'block';
}

function calcular() {
    if (aporteInicial.value == '' || aporteMensal.value == '' || taxa.value == '' || periodo.value == '') {
        alert('Preencha todos os campos!')
    }
    else if (taxa.value == '0,00%') {
        alert('A taxa de juros não pode ser 0%')
    }
    else {
        let pAporteInicial = parseFloat(aporteInicial.value.replace(/R\$\s?/g, '').replace(/\./g, '').replace(',', '.'));
        let pAporteMensal = parseFloat(aporteMensal.value.replace(/R\$\s?/g, '').replace(/\./g, '').replace(',', '.'));
        let pTaxa = parseFloat(taxa.value.replace('%', '').replace(',', '.'));
        let pPeriodo = parseFloat(periodo.value);
        let total = pAporteInicial + (pAporteMensal * pPeriodo);
        let juros = jurosCompostos(pAporteInicial, pAporteMensal, pTaxa, pPeriodo);
        printJuros(juros, total);
    }
}