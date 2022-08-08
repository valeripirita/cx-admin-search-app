Feature: search by screen name
  Scenario: visit the search page
    Given that the customer advisor is on the search page
    When I enter the screen name JOHN123 and click on the search
    Then the search result displays id 123, name JOHN, screen name JOHN123 and venture BBNJ