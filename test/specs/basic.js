const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'XPLAN Today | AMP XPLAN');
        browser.pause(5000);
    });
});