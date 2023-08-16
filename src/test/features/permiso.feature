Feature: Permissions test
  Scenario: Return the last two characters as a string
    Given a nivelId "08050950"
    When I call the obtenerCodigoPermiso method
    Then I should get "50"