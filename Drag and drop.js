describe('Title', function() {
  it('go to test page', function(done) {
          
browser.executeScript("sauce:context=Going to 'Rays QA methods - Element is present'");
    
browser.get('your test page');

browser.wait(function() {
  return element("your element").isPresent();
}, 2000);

var ele1 = element("your element");

var ele2 = element("your element");

//drag element 1 and drop off at element 2

browser.actions().dragAndDrop(ele1,ele2).mouseUp().perform();(Protractor)

    done();
  });
});