fetch("/api/ajuda")
      .then(res => res.json())
      .then(telefones => {
        const container = document.getElementById("botoes-ajuda");
        for (let nome in telefones) {
          const numero = telefones[nome];
          const botao = document.createElement("a");
          botao.href = `tel:${numero}`;
          botao.className = "botao";
          botao.textContent = `${nome.replace(/_/g, " ").toUpperCase()} - ${numero}`;
          container.appendChild(botao);
        }
      });