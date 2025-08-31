// Função para exibir a seção selecionada e esconder as outras
function exibirConteudo(id) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    // Exibe a seção selecionada
    const secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }
}