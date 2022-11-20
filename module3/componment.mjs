//Exporting at once
export const logModule = console.log("this is a module");

//Exporting later at the bottom of the file
function defaultExport() {

    console.log("Default export");
};

export default defaultExport;