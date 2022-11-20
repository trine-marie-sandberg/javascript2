//default exports can be imported as any name. Const/let dosent work for some reason..
//Can only have one default export, pr file
//Importing both default and named imports
import myDefaultExport, { logModule, logModule as logThisIsAModule }  from "./componment.mjs";
import myDefaultExport2 from "./componment2.mjs";
myDefaultExport();
myDefaultExport2();