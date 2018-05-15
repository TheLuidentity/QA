describe('Title', function() {
  it('go to test page', function(done) {
  
browser.executeScript("sauce:context=Going to 'Rays QA methods - Exit Intent");

browser.get('your test page');

//find element on page and move according to its x and y point

var titleEle = element("your element");
browser.actions()
.mouseMove(titleEle, {x: 50, y: 2500}) // 50px from left, 500 px from top of titleEle
.mouseDown()
.mouseMove({x: 200, y: 0}) // 400px to the right of current location
.perform();

//also get currentURl, triggering the exit intent

expect(browser.getCurrentUrl()).toEqual("your test page");

browser.actions()
.mouseUp()
.perform();
  
    done();
    
  });
});