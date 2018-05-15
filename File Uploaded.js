var path = require('path');

describe('Title', function() {
it('go to test page', function(done) {
      
browser.executeScript("sauce:context=Going to 'Rays QA methods - File upload");

browser.get('your test page');

//send path to the upload button

var fileToUpload = 'specs/test1.txt',
    absolutePath = path.resolve(__dirname, fileToUpload);

    console.log(absolutePath);

element("upload button").sendKeys(absolutePath);    
element("submit button").click();

//check to see if success
browser.wait(function() {
return element("upload success element").isPresent();
  }, 2000);

done();
    
  });
});