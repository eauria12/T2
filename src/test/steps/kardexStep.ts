import { Given, When, Then } from "@cucumber/cucumber";
import { KardexMercaderiaComponent } from "../../../Cliente/src/app/files-test/kardex-mercaderia.component";
import { assert } from "chai";
let nivelSelected: string;
let zonaSelected: string;
let kardex = new KardexMercaderiaComponent();
let resultado: any;

Given(
  "the type of nivel {string} to filter by Nacional items",
  (nivel: string) => {
    console.log("\n\n I am the second test, Filter Kardex");
    console.log("Hi i am given the nivel " + nivel);
    nivelSelected = nivel;
  }
);

When("I call the handleNivelSeleccionado method", () => {
  resultado = kardex.handleNivelSeleccionado(nivelSelected);
});

Then(
  "I should have the atribute seleccionNivel of the object with a value of {string}",
  (seleccionNivel: string) => {
    console.log(
      "I should have the atribute seleccionNivel of the object with a value of " +
        seleccionNivel
    );
    assert.equal(resultado["seleccionNivel"], seleccionNivel);
  }
);

Given(
  "the type of zona {string} to filter by Zona items",
  (seleccionNivel: string) => {
    console.log("\n\n I am the third test, Filter Kardex");
    console.log("Hi i am given the zona " + seleccionNivel);
    nivelSelected = seleccionNivel;
    resultado = kardex.handleNivelSeleccionado(nivelSelected);
  }
);

Then("I should see {string}", (seleccionNivel: string) => {
    console.log(
        "I should have the atribute seleccionNivel of the object with a value of " +
          seleccionNivel
      );  assert.equal(resultado["seleccionNivel"], seleccionNivel);
});

Given("a selected Zona with a value {string}", (zona: string) => {
  console.log("\n\n I am the fourth test, Filter Kardex");
  console.log("Hi i am given the zona " + zona);
  zonaSelected = zona;
});

When("I call the onZonaSeleccionada method", () => {
    resultado = kardex.onZonaSeleccionada(zonaSelected);
});

Then("I should have {string}", (result: string) => {
    assert.equal(resultado, result);
});
