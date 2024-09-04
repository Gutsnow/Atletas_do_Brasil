document.addEventListener('DOMContentLoaded', function() {
    const btnMasculinos = document.querySelector('.genero button:nth-child(1)');
    const btnFemininas = document.querySelector('.genero button:nth-child(3)');
    const todos = document.getElementById('todos')
    const resultados = document.querySelectorAll('.item-resultado');

    // Função para mostrar ou esconder os atletas com base no gênero
    function filtrarAtletas(genero) {
        resultados.forEach(resultado => {
            if (resultado.getAttribute('data-sexo') === genero || genero === "todos") {
                resultado.style.display = 'block';
            } else {
                resultado.style.display = 'none';
            }
        });
    }

    // Event listeners para os botões
    btnMasculinos.addEventListener('click', function() {
        filtrarAtletas('masculino');
    });

    btnFemininas.addEventListener('click', function() {
        filtrarAtletas('feminino');
    });


    todos.addEventListener('click', function() {
        filtrarAtletas ('todos');
    });
});