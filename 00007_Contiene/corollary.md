¡Bien hecho!

Habrás notado que las listas también pueden tener elementos duplicados: `[1, 2, 1]`, `["hola", "hola"]`, etc.

Por tanto, `indexOf` en realidad devuelve la posición de la _primera aparición_ del elemento en la lista. Por ejemplo:

```javascript
ム ["qué", "es", "eso", "eso", "es", "queso"].indexOf("es")
1 //devuelve 1 porque si bien "es" también está en la posición 4, aparece primero en la posición 1.
```