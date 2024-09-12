let valorSelecionado = 0;
let valorTotal = 1375; // Valor total disponível
let senhaDigitada = '';

// Atualiza o valor na tela
function atualizarValor() {
    document.getElementById('valor-total').innerText = `R$ ${valorSelecionado.toFixed(2)}`;
}

// Adiciona o valor da nota selecionada
function adicionarNota(valor) {
    if (valorSelecionado + valor <= valorTotal) {
        valorSelecionado += valor;
        atualizarValor();
    } else {
        alert('Valor excede o disponível.');
    }
}

// Solicita um valor diferente
function solicitarOutroValor() {
    document.getElementById('keypad').style.display = 'none';
    document.getElementById('password-screen').style.display = 'flex';
}

// Reseta o valor selecionado
document.getElementById('resetar').addEventListener('click', () => {
    valorSelecionado = 0;
    atualizarValor();
});

// Confirma o saque
document.getElementById('confirmar').addEventListener('click', () => {
    if (valorSelecionado > 0) {
        document.getElementById('screen').style.display = 'none';
        document.getElementById('keypad').style.display = 'none';
        document.getElementById('password-screen').style.display = 'flex';
    } else {
        alert('Selecione um valor para sacar.');
    }
});

// Anula a operação
document.getElementById('anular').addEventListener('click', () => {
    valorSelecionado = 0;
    atualizarValor();
    document.getElementById('screen').style.display = 'block';
    document.getElementById('keypad').style.display = 'flex';
});

// Digita um número na senha
function digitarNumero(numero) {
    senhaDigitada += numero;
    document.getElementById('senha').value = '*'.repeat(senhaDigitada.length);
}

// Finaliza a autenticação
document.getElementById('finalizar').addEventListener('click', () => {
    if (senhaDigitada.length === 4) { // Exemplo para senha de 4 dígitos
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('final-screen').style.display = 'flex';
    } else {
        alert('Senha inválida. Digite 4 dígitos.');
    }
});

// Cancela a autenticação
document.getElementById('cancelar').addEventListener('click', () => {
    senhaDigitada = '';
    document.getElementById('senha').value = '';
});

// Anula a autenticação
document.getElementById('anular-senha').addEventListener('click', () => {
    senhaDigitada = '';
    document.getElementById('senha').value = '';
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('screen').style.display = 'block';
    document.getElementById('keypad').style.display = 'flex';
});

// Confirmação final
document.getElementById('ok').addEventListener('click', () => {
    document.getElementById('final-screen').style.display = 'none';
    document.getElementById('thank-you-screen').style.display = 'flex';
});

// Retornar ao menu principal
document.getElementById('retornar-menu').addEventListener('click', () => {
    document.getElementById('thank-you-screen').style.display = 'none';
    valorSelecionado = 0;
    atualizarValor();
    document.getElementById('screen').style.display = 'block';
    document.getElementById('keypad').style.display = 'flex';
});

// Retirar o dinheiro no local indicado
document.getElementById('ok-retirar').addEventListener('click', () => {
    alert('Retire o dinheiro no local indicado.');
});
