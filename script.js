/* 
Primitivos - se pasan por valor (String-Number-Boolean-NULL-undefined)
Objetos - se asan por referencia (Object-Array-Function)
*/

var a = 1
//window.a = 1

function ctx(a,b){
    console.log("Parametros:",a,b)
    console.log("Contexto: ",this)
    console.log("*******")
}

/*
El contexto de una función, en lineas generales, nos va a dar una referencia de que objeto contiene a
esa funcion que estás ejecutando y esta en la palabra reservada this.
El contexto no es estático, this puede variar por lugar de ejecución o desición del programador:

Function.call()
Function.apply()
Function.bind()
new Function
*/

ctx(1,2) //1 2 window
ctx.call() // undefined undefined window
//elprimer parametro de call es todo lo que quieras que valga this, un objeto.
ctx.call({ctx: "call"}, 10, 20) // 10 20 {ctx: "call"}

//Apply ejecuta la funcion en la linea en la que aparece igual que call,pero en apply paso parametros como []
ctx.apply()  // undefined undefined window
// primer parametro contexto-igual que call
ctx.apply({ctx: "apply"}) //undefined undefined {ctx: "apply"}
ctx.apply({ctx: "apply"}, [100,200]) //100 200 {ctx: "apply"}

//permite cambiar el conexto pero no ejecuta la funcion, la retorna
ctx.bind({ctx: "bind"}, 1000, 2000) 

/*NEW : Ejecuta la funcion que tiene al lado reasignable el contexto con un objeto vacio. al finalizar la 
ejecucion de la funcion retorna ese objeto que creo 
*/

new ctx()   // undefined undefined {}

//es igual a:

let a = {}
ctx.call(a)
return a


//CLOSURE//

/* Espacio reservado de memoria que se genera en una funcion definida dentro de otra funcion */

function Persona(){
    let nombre = "Natalia"
    //atributo privado de clase que le pertenece al closure de la funcion que la use

    //metodo publico de instancia que guarda como referencia el atributo privado del closure
    this.getNombre = function(){
        console.log(nombre)
    }
}

new Persona()


