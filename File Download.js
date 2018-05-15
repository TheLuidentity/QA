var filename = 'specs/test1.txt';
var fs = require('fs');

describe('Title', function() {
  it('go to test page', function(done) {

browser.executeScript("sauce:context=Going to 'Rays QA methods - File Download");

browser.get('your test page');


if (fs.existsSync(filename)) {
// if file already exists, delete it
fs.unlinkSync(filename);

}

//download the file

element("download button ").click();

browser.driver.wait(function() {
//check if its there
return fs.existsSync(filename);
}, 5000);

    done();
    
  });
});