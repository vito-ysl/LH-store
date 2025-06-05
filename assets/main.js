
document.addEventListener('DOMContentLoaded', function() {
    //vareáveis 
    var likeButton = document.getElementById('likeButton');        // Botão de curtir
    var likeCount = document.getElementById('likeCount');          // Contador de curtidas
    var commentForm = document.getElementById('commentForm');       // Formulário de comentários
    var commentsList = document.getElementById('commentsList');     // Lista de comentários

    let likes = 0;

    likeButton.onclick = function() {
        likes = likes + 1;                           // Incrementa contador
        likeCount.textContent = likes;               // Atualiza texto do contador
        likeButton.classList.add('liked');           // Adiciona classe para animação
        setTimeout(function() {
            likeButton.classList.remove('liked');     // Remove classe após 300ms
        }, 300);
    };

   
    commentForm.onsubmit = function(e) {
        e.preventDefault();                          // Previne recarregamento da página

        // Captura valores
        var name = document.getElementById('name').value;
        var comment = document.getElementById('comment').value;

        // Validação dos campos
        if (name === '' || comment === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Cria novo elemento de comentário
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = '<h3>' + name + '</h3><p>' + comment + '</p>';

        // Adiciona comentário à lista e limpa formulário
        commentsList.appendChild(commentDiv);
        commentForm.reset();

        // Remove fundo transparente se houver comentários
        if (commentsList.childNodes.length > 0) {
            commentsList.style.background = '';
        }
    };

    // Remove fundo da lista se não houver comentários
    if (commentsList && commentsList.childNodes.length === 0) {
        commentsList.style.background = 'none';
    }
});
