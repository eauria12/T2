import { Given, When, Then } from "@cucumber/cucumber";
import{AppSideLoginComponent} from '../../../Cliente/src/app/files-test/login.component';
import { assert } from "chai";
let loginComponent: AppSideLoginComponent;
let resultado: string="";
let usuario:string;
let local:number;

  Given('a username {string}', (usuarioId: string) =>{
    console.log("I am the first test, User authentication")
    console.log("Hi i am given my username "+ usuarioId);
    loginComponent=new AppSideLoginComponent();
    usuario=usuarioId;
  });


  Given('a localID {int}', (localId: number ) =>{
    console.log("and my localID "+ localId);
    local=localId;
  });


  When('I call the authenticated method', async function () {
    console.log("Now I am clicking the Login button");
    const postContent = await loginComponent.fetchAndCreatePost(usuario, local);
    resultado= postContent;
});

  
  Then('I should see the message {string}', (result:string)=> {
    console.log("and I should see the message "+result);
    assert.equal(resultado, result);
  });
