//default exports can be imported as any name. Const/let dosent work for some reason..
//Can only have one default export, pr file
//named imports needs {}
//Importing both default and named imports
//NOTE: Modules are deferred by default
import myDefaultExport, { logModule as logThisIsAModule }  from "./module.mjs";
import myDefaultExport2 from "./module2.mjs";
myDefaultExport();
myDefaultExport2();

//Modules are deferred by default
const selectBody = document.querySelector("body");
selectBody.innerHTML = "<h1>Testing if the body element is selected</h1>";

//DYNAMIC IMPORTS
async function doSum() {

    const mathModule = './module.mjs';
    //importing module when inside this function
    const { addNumbers } = await import(mathModule);
  
    const result = addNumbers(10, 10);
    console.log(result);
  };
  
  doSum();