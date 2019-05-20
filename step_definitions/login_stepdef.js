import { Given, Then, When } from 'cucumber';
import LoginPage from '../page_objects/login_page';
import assert from 'assert';

// Import for custom commands
var action = require('../commands/actions.js');

Given(/^I am on the charter login page$/, function() {
  browser.url('/');
});

When(/^I login to xplan charter/, function () {
  LoginPage.login('cgreatrex', '9py44BjKNUDa4qQ');
});
        
Then(/^the title is not "(.+)"/, function (expected_title) {
  let title = browser.getTitle();
  assert.notEqual(title, expected_title);
  browser.pause(5000);
});