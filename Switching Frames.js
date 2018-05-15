describe('Title', function() {
  it('go to test page', function(done) {
          
    browser.executeScript("sauce:context=Going to 'Rays QA methods - Switching frames");
    
    browser.get('your test page');

//make sure frames are there

browser.wait(function() {
  return element("frame 1").isPresent();
}, 2000);

browser.wait(function() {
  return element("frame 2").isPresent();
}, 500);

browser.wait(function() {
  return element("frame 3").isPresent();
}, 500);

browser.wait(function() {
  return element("frame 4").isPresent();
}, 500);

//switch between the frames and validate

element(By.xpath('/html/body')).getText().toEqual('text inside fram 1');

browser.switchTo().frame(element(By.xpath('/html/frameset/frame[2]')));

element(By.xpath('/html/body')).getText().toEqual('text inside fram 2');

browser.switchTo().frame(element(By.xpath('/html/frameset/frame[3]')));

element(By.xpath('/html/body')).getText().toEqual('text inside fram 3');

browser.switchTo().frame(element(By.xpath('/html/frameset/frame[4]')));

element(By.xpath('/html/body')).getText().toEqual('text inside fram 4');

    done();
    
  });
});