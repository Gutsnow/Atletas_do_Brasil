document.addEventListener('DOMContentLoaded', function() {
  const btnMasculinos = document.querySelector('.genero button:nth-child(1)');
  const btnFemininas = document.querySelector('.genero button:nth-child(3)');
  const todos = document.getElementById('todos');
  const botPesquisa = document.getElementById("botPesquisa");
  const section = document.getElementById('section');

  let generoSelecionado = 'todos'; // Variável para armazenar o gênero selecionado
  const dados = [
    {
      titulo: "Rebeca Andrade",
      descricao: "Rebeca Andrade é uma das maiores ginastas brasileiras de todos os tempos. Com sua força, elegância e determinação, ela conquistou o coração dos brasileiros e se tornou um verdadeiro ícone do esporte nacional.",
      link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
      sexo: "feminino"
    },
    {
      titulo: "Rayssa Leal",
      descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
      link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
      sexo: "feminino"
    },
    {
      titulo: "Beatriz Souza",
      descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos, trazendo orgulho para o país. Sua força e técnica a colocaram entre as melhores do mundo.",
      link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
      sexo: "feminino"
    },
    {
      titulo: "Esquiva Falcão",
      descricao: "Esquiva Falcão é um boxeador brasileiro que conquistou o título mundial dos pesos galos. Conhecido por sua agilidade e precisão nos golpes, ele é um dos maiores nomes do boxe brasileiro.",
      link: "https://pt.wikipedia.org/wiki/Esquiva_Falcão",
      sexo: "masculino"
    },
    {
      titulo: "Gabriel Medina",
      descricao: "Gabriel Medina é um dos maiores surfistas brasileiros de todos os tempos. Com seu estilo inovador e performances incríveis, ele já conquistou diversos títulos mundiais e inspirou uma nova geração de surfistas.",
      link: "https://pt.wikipedia.org/wiki/Gabriel_Medina",
      sexo: "masculino"
    },
    {
      titulo: "Marcus D'Almeida",
      descricao: "Marcus D'Almeida é um arqueiro brasileiro que se destacou em competições internacionais. Sua precisão e concentração o levaram a conquistar diversas medalhas e representar o Brasil em grandes eventos esportivos.",
      link: "https://www.cob.org.br/atletas/marcus-dalmeida",
      sexo: "masculino"
    }
  ];

  // Função para exibir atletas na seção com base na pesquisa e no filtro de gênero
  function exibirAtletas() {
    // Limpar conteúdo anterior
    section.innerHTML = '';

    // Obter valor do campo de pesquisa
    const pesquisar = document.getElementById("campoPesquisa").value.toLowerCase();

    // Filtrar atletas por pesquisa e por gênero
    const atletasFiltrados = dados.filter(atleta => {
      const tituloMatch = atleta.titulo.toLowerCase().includes(pesquisar);
      const generoMatch = generoSelecionado === 'todos' || atleta.sexo === generoSelecionado;
      return tituloMatch && generoMatch;
    });

    // Verificar se há resultados
    if (atletasFiltrados.length > 0) {
      // Adicionando os atletas filtrados na seção
      atletasFiltrados.forEach(atleta => {
        section.innerHTML += `
          <div class="item-resultado" data-sexo="${atleta.sexo}">
            <h2>
              <a href="${atleta.link}" target="_blank">${atleta.titulo}</a>
            </h2>
            <p class="descricao-meta">${atleta.descricao}</p>
            <a href="${atleta.link}" target="_blank">Mais informações</a>
          </div>`;
      });
    } else {
      // Se não houver resultados, exibir uma mensagem
      section.innerHTML = `<p>Nenhum atleta encontrado para "${pesquisar}".</p>`;
    }
  }

  // Função para atualizar o gênero selecionado e exibir os atletas filtrados
  function filtrarAtletasPorGenero(genero) {
    generoSelecionado = genero;
    exibirAtletas(); // Atualiza os atletas com o filtro de gênero
  }

  // Event listener para o botão de pesquisa
  botPesquisa.addEventListener("click", exibirAtletas);

  // Event listeners para os botões de filtragem de gênero
  btnMasculinos.addEventListener('click', function() {
    filtrarAtletasPorGenero('masculino');
  });

  btnFemininas.addEventListener('click', function() {
    filtrarAtletasPorGenero('feminino');
  });

  todos.addEventListener('click', function() {
    filtrarAtletasPorGenero('todos');
  });

  // Exibir todos os atletas por padrão ao carregar a página
  exibirAtletas();
});
