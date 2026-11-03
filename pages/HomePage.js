// pages/HomePage.js
// Este é o meu Page Object da página Home do BlazeDemo.
// Aqui eu guardo tudo da Home: o endereço, os elementos e as ações.

class HomePage {
  // O constructor roda quando eu crio a página com new HomePage(page).
  // Eu recebo o "page", que é a aba do navegador que o Playwright abriu.
  constructor(page) {
    this.page = page;

    // Elemento que eu vou usar na Home: o link "home" do menu de cima.
    // Na Home do BlazeDemo não existe um link escrito "login". Esse link "home"
    // é o que me leva para a página de Login.
    // O exact: true faz eu pegar só o link com o texto exato "home".
    this.linkHome = page.getByRole('link', { name: 'home', exact: true });
  }

  // Ação: eu abro a Home do site.
  async abrir() {
    await this.page.goto('https://www.blazedemo.com');
  }

  // Ação: eu clico no link "home" para ir para a página de Login.
  async irParaLogin() {
    await this.linkHome.click();
  }
}

// Eu exporto a classe para poder importar ela no arquivo de teste.
module.exports = { HomePage };
