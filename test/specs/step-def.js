import { BeforeAll, Given, Then, When, setWorldConstructor } from 'cucumber';
import assert from 'assert';

let title;

Given(/^I am on the charter login page$/, function() {
  browser.url('/');
});

When(/^I get the title of the page/, function () {
  title = browser.getTitle();
});
      
Then(/^the title is "(.+)"/, function (expected_title) {
  assert.equal(title, expected_title);
  browser.pause(5000);
});