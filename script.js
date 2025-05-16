document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msgErro = document.getElementById("msgErro");
  
    if (!email || !senha) {
      msgErro.textContent = "Preencha todos os campos.";
      return;
    }
  
    if (!email.includes("@") || email.length < 5) {
      msgErro.textContent = "Email inválido.";
      return;
    }
  
    if (senha.length < 6) {
      msgErro.textContent = "A senha deve ter pelo menos 6 caracteres.";
      return;
    }
  
    // Sucesso (por enquanto só loga no console)
    msgErro.textContent = "";
    console.log("Email:", email);
    console.log("Senha:", senha);
    alert("Login válido! Integração com Firebase vem a seguir.");
  });
  