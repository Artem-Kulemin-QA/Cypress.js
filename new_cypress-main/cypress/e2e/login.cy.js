describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для юзера
      
 })

 
it('Неверный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
    cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для юзера
 
})
it('Проверка,что в логине есть @', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввели неверный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для юзера
 
})
it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').click(); // Нажали на "Забыли пароль"
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту 
    cy.get('#restoreEmailButton').click(); // Нажали на "Отправить код"
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для юзера
 
})
it('Верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('german@olnikov.ru'); // Ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для юзера
 
})
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для юзера
})
})