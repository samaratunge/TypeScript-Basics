//You can seperate types using pipe operator
function printStatusCode( code : number | string | boolean){
    console.log(`The status code is ${code}`);
}
printStatusCode(200);
printStatusCode('200');
printStatusCode(true);