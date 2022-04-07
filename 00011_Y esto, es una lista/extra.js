function listasIguales(unArray, otroArray) /*<elipsis-for-student@*/ {
    if (unArray.length != otroArray.length)
        return false;
    for (var i = 0; i < unArray.length; i++) {
        if (unArray[i] instanceof Array && otroArray[i] instanceof Array) {
            if (!arraysIguales(unArray[i], otroArray[i]))
              return false;
        }
        else if (unArray[i] != otroArray[i])
          return false;
    }
    return true;
} /*@elipsis-for-student>*/
// Retorna un booleano que nos dice si dos listas son iguales
//
// Por ejemplo:
//
//  ム listasIguales([1, 2, 3], [1, 2, 3])
//  true
//  ム listasIguales([1, 2, 3], [4, 5, 3])
//  false

let personas = ["mara", "julian"];