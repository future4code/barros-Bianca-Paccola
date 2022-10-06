// Sistema de login

// E-mail e senha, ambas do tipo string.
// Frases de sucesso e erro para cada caso.
// Validações: E-mail deve possuir o caractere especial @ e a senha precisa ter no mínimo 6 caracteres.

const contas = [
  {
    email: "astrodev@labenu.com",
    password: "abc123",
  },
  {
    email: "bananinha@gmail.com",
    password: "bananinha",
  },
  {
    email: "bianca.paccola@hotmail.com",
    password: "123456"
  }
];

function login(email, password) {

  if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) === false) {
    return "Formato de e-mail inválido";
  } else if (/^.{6,}$/.test(password) === false) {
    return "Senha deve possuir no mínimo 6 caracteres";
  } else {
    const user = contas.filter((item) => item.email === email);

    if (user.length > 0 && user[0].password === password) {
      return "Login bem-sucedido";
    } else {
      return "E-mail ou senha incorretos";
    }
  }
}

console.log(login("bianca.paccola@hotmail.com", "123456"));
