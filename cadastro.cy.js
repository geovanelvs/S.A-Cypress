describe("Página de Cadastro - Poke+", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/cadastro.html");
  });

  it("deve exibir todos os elementos do formulário", () => {
    cy.get("#nome").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("#senhaCadastro").should("be.visible");
    cy.get("#confirmarSenha").should("be.visible");
    cy.get("button[type='submit']").should("be.visible");
  });

  it("deve exibir erro ao tentar enviar com campos vazios", () => {
    cy.get("button[type='submit']").click();
    cy.get("#mensagemCadastro").should("be.visible");
  });

  it("deve exibir erro se as senhas forem diferentes", () => {
    cy.get("#nome").type("Geovane");
    cy.get("#email").type("gegeo@gmail.com");
    cy.get("#senhaCadastro").type("123456");
    cy.get("#confirmarSenha").type("987654");

    cy.get("button[type='submit']").click();

    cy.get("#mensagemCadastro")
      .should("be.visible")
      .and("contain", "senhas");
  });

  it("deve bloquear envio com e-mail inválido", () => {
    cy.get("#nome").type("Geovane");
    cy.get("#email").type("emailinvalido");
    cy.get("#senhaCadastro").type("123456");
    cy.get("#confirmarSenha").type("123456");

    cy.get("button[type='submit']").click();

    cy.get("#email").then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });

  it("deve permitir preencher todos os campos corretamente", () => {
    cy.get("#nome").type("Geo Alves");
    cy.get("#email").type("geo@pokemon.com");
    cy.get("#senhaCadastro").type("pikachu123");
    cy.get("#confirmarSenha").type("pikachu123");

    cy.get("button[type='submit']").click();
    cy.get("#mensagemCadastro").should("not.have.text", "");
  });

  it("deve funcionar o botão de cadastro", () => {
    cy.get("#cadastroForm button.btn").click();
  });
});
