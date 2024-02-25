Cypress.Commands.add('performTest1And2', ({ test1, test2 }) => {
  cy.fixture('Test1_2').then((Test1_2) => {
    const datosTest1 = Test1_2[test1];
    const datosTest2 = Test1_2[test2];

    cy.visit(datosTest1.url);
      cy.get('#box-1857 > .products-listing > .slick-list > .slick-track > .slick-current > .type-1 > .name > a').click();
      cy.get('.bigger').click();
      cy.get('#btn-cart > .add-to-cart').click();
      cy.get('.right-buttons > .btn-2').click();
      cy.get('.qty-inp-s').should('have.value', '2');
      cy.get('.with-card').click();
      cy.get('#shipping_address-firstname').type(datosTest1.name);  
      cy.get('#shipping_address-lastname').type(datosTest1.lastname);
      cy.get('#shipping_address-street_address').type(datosTest1.address);
      cy.get('#shipping_address-postcode').type(datosTest1.postcode);
      cy.get('#shipping_address-city').type(datosTest1.city);
      cy.get('#checkout-email_address').type(datosTest1.email);
      cy.wait(3000);
      cy.get('.payment_class_cod > .item-radio > label > input').check();
      cy.wait(3000);
      cy.get('#checkout-terms').check();
      cy.get('.btn-title').click();
      cy.get('.text-2').click();
      cy.get('.text-2').should('have.text', datosTest1.confirmOrder);
    


    cy.visit(datosTest2.url);

      cy.get('#box-1857 > .products-listing > .slick-next').click();
      cy.get('#box-1857 > .products-listing > .slick-list > .slick-track > [data-id="25"] > .type-1 > .name > a').click();
     // cy.get('.bigger').click();
      cy.get('#qty').clear('3');
      cy.get('#qty').type('3');
      cy.get('#btn-cart > .add-to-cart').click();


      cy.get('.right-buttons > .btn-2').click();
      cy.get('.qty-inp-s').should('have.value', '3');
      cy.get('.with-card').click();
      cy.get('.payment_class_cod > .item-radio > label > input').check();
      cy.wait(3000);
  //    cy.get('#checkout-terms').check(); 
      cy.get('.btn-title').click();
      cy.wait(3000);
      cy.get('.text-2').click();
      cy.wait(3000);
      cy.get('.text-2').should('have.text', datosTest2.confirmOrder);



  });

});

Cypress.Commands.add('performTest3', ({ test3 }) => {
  cy.fixture('Test1_2').then((Test1_2) => {
    const datosTest3 = Test1_2[test3];
    
    cy.visit(datosTest3.url);
    cy.get('#box-1857 > .products-listing > .slick-list > .slick-track > .slick-current > .type-1 > .name > a').click();
    cy.get('.bigger').click();
    cy.get('#btn-cart > .add-to-cart').click();
    cy.get('.right-buttons > .btn-2').click();
    cy.get('.qty-inp-s').should('have.value', '2');
    cy.get('.with-card').click();
    cy.get('#shipping_address-firstname').type(datosTest3.name);  
    cy.get('#shipping_address-lastname').type(datosTest3.lastname);
    cy.get('#shipping_address-street_address').type(datosTest3.address);
    cy.get('#shipping_address-postcode').type(datosTest3.postcode);
    cy.get('#shipping_address-city').type(datosTest3.city);
    cy.get('#checkout-email_address').type(datosTest3.email);
    cy.get('.payment_class_cod > .item-radio > label > input').check();
    cy.get('#checkout-terms').check();
    cy.get('.btn-title').click();
    cy.wait(3000);
    cy.get('.text-2').click();
    cy.get('.text-2').should('not.have.text', datosTest3.confirmOrder);
    cy.screenshot('test3_fail');
  });
});
