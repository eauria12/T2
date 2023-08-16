Feature: User authentication test
  Scenario: As a member of the company
    Given a username "RALCIVAR"
    And a localID 80
    When I call the authenticated method
    Then I should see the message "Successfully authenticated"