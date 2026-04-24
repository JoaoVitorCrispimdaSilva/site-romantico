// ========================
// 🔐 VERIFICAR SENHA
// ========================
function verificarSenha() {
  let entrada = document.getElementById("senha").value;

  if (!entrada) return;

  entrada = entrada.trim().toLowerCase().replace(/\s+/g, " ");

  if (entrada === "a cabana") {
    window.location.href = "inicio.html";
  } else {
    document.getElementById("erro").innerText = "Senha incorreta...";
  }
}

// ========================
// 🌐 NAVEGAÇÃO
// ========================
function ir(pagina) {
  window.location.href = pagina;
}