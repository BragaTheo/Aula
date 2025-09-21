function verificarResposta(num, valor = null) {
  let curiosidade = document.getElementById("curiosidadeTexto");

  if (num === 1) {
    if (valor === "solar") {
      document.getElementById("feedback1").innerText = "✅ Correto! O CdSe é muito usado em painéis solares.";
      curiosidade.innerText = "Curiosidade: O CdSe é um semicondutor usado em células fotovoltaicas para converter luz em energia elétrica.";
      document.getElementById("questao2").classList.remove("escondido");
    } else {
      document.getElementById("feedback1").innerText = "❌ Resposta incorreta. Tente novamente.";
    }
  }

  if (num === 2) {
    let resposta2 = document.querySelector('input[name="q2"]:checked');
    if (resposta2 && resposta2.value === "fluorescencia") {
      document.getElementById("feedback2").innerText = "✅ Correto! O CdSe é fluorescente em nanocristais.";
      curiosidade.innerText = "Curiosidade: Os pontos quânticos de CdSe brilham em diferentes cores dependendo do seu tamanho.";
      document.getElementById("questao3").classList.remove("escondido");
    } else {
      document.getElementById("feedback2").innerText = "❌ Resposta incorreta. Tente novamente.";
    }
  }

  if (num === 3) {
    let resposta3 = document.getElementById("resposta3").value;
    if (resposta3 === "toxico") {
      document.getElementById("feedback3").innerText = "✅ Correto! O CdSe é tóxico se manuseado incorretamente.";
      curiosidade.innerText = "Curiosidade: Apesar de tóxico, o CdSe é amplamente estudado para aplicações em nanociência e eletrônica.";
    } else {
      document.getElementById("feedback3").innerText = "❌ Resposta incorreta. Tente novamente.";
    }
  }
}
