debugger

console.log("making changes in b1 branch")

function hello(){
    var a =7
    function hi(){
        console.log(a)
    }
    return hi
}

const z = hello()
z()


