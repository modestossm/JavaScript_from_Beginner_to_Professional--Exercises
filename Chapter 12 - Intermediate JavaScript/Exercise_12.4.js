// The script was run in the browser editor.

// Variable values can be tracked in the editor while debugging. The following exercise will demonstrate how to use the editor's breakpoints to check a value of a variable at a certain point in the running of the script.
// This is a simple example, but the same process can be used to find out information about larger scripts at specific points during execution, or establish where a problem may lie.

let val = 5;
val += adder();
val += adder();
val += adder();
console.log(val);

function adder(){
    let counter = val;

    for(let i=0;i<val;i++){
        counter++;
    }
    return counter ;
}