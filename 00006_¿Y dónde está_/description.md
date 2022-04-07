Otra cosa que queremos hacer con las listas es saber en qué posición se encuentra un elemento. Para ello utilizamos la primitiva `indexOf` de la siguiente manera:

```javascript
["a", "la", "grande", "le", "puse", "cuca"].indexOf("grande"); //retorna 2

let diasLaborales = ["lunes", "martes", "miercoles", "jueves", "viernes"]
diasLaborales.indexOf("lunes") //retorna 0
```

Lo curioso de esta primitiva es que pareciera devolver siempre uno menos de lo esperado. Por ejemplo, la palabra `"grande"` aparece tercera, no segunda; y `"lunes"` es el primer día laboral, no el cero. ¿Es que los creadores de JavaScript se equivocaron? :confused:

¡No! Se trata de que en JavaScript, al igual que en muchos lenguajes, las posiciones de las listas arrancan en 0: el primer elemento está en la posición 0, el segundo en la 1, el tercero en la 2, y así.

> ¿Y qué sucede si le pasás como argumento a `indexOf` un elemento que la lista no tiene? ¡Averigualo!
>
> Probá lo siguiente:
>
> ```javascript
> diasLaborales.indexOf("osvaldo")
> ```