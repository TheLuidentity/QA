describe('Title', function() {
  it('go to test page', function(done) {

browser.executeScript("sauce:context=Going to 'Rays QA methods - Geo location");

browser.get('your test page');

//by pass the Non-DOM pop up and return a pre defined location for automation test purposes
//for actual location do manual test

browser.executeScript("navigator.geolocation.getCurrentPosition = function(success) { success({coords: {latitude: 42.424242, longitude: 41.414141}}); }");


browser.wait(function() {
  return element("button to show geo lat/lon").isPresent();
}, 2000);

element("button to show geo lat/lon").click();

//verify results

browser.wait(function() {
  return element("lat/lon ele").isPresent();
}, 2000);


done();
    
  });
});