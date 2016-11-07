// spec.js

describe('Protractor Tests for cps app', function() {

  it('Title of home page is Home', function() {
    browser.get('http://localhost:8100/#/app/home');

    expect(browser.getTitle()).toEqual('Home');
  });

  it('Click on side menu', function() {
    browser.get('http://localhost:8100/#/app/home');
    element(by.css('button button-icon button-clear icon-navicon'));

  });







});
