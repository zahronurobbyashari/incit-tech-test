/// <reference types="cypress" />

describe("QR Code Generator", () => {
  context("Calendar Event", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Calendar event");
    });
    it("All Day Events", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#gwt-uid-1").check();
      cy.get("#fullDayOnlyInfo1 > .firstColumn").should("not.be.visible");
      cy.get("#fullDayOnlyInfo2 > .firstColumn").should("not.be.visible");
      cy.get("#fullDayOnlyInfo3 > .firstColumn").should("not.be.visible");
      cy.get("#fullDayOnlyInfo4 > .firstColumn").should("not.be.visible");
      cy.get("#gwt-uid-1").should("be.checked");
      cy.get("#gwt-uid-1").uncheck();
      cy.get("#gwt-uid-1").should("not.be.checked");
      cy.get("#fullDayOnlyInfo1 > .firstColumn").should("be.visible");
      cy.get("#fullDayOnlyInfo2 > .firstColumn").should("be.visible");
      cy.get("#fullDayOnlyInfo3 > .firstColumn").should("be.visible");
      cy.get("#fullDayOnlyInfo4 > .firstColumn").should("be.visible");
      /* ==== End Cypress Studio ==== */
    });

    it("Event Title", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      /* ==== End Cypress Studio ==== */
    });

    // it("Start Date", function () {
    //   cy.get("#gwt-uid-1").check();

    //   // auto fill by today
    //   cy.get(
    //     ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(5) > :nth-child(6) > .datePickerDay'
    //   );
    //   cy.get(
    //     ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(5) > :nth-child(6) > .datePickerDay'
    //   ).should("have.class", "datePickerDayIsToday");
    //   cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").type("Test");
    //   cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox").type("Malang");
    //   cy.get(":nth-child(10) > .secondColumn > .gwt-TextBox").type("Deskripsi");
    //   cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
    //   cy.get(".gwt-Button").click();
    //   cy.wait("@getQR")
    //     .its("response.statusCode")
    //     .should("be.oneOf", [200, 304, 201]);

    //   cy.get("#rawtextresult").should("be.visible");
    //   cy.get("#urlresult").should("be.visible");
    //   cy.get("#downloadText").should("be.visible");

    //   // Choose date
    //   /* ==== Generated with Cypress Studio ==== */
    //   cy.get(
    //     ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(5) > :nth-child(5) > .datePickerDay'
    //   ).click();
    //   cy.get(
    //     ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(5) > :nth-child(5) > .datePickerDay'
    //   ).should("have.attr", "aria-selected", "true");
    //   cy.get(
    //     ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(5) > :nth-child(5) > .datePickerDay'
    //   ).should("have.class", "datePickerDayIsValueAndHighlighted");
    //   /* ==== End Cypress Studio ==== */
    //   cy.get(".gwt-Button").click();
    //   cy.wait("@getQR")
    //     .its("response.statusCode")
    //     .should("be.oneOf", [200, 304, 201]);
    //   cy.get("#rawtextresult").should("be.visible");
    //   cy.get("#urlresult").should("be.visible");
    //   cy.get("#downloadText").should("be.visible");

    //   // Previous/Next Month
    //   /* ==== Generated with Cypress Studio ==== */
    //   cy.get(
    //     ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(1) > [align="left"] > .datePickerMonthSelector > tbody > tr > :nth-child(3) > .datePickerNextButton > .html-face'
    //   ).click();
    //   cy.get(
    //     ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(1) > [align="left"] > .datePickerMonthSelector > tbody > tr > :nth-child(1) > .datePickerPreviousButton > .html-face'
    //   ).click();
    //   /* ==== End Cypress Studio ==== */
    // });

    // it("End Date", function () {
    //   cy.get("#gwt-uid-1").check();

    //   // auto fill by today
    //   cy.get(
    //     ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(5) > :nth-child(6) > .datePickerDay'
    //   );
    //   cy.get(
    //     ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(5) > :nth-child(6) > .datePickerDay'
    //   ).should("have.class", "datePickerDayIsToday");
    //   cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").type("Test");
    //   cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox").type("Malang");
    //   cy.get(":nth-child(10) > .secondColumn > .gwt-TextBox").type("Deskripsi");
    //   cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
    //   cy.get(".gwt-Button").click();
    //   cy.wait("@getQR")
    //     .its("response.statusCode")
    //     .should("be.oneOf", [200, 504, 201]);

    //   cy.get("#rawtextresult").should("be.visible");
    //   cy.get("#urlresult").should("be.visible");
    //   cy.get("#downloadText").should("be.visible");

    //   // Choose date
    //   /* ==== Generated with Cypress Studio ==== */
    //   cy.get(
    //     ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(6) > :nth-child(5) > .datePickerDay'
    //   ).click();
    //   cy.get(
    //     ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(6) > :nth-child(5) > .datePickerDay'
    //   ).should("have.attr", "aria-selected", "true");
    //   cy.get(
    //     ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(6) > :nth-child(5) > .datePickerDay'
    //   ).should("have.class", "datePickerDayIsValueAndHighlighted");
    //   /* ==== End Cypress Studio ==== */
    //   cy.get(".gwt-Button").click();
    //   cy.wait("@getQR")
    //     .its("response.statusCode")
    //     .should("be.oneOf", [200, 504, 201]);
    //   cy.get("#rawtextresult").should("be.visible");
    //   cy.get("#urlresult").should("be.visible");
    //   cy.get("#downloadText").should("be.visible");

    //   // Previous/Next Month
    //   /* ==== Generated with Cypress Studio ==== */
    //   cy.get(
    //     ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(1) > [align="left"] > .datePickerMonthSelector > tbody > tr > :nth-child(3) > .datePickerNextButton > .html-face'
    //   ).click();
    //   cy.get(
    //     ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(1) > [align="left"] > .datePickerMonthSelector > tbody > tr > :nth-child(1) > .datePickerPreviousButton > .html-face'
    //   ).click();
    //   /* ==== End Cypress Studio ==== */
    // });

    it("Start/End Date", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").clear("T");
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").type("Test");
      cy.get(
        ':nth-child(3) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(4) > :nth-child(4) > .datePickerDay'
      ).click();
      cy.get(
        ':nth-child(5) > .secondColumn > .gwt-DatePicker > :nth-child(1) > :nth-child(2) > [align="left"] > .datePickerDays > tbody > :nth-child(2) > :nth-child(4) > .datePickerDay'
      ).click();
      cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox").clear("M");
      cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox").type("Malang");
      cy.get(":nth-child(10) > .secondColumn > .gwt-TextBox").clear("D");
      cy.get(":nth-child(10) > .secondColumn > .gwt-TextBox").type("Des");
      cy.get(":nth-child(5) > :nth-child(1) > table").click();
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Ending date/time cannot be before starting date/time."
      );
      /* ==== End Cypress Studio ==== */
    });

    it("Start Time", () => {
      const d = new Date();
      const hour =
        d.getHours().toString().length === 1
          ? `0${d.getHours()}`
          : d.getHours();
      const minute =
        d.getMinutes().toString().length === 1
          ? `0${d.getMinutes()}`
          : d.getMinutes();
      const start_time = `${hour}${minute}`;
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").type("Test");

      // auto filled by current time
      cy.get("#fullDayOnlyInfo1 > .secondColumn > .gwt-TextBox").should(
        "have.value",
        `${start_time}`
      );

      // special char
      cy.get("#fullDayOnlyInfo1 > .secondColumn > .gwt-TextBox")
        .click()
        .clear()
        .type('!@#$%^&*()_+{}|:"?><');
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "Invalid time");
      // alphabet
      cy.get("#fullDayOnlyInfo1 > .secondColumn > .gwt-TextBox").click();
      cy.get("#fullDayOnlyInfo1 > .secondColumn > .gwt-TextBox")
        .clear()
        .type("wqeiuhndsaj,kndnsmanm,a");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("have.text", "Invalid time");
      cy.get("#errorMessageID").should("be.visible");
      // invalid format
      cy.get("#fullDayOnlyInfo1").click();
      cy.get("#fullDayOnlyInfo1 > .secondColumn > .gwt-TextBox")
        .clear()
        .type("18:23");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "Invalid time");
    });

    it("End Time", () => {
      const d = new Date();
      const h = d.getHours() + 1;
      const hour = h.toString().length === 1 ? `0${h}` : h;
      const minute =
        d.getMinutes().toString().length === 1
          ? `0${d.getMinutes()}`
          : d.getMinutes();
      const end_time = `${hour}${minute}`;
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").type("Test");

      // auto filled by current time
      cy.get("#fullDayOnlyInfo2 > .secondColumn > .gwt-TextBox").should(
        "have.value",
        `${end_time}`
      );

      // special char
      cy.get("#fullDayOnlyInfo2 > .secondColumn > .gwt-TextBox")
        .click()
        .clear()
        .type('!@#$%^&*()_+{}|:"?><');
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "Invalid time");

      // alphabet
      cy.get("#fullDayOnlyInfo2 > .secondColumn > .gwt-TextBox").click();
      cy.get("#fullDayOnlyInfo2 > .secondColumn > .gwt-TextBox")
        .clear()
        .type("wqeiuhndsaj,kndnsmanm,a");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("have.text", "Invalid time");
      cy.get("#errorMessageID").should("be.visible");

      // invalid format
      cy.get("#fullDayOnlyInfo2").click();
      cy.get("#fullDayOnlyInfo2 > .secondColumn > .gwt-TextBox")
        .clear()
        .type("18:23");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "Invalid time");
    });

    it("Generate QR Code", () => {
      cy.get("#gwt-uid-1").check();
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").type("Test");
      cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox").type("Maslang");
      cy.get(":nth-child(10) > .secondColumn > .gwt-TextBox").type(
        "Deksriopsi"
      );
      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("Contact Information", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Contact information");
    });
    it("Name", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").clear().type("c");
      cy.get(":nth-child(3) > .secondColumn > .gwt-TextBox").clear().type("c");
      cy.get(":nth-child(4) > .secondColumn > .gwt-TextBox").clear().type("c");
      cy.get(":nth-child(4) > .secondColumn > .gwt-TextBox").clear().type("09");
      cy.get(":nth-child(5) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("csa@gmail.com");
      cy.get(":nth-child(6) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("dsad");
      cy.get(":nth-child(8) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("https://oke");
      cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("dsadsa");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Name must be at least 1 character."
      );
      /* ==== End Cypress Studio ==== */
    });

    it("Email", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("rudi baha");
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("company");
      cy.get(":nth-child(3) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("title");
      cy.get(":nth-child(4) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("089182777");
      cy.get(":nth-child(5) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("john#sleman.com");
      cy.get(":nth-child(6) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("address");
      cy.get(":nth-child(8) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("https://");
      cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("oke");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "Email is not valid.");
      /* ==== End Cypress Studio ==== */
    });
    it("Encoding", () => {
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("rudi baha");
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("company");
      cy.get(":nth-child(3) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("title");
      cy.get(":nth-child(4) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("089182777");
      cy.get(":nth-child(5) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("john@sleman.com");
      cy.get(":nth-child(6) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("address");
      cy.get(":nth-child(8) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("https://");
      cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("oke");
      cy.get(":nth-child(10) > .secondColumn > .gwt-ListBox").select("vCard");
      cy.get(".gwt-Button").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#rawtextresult").should("contain.value", "VCARD");
      /* ==== End Cypress Studio ==== */
      cy.get(":nth-child(10) > .secondColumn > .gwt-ListBox").select("MECARD");
      cy.get(".gwt-Button").click();
      cy.get("#rawtextresult").should("contain.value", "MECARD");
    });

    it("Generate QR Code", () => {
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("rudi baha");
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("company");
      cy.get(":nth-child(3) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("title");
      cy.get(":nth-child(4) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("089182777");
      cy.get(":nth-child(5) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("john@sleman.com");
      cy.get(":nth-child(6) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("address");
      cy.get(":nth-child(8) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("https://");
      cy.get(":nth-child(9) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("oke");
      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });
  context("Email Address", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Email address");
    });
    it("Email address", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "Email must be present.");
      cy.get(".secondColumn > .gwt-TextBox").clear();
      cy.get(".secondColumn > .gwt-TextBox").type("john#yupmail,com");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "Email is not valid.");
      /* ==== End Cypress Studio ==== */
    });
    it("Generate QR Code", () => {
      cy.get(".secondColumn > .gwt-TextBox").clear();
      cy.get(".secondColumn > .gwt-TextBox").type("mamba@gmail.com");
      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("Geo Location", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Geo location");
    });
    it("Latitude", () => {
      // empty latitude
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox");
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").clear().type("2");
      cy.get(":nth-child(3) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("query");
      cy.get(".gwt-Button").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Latitude is not a correct value."
      );
      /* ==== End Cypress Studio ==== */

      // special char
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox")
        .clear()
        .type('!@#$%^&*()_+{}|:"<>?');
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Latitude is not a correct value."
      );

      // alphabet
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("dsadsadsadsa");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Latitude is not a correct value."
      );
    });

    it("Longitude", () => {
      // empty latitude
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox");
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox").clear().type("2");
      cy.get(":nth-child(3) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("query");
      cy.get(".gwt-Button").click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Longitude is not a correct value."
      );
      /* ==== End Cypress Studio ==== */

      // special char
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox")
        .clear()
        .type('!@#$%^&*()_+{}|:"<>?');
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Longitude is not a correct value."
      );

      // alphabet
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("dsadsadsadsa");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Longitude is not a correct value."
      );
    });
    it("Generate QR Code", () => {
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("-2.3323232");
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("2.2323");
      cy.get(":nth-child(3) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("query");
      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("Phone Number", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Phone number");
    });

    it("Phone Number", () => {
      // empty field
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Phone number must be present."
      );
      /* ==== End Cypress Studio ==== */
      // special character
      cy.get(".secondColumn > .gwt-TextBox")
        .clear()
        .type('!@#$%^&*()_+{}|:"<>?');
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Phone number must be digits only."
      );
      // alphabet
      cy.get(".secondColumn > .gwt-TextBox").clear().type("alphabet");
      cy.get("#errorMessageID").should("be.visible");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should(
        "have.text",
        "Phone number must be digits only."
      );
    });

    it("Generate QR Code", () => {
      cy.get(".secondColumn > .gwt-TextBox").clear().type("0851617171717");

      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("SMS", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("SMS");
    });
    it("Phone Number", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".secondColumn > .gwt-TextArea").click();
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Phone number must be present."
      );
      cy.get(".secondColumn > .gwt-TextBox").clear();
      cy.get(".secondColumn > .gwt-TextBox").type('!@#$%^&*()_+{{}}|:"<>?');
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Phone number must be digits only."
      );

      cy.get(".secondColumn > .gwt-TextBox").clear();
      cy.get(".secondColumn > .gwt-TextBox").type("asjbdjsdjjads");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Phone number must be digits only."
      );
      /* ==== End Cypress Studio ==== */
    });
    it("Generate QR Code", () => {
      cy.get(".secondColumn > .gwt-TextArea").clear().type("sms");
      cy.get(".secondColumn > .gwt-TextBox").type("08121212");

      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("Text Content", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Text");
    });
    it("Text Content", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "Text should be at least 1 character."
      );
      /* ==== End Cypress Studio ==== */
    });
    it("Generate QR Code", () => {
      cy.get(".secondColumn > .gwt-TextArea").type("text");

      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("URL", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("URL");
    });
    it("URL", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".secondColumn > .gwt-TextBox").should("have.value", "http://");
      cy.get(".secondColumn > .gwt-TextBox").clear().type("https://");
      cy.get(".secondColumn > .gwt-TextBox")
        .clear()
        .type('!@#$%^&*()_+{{}}|:"<>?');
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "URL is not valid.");
      cy.get(".secondColumn > .gwt-TextBox")
        .clear()
        .type("ABSUIBDSAJKJnjkjndsajndjnaks");
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should("have.text", "URL is not valid.");
      /* ==== End Cypress Studio ==== */
    });
    it("Generate QR Code", () => {
      cy.get(".secondColumn > .gwt-TextBox").clear().type("https://google.com");
      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("Wifi Network", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");

      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Wifi network");
    });
    it("SSID", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").clear();
      cy.get(":nth-child(2) > .secondColumn > .gwt-TextBox").type("dsadsadsa");
      cy.get("#gwt-uid-3").check();
      cy.get(".gwt-Button").click();
      cy.get("#errorMessageID").should("be.visible");
      cy.get("#errorMessageID").should(
        "have.text",
        "SSID must be at least 1 character."
      );
      /* ==== End Cypress Studio ==== */
    });
    it("Generate QR Code", () => {
      cy.get(":nth-child(1) > .secondColumn > .gwt-TextBox")
        .clear()
        .type("121221");
      cy.get("#gwt-uid-3").check();
      cy.intercept("GET", "https://zxing.org/w/chart?**").as("getQR");
      cy.get(".gwt-Button").click();
      cy.wait("@getQR")
        .its("response.statusCode")
        .should("be.oneOf", [200, 304, 201]);
    });
  });

  context("General", () => {
    beforeEach(() => {
      cy.visit("http://zxing.appspot.com/generator/");
    });
    it("Select Content Type", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Calendar event");
      cy.get(
        ":nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .firstColumn"
      ).should("have.text", "All day event");
      cy.get(
        ":nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .firstColumn"
      ).should("have.text", "Event title");
      cy.get(
        ":nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > .firstColumn"
      ).should("have.text", "Start date");
      cy.get("#fullDayOnlyInfo1 > .firstColumn").should("have.text", "Time");
      cy.get(":nth-child(5) > .firstColumn").should("have.text", "End date");
      cy.get("#fullDayOnlyInfo2 > .firstColumn").should("have.text", "Time");
      cy.get("#fullDayOnlyInfo3 > .firstColumn").should(
        "have.text",
        "Time zone"
      );
      cy.get("#fullDayOnlyInfo4 > .firstColumn").should(
        "have.text",
        "Daylight savings"
      );
      cy.get(":nth-child(9) > .firstColumn").should("have.text", "Location");
      cy.get(":nth-child(10) > .firstColumn").should(
        "have.text",
        "Description"
      );
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Contact information");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(1) > .firstColumn"
      ).should("have.text", "Name");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(2) > .firstColumn"
      ).should("have.text", "Company");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(3) > .firstColumn"
      ).should("have.text", "Title");
      cy.get(":nth-child(4) > .firstColumn").should(
        "have.text",
        "Phone number"
      );
      cy.get(":nth-child(5) > .firstColumn").should("have.text", "Email");
      cy.get(":nth-child(6) > .firstColumn").should("have.text", "Address");
      cy.get(":nth-child(7) > .firstColumn").should("have.text", "Address 2");
      cy.get(":nth-child(8) > .firstColumn").should("have.text", "Website");
      cy.get(":nth-child(9) > .firstColumn").should("have.text", "Memo");
      cy.get(":nth-child(10) > .firstColumn").should("have.text", "Encoding");
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Email address");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > tr > .firstColumn"
      ).should("have.text", "Address");
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Geo location");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(1) > .firstColumn"
      ).should("have.text", "Latitude");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(2) > .firstColumn"
      ).should("have.text", "Longitude");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(3) > .firstColumn"
      ).should("have.text", "Query");
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Phone number");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > tr > .firstColumn"
      ).should("have.text", "Phone number");
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("SMS");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(1) > .firstColumn"
      ).should("have.text", "Phone number");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(2) > .firstColumn"
      ).should("have.text", "Message");
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Text");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > tr > .firstColumn"
      ).should("have.text", "Text content");
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("URL");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > tr > .firstColumn"
      ).should("have.text", "URL");
      cy.get(
        ":nth-child(1) > :nth-child(1) > table > tbody > tr > .secondColumn > .gwt-ListBox"
      ).select("Wifi network");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(1) > .firstColumn"
      ).should("have.text", "SSID");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(2) > .firstColumn"
      ).should("have.text", "Password");
      cy.get(
        ":nth-child(2) > :nth-child(1) > table > tbody > :nth-child(3) > .firstColumn"
      ).should("have.text", "Network Type");
      cy.get(":nth-child(4) > .firstColumn").should("have.text", "Hidden?");
      /* ==== End Cypress Studio ==== */
    });
  });
});
