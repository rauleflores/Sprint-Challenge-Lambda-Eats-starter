describe("Testing form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Adds text to name input", () => {
    cy.pause();
    cy.get('input[name="name"]')
      .type("Raul Flores")
      .should("have.value", "Raul Flores");

    cy.get("select").select("Large").should("have.value", "lrg");

    cy.get('[type="checkbox"]')
      .check(["pineapple", "pepperoni", "sausage"])
      .should("be.checked");

    cy.get("#textarea")
      .type(`Don't ring doorbell please.`)
      .should(`have.value`, `Don't ring doorbell please.`);

    cy.get("form").submit();
  });
});
