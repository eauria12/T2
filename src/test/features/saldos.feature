Feature: Saldos test
  Scenario: As stock employee
    Given the line "Por Código de Artículo" to filter by code
    When I call the filtraArticulos method
    Then I should see string "mostrarFiltroCodigo"

Scenario: As stock employee I want filter items
    Given the line "Por Línea de Artículo" to filter by lines
    When I call the filtraArticulos method and,
    Then I should see lines string "mostrarListaLineas"


Scenario: As accounting department employee
    Given a "Saldos Consolidados" to have a consolidated format
    When I call the escogeArticulos method and,
    Then I should have the value of "C"
