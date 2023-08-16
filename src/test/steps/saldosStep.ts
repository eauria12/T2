import { Given, When, Then } from "@cucumber/cucumber";
import { SaldoInventarioComponent } from "../../../Cliente/src/app/files-test/saldo-inventario.component";
import { assert } from "chai";
let selectedLine: string;
let saldoInventario=new SaldoInventarioComponent();
let resultado: string;
Given("the line {string} to filter by code",(line:string) => {
    console.log("\n\n I am the fifth test, Filter Saldos");
    console.log("Hi i am given the nivel " + line);
    selectedLine = line;
});

When("I call the filtraArticulos method", ()=> {
    resultado = saldoInventario.filtraArticulos(selectedLine);
});

Then(
  "I should see string {string}",
(result:string) => {
    assert.equal(resultado, result);

  }
);

Given("the line {string} to filter by lines",(line:string) => {
    console.log("\n\n I am the sixth test, Filter Saldos");
    console.log("Hi i am given the nivel " + line);
    selectedLine = line;
});

When("I call the filtraArticulos method and,", ()=> {
    resultado = saldoInventario.filtraArticulos(selectedLine);

});

Then(
  "I should see lines string {string}",
(result:string) => {
    assert.equal(resultado, result);

  }
);

Given("a {string} to have a consolidated format",(consolidated:string) => {
  console.log("\n\n I am the seventh test, Filter consolidated");
  console.log("Hi i am given" + consolidated);
  selectedLine = consolidated;
});

When("I call the escogeArticulos method and,", ()=> {
    resultado = saldoInventario.escogeArticulos(selectedLine);

});

Then("I should have the value of {string}",(result:string) => {
    assert.equal(resultado, result);

});
