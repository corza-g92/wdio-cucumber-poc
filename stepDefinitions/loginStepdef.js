import { Given, Then, When } from 'cucumber';
import LoginPage from '../pageObjects/loginPage';
import assert from 'assert';
import clientDashboard from '../pageObjects/clientDashboard';
import primaryDetails from '../pageObjects/primaryDetails';

// Import for custom commands
var action = require('../commands/actions.js');

Given(/^I am logged in to existing client with entity id \"(\d+)\"$/, function(entityId) {
  LoginPage.open('/');
  LoginPage.login('cgreatrex', '9py44BjKNUDa4qQ');
  clientDashboard.openClient(entityId);
});

When(/^I open primary details/, function () {
  clientDashboard.navigateToPrimaryDetails();
});
        
Then(/^I can verify personal details/, function () {
  primaryDetails.comparePersonalDetails();
  primaryDetails.logout();
});
