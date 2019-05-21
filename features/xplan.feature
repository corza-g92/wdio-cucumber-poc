Feature: Test xplan login page
  Scenario: Login to xplan
    Given I am logged in to existing client with entity id "4738323"
    When I open primary details
    Then I can verify personal details