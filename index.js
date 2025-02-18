debugger

console.log("commit from github editor")

function hello(){
    var a =7
    function hi(){
        console.log(a)
    }
    return hi
}

const z = hello()
z()


