Install Dependencies
1. npm install --save @angular/material @angular/cdk
2. npm install --save @angular/animations
3. npm install @angular/flex-layout    
#### DART
Es un lenguaje de programacion muy parecido a JAVA, tiene algo parecido al Pattern Matching de Elixir (Funciones) y a los objetos de Javascript (Map).

### Declaración de Variables
En dart hay dos formas de declarar Variables 

* Esta definición de variable permite que automáticamente/"dinamicamente" el lenguaje le asigne el tipo de dato, lo que no es recomendable para la legibilida del código.

``` Dart 
    var nombre_variable = valor;
```
Ejemplo 
``` Dart 
    var miNombre = 'JESUS';
```
Automaticamente el compilador de Flutter sabra que la variable "miNombre" es de tipo **String**. Una vez que una aplicación Dart este en tiempo de ejecución, sera imposible cambiar el tipo de dato de una variable.

* Este tipo de variable define el tipo de dato una vez que es declarada.
 ``` Dart
  String miNombre = 'JESUS'; 
 ```
Se declaran las variables de este modo por legibilidad de código.

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
``` Dart
    String nombre  = 'JESUS'; 
    int edad = 22;
    print('Mi nombre es ${nombre} y tengo ${edad} años');
```
Dart tambien nos permite usar la interpolación de Strings sin tener que usar las llaves "{}"
```Dart 
    print('Mi nombre es $nombre y tengo $edad años');
```
### Funciones

Las funciones en Dart, al igual que las variables, es necesario definir el tipo de dato que puede o no retornar una función.

* Por ejemplo void, String, int, bool,  List...
```Dart 
    void nombreFuncion() {
        print('Esta función no retorna nada');
    }
```
```Dart 
     String nombreFuncion(){
        return 'Esta función devuelve un String';
    }
```
Asi como tambien podemos definir el tipo de dato que vamos a recibir como argumento. Se recomienda seguir esta platica para mejorar la legibilidad del código asi como tambien evitamos que salgan errores. _Basura que entra, basura que sale._
 ```Dart 
    void saludarAmigo(String saludo, String nombrePersona){
         print('$saludo, $nombrePersona.');
    }

```
---
Consola 
> saludarAmigo('Hola', 'Jesus');
> Hola, Jesus.
---

#### Lo que veo como Pattern Matching en las funciones
En la función anterior vimos que le podemos pasar variables para saludar a una persona, pero que pasa si alteramos el orden en que pasamos los argumentos a la función? Tendremos algo como lo siguiente.
---
Consola
> saludarAmigo('Jesus', 'Hola');
> Jesus, Hola.
---
Por lo que para resolver esto solamente es necesario asignarle un nombre al argumento que le estamos pasando a la función y recibir los argumentos como un objeto, como lo siguiente.

``` Dart
    void saludarAmigo({String saludo, String nombrePersona}) {
        print('$saludo, $nombrePersona.');
    }
```
Con esto ya hacemos que la funcion tome como nombre de los argumentos el nombre que se definio.

Y al llamar la función lo que haremos es asignarle un nombre a cada argumento que le queremos pasar

``` Dart
    saludarAmigo(saludo: 'Hola', nombrePersona: 'Jesus');
```
---
Consola 
> Hola, Jesus
---
``` Dart
    saludarAmigo(nombrePersona: 'Jesus', saludo: 'Hola');
```
---
Consola 
> Hola, Jesus
---

Por lo que nos damos cuenta que sin importar el orden en el que pasamos los argumentos, el resultado será siempre el correcto.









