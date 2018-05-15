describe('Title', function() {
it('go to test page', function(done) {

browser.executeScript("sauce:context=Going to 'Rays QA methods - Get content of Dynamic Content");

browser.get('your test page');

browser.wait(function() {
  return element("your element").isPresent();
}, 2000);

//get the text inside the dynamic element 

var  dynaEle = element("your element");
dynaEle.getText().then(function (text) {
    console.log(text);
});

done();
});
});