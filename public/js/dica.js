fetch("/api/dicas")
      .then(res => res.json())
      .then(dicas => {
        const lista = document.getElementById("lista-dicas");
        dicas.forEach(dica => {
          const item = document.createElement("li");
          item.textContent = dica;
          lista.appendChild(item);
        });
      });