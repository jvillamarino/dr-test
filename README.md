Install Dependencies
1. npm install --save @angular/material @angular/cdk
2. npm install --save @angular/animations
3. npm install @angular/flex-layout    

#### DART
Es un lenguaje de programacion muy parecido a JAVA, tiene algo parecido al Pattern Matching de Elixir (Funciones) y a los objetos de Javascript (Map).

### Declaración de Variables
En dart hay dos formas de declarar Variables 

* Esta definición de variable permite que automáticamente/"dinamicamente" el lenguaje le asigne el tipo de dato, lo que no es recomendable para la legibilida del código.

> var nombre_variable = valor;
Ejemplo 
> var miNombre = 'JESUS';
Automaticamente el compilador de Flutter sabra que la variable "miNombre" es de tipo *String*. Una vez que una aplicación Dart este en tiempo de ejecución, sera imposible cambiar el tipo de dato de una variable.

* Este tipo de variable define el tipo de dato una vez que es declarada.
> String miNombre = 'JESUS'; 
Se declarar las variables de este modo por legibilidad de código.

### Tipos de Variables
* Existen los siguientes tipos de dato: 
    * int => Enteros
    * double => Decimales
    * bool => Booleanos
    * String => Cadena de caracteres
    * List => Definición de Vectores, Arreglos, listas
    * Map => Definición de lo que sería un Objeto Javascript

### Concatenacion de Strings 
En Dart la concatenación de String es igual como en Javascript, TypeScript, u elixir que permite la concatenación de variables usando el ${} o #{} (En el caso de Elixir)

> String nombre  = 'JESUS'; 
> int edad = 22;
> print('Mi nombre es ${nombre} y tengo ${edad} años');

Dart tambien nos permite usar la interpolación de Strings sin tener que usar las llaves "{}"
> print('Mi nombre es $nombre y tengo $edad años');

### Funciones

Las funciones en Dart, al igual que las variables, es necesario definir el tipo de dato que puede o no retornar una función.

* Por ejemplo void, String, int, bool,  List...
> void nombreFuncion() {
    print('Esta función no retorna nada');
}

> String nombreFuncion(){
    return 'Esta función devuelve un String';
}

Asi como tambien podemos definir el tipo de dato que vamos a recibir como argumento
> void nombreFuncion(String saludo, String nombrePersona){
    print('$saludo', $nombrePersona);
}


#### Lo que veo como Pattern Matching en las funciones

Podemos recibir argumentos en una funcion sin importar el orden 

> void nombreFuncion(Strin)






