// spec.js

describe('Protractor Tests for cps app', function() {

  it('Title of home page is Home', function() {
    browser.get('http://localhost:8100/#/app/home');

    expect(browser.getTitle()).toEqual('Home');
  });

  it('Click on side menu', function() {
    browser.get('http://localhost:8100/#/app/home');
    element.all(by.css('*[name="javier-menu"]')).get(0).click();
    setTimeout(function () {

    }, 1000);

  });







});
