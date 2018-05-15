describe('Title', function() {
  it('go to test page', function(done) {
          
browser.executeScript("sauce:context=Going to 'Rays QA methods - Element is present'");

browser.get('your test page');


browser.wait(function() {
  return element(By.model("your element")).isPresent();
}, 2000);

browser.wait(function() {
  return element(By.css("your element")).isPresent();
}, 2000);

browser.wait(function() {
  return element(By.id("your element")).isPresent();
}, 2000);

browser.wait(function() {
  return element(By.xpath("your element")).isPresent();
}, 2000);

    done();
  });
});