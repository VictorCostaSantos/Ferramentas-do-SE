document.addEventListener("DOMContentLoaded", () => {
    fetch("cards.json")
      .then(response => response.json())
      .then(data => {
        console.log("Dados carregados:", data); // Verificar a estrutura no console
  
        const main = document.querySelector("main");
  
        data.forEach(categoriaObj => {
          const { categoria, links } = categoriaObj;
  
          // Criar seção
          const section = document.createElement("section");
          section.classList.add("container");
  
          // Criar título da categoria
          const titulo = document.createElement("h2");
          titulo.id = categoria;
          titulo.textContent = categoria;
  
          // Criar mural (div que contém os cards)
          const mural = document.createElement("div");
          mural.classList.add("Mural");
  
          // Criar cards dinamicamente
          links.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card_container");
  
            const link = document.createElement("a");
            link.href = item.link;
            link.target = "_blank";
  
            const cardContent = document.createElement("div");
  
            const img = document.createElement("img");
            img.src = item.imagem;
            img.alt = `Imagem de ${item.titulo}`;
  
            const tituloCard = document.createElement("h3");
            tituloCard.textContent = item.titulo;
  
            const descricao = document.createElement("p");
            descricao.textContent = item.descricao;
  
            // Montar estrutura
            cardContent.appendChild(img);
            cardContent.appendChild(tituloCard);
            cardContent.appendChild(descricao);
            link.appendChild(cardContent);
            card.appendChild(link);
            mural.appendChild(card);
          });
  
          // Adicionar elementos à seção
          section.appendChild(titulo);
          section.appendChild(mural);
          main.appendChild(section);
        });
      })
      .catch(error => console.error("Erro ao carregar os dados:", error));
  });
  