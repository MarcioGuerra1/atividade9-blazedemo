// pages/LoginPage.js
// Este é o meu Page Object da página de Login do BlazeDemo.
// Aqui eu guardo os elementos da tela de login e a ação de fazer login.

class LoginPage {
  // Eu recebo o "page" (a aba do navegador) quando crio com new LoginPage(page).
  constructor(page) {
    this.page = page;

    // Elementos da tela de login que eu vou usar:
    this.campoEmail = page.locator('input[name="email"]');
    this.campoSenha = page.locator('input[name="password"]');
    this.botaoLogin = page.getByRole('button', { name: 'Login' });

    // Texto que aparece depois do login, porque o site de treino não valida
    // o usuário de verdade. Como essa mensagem faz parte da página de Login,
    // eu guardo ela aqui e não na Home.
    this.mensagemPaginaExpirada = page.getByText('419 Page Expired');
  }

  // Ação: eu preencho o e-mail e a senha e clico em Login.
  // Os valores chegam por parâmetro, porque no DDT eu uso dados diferentes
  // em cada execução.
  async fazerLogin(email, senha) {
    await this.campoEmail.fill(email);
    await this.campoSenha.fill(senha);
    await this.botaoLogin.click();
  }
}

// Eu exporto a classe para poder importar ela no arquivo de teste.
module.exports = { LoginPage };
