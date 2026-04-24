function verificarSenha() {
  let entrada = document.getElementById("senha").value;

  if (!entrada) return;

  entrada = entrada.trim().toLowerCase().replace(/\s+/g, " ");

  if (entrada === "a cabana") {
    localStorage.setItem("tocarMusica", "sim");
    window.location.href = "inicio.html";
  } else {
    document.getElementById("erro").innerText = "Senha incorreta...";
  }
}

function ir(pagina) {
  window.location.href = pagina;
}

// 🎵 CONTROLE DE MÚSICA
function toggleMusica() {
  const musica = document.getElementById("musica");

  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

// 🎵 TOCAR AUTOMATICAMENTE (depois da senha)
window.onload = function () {
  const musica = document.getElementById("musica");

  if (localStorage.getItem("tocarMusica") === "sim" && musica) {
    musica.play().catch(() => {});
  }
};