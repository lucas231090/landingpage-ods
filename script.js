// Aguarda até que todo o DOM (estrutura HTML) seja carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os elementos com a classe .toggle-title (os títulos que serão clicáveis)
  const titles = document.querySelectorAll('.toggle-title');

  // Percorre todos os títulos encontrados
  titles.forEach((title) => {
    // Adiciona um evento de clique para cada título
    title.addEventListener('click', function () {
      // Encontra o elemento pai que contém a classe .ods (a seção completa que agrupa título e conteúdo)
      const parent = title.closest('.ods');

      // Dentro desse elemento pai, seleciona o conteúdo que deve ser exibido/ocultado (um parágrafo ou outro elemento)
      const content = parent.querySelector('.ods-content');

      // Seleciona o ícone dentro do título (o "+" ou "-")
      const icon = title.querySelector('.icon');

      // Verifica se o conteúdo já está visível
      if (content.style.display === 'block') {
        // Se estiver visível, oculta o conteúdo
        content.style.display = 'none';

        // Altera o texto do ícone para "+" (indicando que pode ser expandido)
        icon.textContent = '+';
      } else {
        // Se estiver oculto, exibe o conteúdo
        content.style.display = 'block';

        // Altera o texto do ícone para "-" (indicando que pode ser recolhido)
        icon.textContent = '-';
      }
    });
  });
});
