Las listas son muy útiles para contener múltiples elementos. ¡Pero hay más! También podemos agregarle elementos en cualquier momento, utilizando la primitiva `push`, que toma como parámetro el elemento a agregar. Por ejemplo:

```python
ム discos = ["Serú Girán", "Artaud", "Almendra", "Quebrado"]
ム discos.length
4
ム discos.push("Vida")
ム discos.length
5
```

Podemos notar que `push` agrega un elemento a la lista, lo cual hace que su tamaño aumente. ¿Pero en qué parte de la lista lo agrega? ¿Al principio? ¿Al final? ¿En el medio? :thinking:

> Averigualo vos: inspeccioná en la consola qué elementos contiene `libros`, agregale `"Fundación"` y volvé a inspeccionar `libros`.
>
> Para finalizar, probá la primitiva `pop`, que no recibe argumentos, ¿te imaginás que hace? :eyes: