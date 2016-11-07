// spec.js

describe('Protractor Tests for cps app', function() {

  it('Title of home page is Home', function() {
    browser.get('http://localhost:8100/#/app/home');

    expect(browser.getTitle()).toEqual('Home');
  });

  it('Click on side menu', function() {
    browser.get('http://localhost:8100/#/app/home');
<<<<<<< HEAD
    element.all(by.css('*[name="javier-menu"]')).get(0).click();
    setTimeout(function () {

    }, 1000);

=======
    var sideMenuButton = element.all(by.css('button[name="javier-menu"]')).get(1);
    sideMenuButton.click();
    browser.sleep(1000);
>>>>>>> b08f909ab09d921fafe920f1a90b5f8a834d47f6
  });

});
