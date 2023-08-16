import { Given, When, Then } from "@cucumber/cucumber";

import { ObtenerPermisosService } from "../../../Cliente/src/app/files-test/obtener-permisos.service";
import { assert } from "chai";
let resultado: string = "";
let obtenerPermisosService: ObtenerPermisosService;
let selectedCode: string = "";
let selectedService: string = "";
Given("a nivelId {string}", (code: string) => {
  console.log("\n\n I am the eight test, Permissions Saldos");
  console.log("Hi i am in given step" + code);
  selectedCode=code;
});

When("I call the obtenerCodigoPermiso method", () => {
    obtenerPermisosService = new ObtenerPermisosService();
  resultado = obtenerPermisosService.obtenerCodigoPermiso(selectedCode);
  console.log("Requesting");
});

Then("I should get {string}", (result: string) => {
  console.log("Hi i am in then step" + result);
  assert.equal(resultado, result);
});
