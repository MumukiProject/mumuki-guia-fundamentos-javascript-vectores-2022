Así como existe una función para averiguar en qué posición está un elemento, también puede ocurrir que queramos saber lo contrario: qué elemento está en una cierta posición. :open_mouth:

Para averiguarlo podemos usar el **operador de indexación**, escribiendo después de la colección y entre corchetes `[]` la posición que queremos para averiguar:

```javascript
ム mesesDelAnio[0]
"enero"
ム ["ese", "perro", "tiene", "la", "cola", "peluda"][1]
"perro"
```

:warning: El número que le pases, formalmente llamado **índice**, debe ser menor a la longitud de la lista, o cosas malas pueden suceder. :astonished:

> Probalo en la consola: ¿qué sucede si le pedís el elemento 0 a una lista vacía? ¿O si le pedís el elemento 13 a la lista `mesesDelAnio`?