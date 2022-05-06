¡Bien hecho!

Nuestra función `contiene` ya existe en JavaScript pero se llama `includes`, ¡sí, como la que usamos con string! 

```javascript
ム [1, 6, 7, 6].includes(7)
true

ム [8, 7].includes(7)
false
```

Por otro lado, habrás notado que las listas también pueden tener elementos duplicados: `[1, 2, 1]`, `["hola", "hola"]`, etc.

Por tanto, `indexOf` en realidad devuelve la posición de la _primera aparición_ del elemento en la lista. Por ejemplo:

```javascript
ム ["qué", "es", "eso", "eso", "es", "queso"].indexOf("es")
1 //retorna 1 porque si bien "es" también está en la posición 4, aparece primero en la posición 1.
```