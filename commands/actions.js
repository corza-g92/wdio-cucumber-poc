module.exports = (function() {

    browser.addCommand('waitAndClick', function() {
        this.waitForVisible();
        this.click();
    });

    browser.addCommand('inputText', function(text) {
        this.waitForVisible();
        this.setValue(text);
    });

 })();