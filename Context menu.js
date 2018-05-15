describe('Title', function() {
  it('go to test page', function(done) {
          
browser.executeScript("sauce:context=Going to 'Rays QA methods - Context Menu'");

browser.get('your test page');

browser.wait(function() {
  return element("your element").isPresent();
}, 3000);

browser.actions()
    //simulate  a right click
    .click("your element", protractor.Button.RIGHT)
    .perform();
  
    done();
  });
});