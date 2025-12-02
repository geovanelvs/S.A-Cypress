describe("Página Inicial - Poke+", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("deve exibir a navbar com logo e botões", () => {
    cy.get(".logo").should("be.visible").and("contain", "Poke+");
    cy.contains("Login").should("be.visible");
    cy.contains("Cadastrar").should("be.visible");
  });

  it("deve exibir o título principal da página", () => {
    cy.contains("Feito para quem ama aprender").should("be.visible");
  });

  it("deve exibir o botão 'Comece sua jornada'", () => {
    cy.contains("Comece sua jornada").should("be.visible");
  });

  it("deve exibir a imagem principal da home", () => {
    cy.get(".hero-animation img")
      .should("be.visible")
      .and("have.attr", "src", "poke.jpg");
  });

  it("deve ter a seção de informações", () => {
    cy.contains("Descubra o mundo dos Pokémons").should("be.visible");
    cy.contains("Explore informações").should("be.visible");
  });

  it("deve navegar para a página de cadastro ao clicar em 'Comece sua jornada'", () => {
    cy.contains("Comece sua jornada").click();
    cy.url().should("include", "cadastro.html");
  });

  it("deve navegar para login ao clicar no botão 'Login'", () => {
    cy.contains("Login").click();
    cy.url().should("include", "login.html");
  });

  it("deve navegar para cadastro ao clicar no botão 'Cadastrar'", () => {
    cy.contains("Cadastrar").click();
    cy.url().should("include", "cadastro.html");
  });
});
