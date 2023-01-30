import React from "react";
import MockRouter from "../../utils/MockRouter";
import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  beforeEach(() => {
    cy.mount(
      <MockRouter>
        <LoginForm />
      </MockRouter>
    );
  });

  it("existence of components", () => {
    cy.get("[data-cy=email]");
    cy.get("[data-cy=password");
    cy.get("[data-cy=login").should("be.disabled");
    cy.get("[data-cy=signup").should("not.be.disabled");
  });

  it("login validations", () => {
    const email = cy.get("[data-cy=email]");
    const password = cy.get("[data-cy=password");
    const loginButton = cy.get("[data-cy=login]");

    loginButton.should("be.disabled");

    email.type("test@test.com");
    password.type("123456");

    loginButton.should("not.be.disabled");
  });
});
