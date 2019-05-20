Feature: Test xplan login page
  Scenario: Login to xplan
    Given I am on the charter login page
    When I login to xplan charter
    Then the title is not "XPLAN Today | AMP XPLAN"