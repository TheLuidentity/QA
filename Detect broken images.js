describe('Title', function() {
  it('go to test page', function(done) {

    browser.executeScript("sauce:context=Going to 'Rays QA methods - Find broken images'");

    browser.get('your test page');

    browser.wait(function() {
   return element('your element').isPresent();
}, 3000);

element(By.xpath('your element')).click();

//find all images and see how many are broken

browser.executeAsyncScript(function (callback) {
    var totalImages = document.getElementsByTagName('img'),
    loaded = 0;
    for (var i = 0; i < totalImages.length; i++) {
        if (totalImages[i].naturalWidth > 0) {
            loaded++;
        };
    };
    callback(totalImages.length - loaded);
}).then(function (numOfBrokenImages) {
    //numOfBrokenImages is the callback from above 
        expect(numOfBrokenImages).toBe(0);
    });


    done();
  });
});