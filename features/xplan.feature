Feature: Test xplan login page
  Scenario: Verify the title of the login page
    Given I am on the charter login page
    When I get the title of the page
    Then the title is "XPLAN Today | AMP XPLAN"