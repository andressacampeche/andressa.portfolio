// FUNÇÃO QUE EXIBE A SEÇÃO SELECIONADA E ESCONDE AS OUTRAS
function exibirConteudo(id) {
    // ESCONTE TODAS AS SEÇÕES
    const secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    // EXIBE A SEÇÃO SELECIONADA
    const secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }
}
// CÓDIGO QUE ESTILIZA O BOTÃO DO MENU CORRESPONDENTE À SEÇÃO SELECIONADA
const links = document.querySelectorAll('.menu ul li a');

links.forEach(link => {
    link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('ativo')); // REMOVE A CLASSE "ATIVO" DOS OUTROS
    link.classList.add('ativo'); // ADICIONA A CLASSE "ATIVO"
    });
});
// FUNÇÃO QUE EXIBE UMA CAIXA DE CONFIRMAÇÃO APÓS CLICAR EM "ENVIAR"
function confirmarEnvio(id){
    const btenviar = document.querySelectorAll('.btenviar');
    if(btenviar){
        alert('Confirmar o envio?');
    }
}
