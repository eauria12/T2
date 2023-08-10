import { Given, When, Then } from "@cucumber/cucumber";

import{ObtenerPermisosService} from '../../../Cliente/src/app/files-test/obtener-permisos.service';
import { HttpClient } from '../../../Cliente/node_modules/@angular/common/http';
import { AuthService } from '../../../Cliente/src/app/services/authentication/auth.service';
import { assert } from "chai";
let nivelId: string;
let resultado: string="";
let obtenerPermisosService: ObtenerPermisosService;
let httpClient: HttpClient;
let authService: AuthService;

Given('a nivelId {string}', (code: string) =>{
  // Write code here that turns the phrase above into concrete actions
console.log("Hi i am in given step"+code);
obtenerPermisosService = new ObtenerPermisosService();

resultado=obtenerPermisosService.obtenerCodigoPermiso(code);

});


When('I call the obtenerCodigoPermiso method',()=> {
  // Write code here that turns the phrase above into concrete actions
console.log("Requesting");});


Then('I should get {string}', (result:string)=> {
  // Write code here that turns the phrase above into concrete actions
console.log("Hi i am in then step"+result);
assert.equal(resultado, result);

});

