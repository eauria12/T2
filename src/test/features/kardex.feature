Feature: Kardex test
  Scenario: As stock employee on Nacional
    Given the type of nivel "Nacional" to filter by Nacional items
    When I call the handleNivelSeleccionado method
    Then I should have the atribute seleccionNivel of the object with a value of "N"

Scenario: As stock employee on Zona
    Given the type of zona "Zona" to filter by Zona items
    When I call the handleNivelSeleccionado method
    Then I should see "Z"

    
Scenario: As stock employee on Centro Norte
    Given a selected Zona with a value "Zona Centro-Norte"
    When I call the onZonaSeleccionada method
    Then I should have "Zona 1"