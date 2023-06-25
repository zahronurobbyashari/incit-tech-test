/// <reference types="cypress" />

context("QR Code Decoder", () => {
  beforeEach(() => {
    cy.visit("https://m28dev.github.io/qrdecoder/");
  });
  it("with no atachment", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#qrcode").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please select a file.");
    });
    cy.get("button").click();

    /* ==== End Cypress Studio ==== */
  });

  it.only("Calendar Event", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart.png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("Contact Information", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (1).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("Email Address", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (2).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");
    /* ==== End Cypress Studio ==== */
  });

  it.only("Geo Location", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (3).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("Phone Number", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (4).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("Geo Location", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (5).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("SMS", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (6).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("Text", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (7).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("URL", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (7).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });

  it.only("Wifi Network", () => {
    cy.get("#qrcode").selectFile("cypress/fixtures/chart (8).png");
    cy.intercept(
      "POST",
      "https://8vz3fjw7wh.execute-api.ap-northeast-1.amazonaws.com/Prod/"
    ).as("getQR");
    cy.get("button").click();
    cy.wait("@getQR")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304, 201]);
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#decoded").should("not.have.value", "");

    /* ==== End Cypress Studio ==== */
  });
});
