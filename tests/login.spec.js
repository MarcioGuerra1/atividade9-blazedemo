// tests/login.spec.js
// Este é o meu teste de login, usando Page Objects e DDT (Data Driven Testing).

// Eu importo o test e o expect do Playwright.
const { test, expect } = require('@playwright/test');

// Eu importo as minhas duas páginas. O ".." sobe uma pasta, saindo de "tests"
// para chegar em "pages".
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');

// DDT: eu leio a minha massa de dados do arquivo JSON.
// Cada item da lista é um usuário que eu vou testar.
const usuarios = require('../data/usuarios.json');

// Eu percorro a lista de usuários com o for.
// A cada volta, a variável "usuario" é um item do JSON, e o Playwright cria
// um teste separado para ele.
for (const usuario of usuarios) {
  test(`Login - ${usuario.descricao}`, async ({ page }) => {
    // Eu crio um objeto para cada página, passando o "page" para elas.
    const home = new HomePage(page);
    const login = new LoginPage(page);

    // 1. Eu começo abrindo a Home.
    await home.abrir();

    // 2. Eu clico no link de login para ir à página de Login.
    await home.irParaLogin();

    // 3. Eu faço o login com o e-mail e a senha do usuário da vez.
    await login.fazerLogin(usuario.email, usuario.senha);

    // 4. Eu valido que o texto "419 Page Expired" apareceu na tela.
    await expect(login.mensagemPaginaExpirada).toBeVisible();
  });
}
