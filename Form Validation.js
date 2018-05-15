describe('Title', function() {
  it('go to test page', function(done) {

browser.executeScript("sauce:context=Going to 'Rays QA methods - Element is present'");

browser.get('your test page');

//get fields

browser.wait(function() {
  return element("field 1").isPresent();
}, 2000);

browser.wait(function() {
  return element("field 2").isPresent();
}, 2000);

//enter into fields

element("field 1").sendKeys('myemail@myemail.com');
element("field 2").sendKeys('mypassword');

//submit

element("submit ele").click();

browser.wait(function() {
    return element("confirm ele").isPresent();
  }, 3000);
  

    done();
  });
});