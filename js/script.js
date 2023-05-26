// Obtém referências aos elementos do formulário
const servicoSelect = document.getElementById("servico");
const tipoSelect = document.getElementById("tipo");
const higienizacaoOption = document.getElementById("higienizacao-option");

// Ouve o evento "change" no elemento do serviço
servicoSelect.addEventListener("change", function() {
  // Obtém o valor selecionado no serviço
  const servicoSelecionado = servicoSelect.value;

  // Verifica se o serviço selecionado é "Ar Condicionado" ou "Energia Solar"
  if (servicoSelecionado === "ar-condicionado" || servicoSelecionado === "energia-solar") {
    // Exibe a opção de higienização no campo "Tipo de Serviço"
    higienizacaoOption.style.display = "block";
  } else {
    // Oculta e desabilita a opção de higienização no campo "Tipo de Serviço"
    higienizacaoOption.style.display = "none";
    tipoSelect.value = ""; // Limpa a seleção do campo "Tipo de Serviço"
  }

  // Desabilita a opção de higienização em todas as outras opções do campo "Serviço"
  const servicoOptions = servicoSelect.querySelectorAll("option");
  servicoOptions.forEach(function(option) {
    if (option.value !== servicoSelecionado) {
      const tipoOption = option.dataset.tipo;
      if (tipoOption === "higienizacao") {
        option.disabled = true;
      }
    }
  });
});
