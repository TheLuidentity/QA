describe('Title', function() {
  it('go to test page', function(done) {

    browser.executeScript("sauce:context=Going to 'Rays QA methods - Floating Menu");
  
    browser.get('your test page');

//scroll down so that floating menu appears and then confirm elements

browser.executeScript('window.scrollTo(0,9001);').then(function () {

  expect(element('floating ele 1').isDisplayed()).toBeTruthy();

  expect(element('floating ele 2').isDisplayed()).toBeTruthy();

  expect(element('floating ele 3').isDisplayed()).toBeTruthy();
  
  expect(element('floating ele 4').isDisplayed()).toBeTruthy();
})

  
    done();
    
  });
});