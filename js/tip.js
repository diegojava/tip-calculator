total = document.getElementById('total');
personas = document.getElementById('personas');

diez = document.getElementById('10-100').addEventListener('click', () => {
    setTotal(10)
});

quince = document.getElementById('15-100').addEventListener('click', () => {
    setTotal(15)
});

veinte = document.getElementById('20-100').addEventListener('click', () => {
    setTotal(20)
});

treinta = document.getElementById('30-100').addEventListener('click', () => {
    setTotal(30)
});

propina = document.getElementById('propina');
aPagar = document.getElementById('a-pagar');

let totalPropinas = 0;

function calculateTips(porcentaje) {
    return (total.value / personas.value) * (porcentaje / 100);
    
}

function calculateTotal(porcentaje) {
    return parseFloat(total.value) + (calculateTips(porcentaje) * personas.value)
}

function setTotal(porcentaje) {
    propina.innerHTML = `Cada persona deberá aportar $${calculateTips(porcentaje).toFixed(2)} para la propina`;
    aPagar.innerHTML = `Total a pagar con propina: $${calculateTotal(porcentaje).toFixed(2)}`;
}

