// Função para validar o formulário
document.getElementById('form').addEventListener('submit', function(event) {
    // Pega o valor do campo de nome
    var nome = document.getElementById('nome').value;
    
    // Pega o elemento da mensagem de erro
    var errorMessage = document.getElementById('nome-error');
    
    // Verifica se o nome foi preenchido
    if (nome.trim() === '') {
        // Exibe a mensagem de erro
        errorMessage.style.display = 'block';
        
        // Impede o envio do formulário
        event.preventDefault();
    } else {
        // Caso o nome tenha sido preenchido, escondemos a mensagem de erro (se houver)
        errorMessage.style.display = 'none';
    }
});