describe('Title', function() {
  it('go to test page', function(done) {
  
browser.executeScript("sauce:context=Going to 'Rays QA methods - Dynamic Loading");
browser.get('your test page');

//click to load element

browser.wait(function() {
  return element("loading element").isPresent();
}, 2000);

element("loading element").click();

//make sure its there

browser.wait(function() {
  return element("loading element").isPresent();
}, 8000);


//click to remove element

browser.wait(function() {
  return element("remove element").isPresent();
}, 3000);

element("remove element").click();

browser.wait(function() {
  return element("remove element").isPresent();
}, 3000);

//make sure that the element does not exist


var elm = element("remove element");
expect(browser.isElementPresent(elm)).toBe(false);


    done();
  });
});