describe("Testing form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Adds text to name input", () => {
    cy.get('input[name="name"]')
      .type("Raul Flores")
      .should("have.value", "Raul Flores");
  });
  it("Picks a pizza size", () => {
    cy.get("select").select("Large").should("have.value", "lrg");
  });
  it("Selects multiple toppings", () => {
    cy.get('[type="checkbox"]').check(["pineapple", "pepperoni", "sausage"]);
  });
  it("Adds special instructions", () => {
    cy.get("#textarea")
      .type(`Don't ring doorbell please.`)
      .should(`have.value`, `Don't ring doorbell please.`);
  });
  it("Submits the form", () => {
    cy.get("form").submit();
  });
});
