describe('Title', function() {
  it('go to test page', function(done) {

    browser.executeScript("sauce:context=Going to 'Rays QA methods - Dropdowns'");
       
browser.get('your test page');

browser.wait(function() {
  return element("your element").isPresent();
}, 2000);

//click on dropdown option 

element(by.cssContainingText('option', 'Option 1')).click();



    done();
  });
});