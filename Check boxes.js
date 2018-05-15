
describe('Title', function() {
  it('go to test page', function(done) {

browser.executeScript("sauce:context=Going to 'Rays QA methods - Confirm check boxes'");

browser.get('your test page');

browser.wait(function() {
  return element(By.xpath("your element")).isPresent();
}, 3000);

expect( element(By.xpath("your element")).isSelected()).toBeTruthy();

expect( element(By.xpath("your element")).isSelected()).toBeFalsy();

    done();
  });
});