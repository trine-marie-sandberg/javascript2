//default exports can be imported as any name. Const/let dosent work for some reason..
//Can only have one default export, pr file
//named imports needs {}
//Importing both default and named imports
import myDefaultExport, { logModule as logThisIsAModule }  from "./module.mjs";
import myDefaultExport2 from "./module2.mjs";
myDefaultExport();
myDefaultExport2();