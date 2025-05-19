# Especificaciones de la Rosa Dorada (Gilded Rose)

Bienvenido al equipo **Gilded Rose**.
Como sabrás, somos una pequeña posada ubicada estratégicamente en una prestigiosa ciudad, atendida por la amable Allison. También compramos y vendemos mercadería de alta calidad. Por desgracia, nuestra mercadería va bajando de calidad (`Quality`) a medida que se aproxima la fecha de venta.

Tenemos un sistema instalado que actualiza automáticamente nuestro inventario. Este sistema fue desarrollado por un tipo serio y práctico llamado Leeroy, que ahora se encuentra en otras aventuras.

Tu tarea es añadir una nueva funcionalidad al sistema para que podamos comenzar a vender una nueva categoría de items. Pero primero, vamos a describir como funciona el sistema:

## Descripción del sistema

- Todos los artículos (`item`) tienen una propiedad `SellIn` que denota el número de días que tenemos para venderlo
- Todos los artículos (`item`) tienen una propiedad `Quality` que denota cúan valioso es el artículo
- Al final de cada día, nuestro sistema decrementa ambos valores para cada artículo mediante el método `updateQuality`

Bastante simple, ¿no? Bueno, ahora es donde se pone interesante:

1- Una vez que ha pasado la fecha recomendada de venta (`SellIn`), la calidad (`Quality`) se degrada al doble de velocidad
2- La `calidad` de un artículo nunca es negativa
3- El "Queso Brie envejecido" (`Aged brie`) incrementa su calidad (`Quality`) a medida que madura con los días
 3.1 - Su calidad (`Quality`) aumenta en `1` unidad cada día
  3.2- Una vez expirada la fecha de venta (`SellIn`) su calidad (`Quality`) aumenta el doble día
4- La calidad de un artículo (`Quality`) no puede superar `50`
5- El artículo `Sulfuras`, es un artículo legendario, no necesitamos venderlo en ninguna fecha (`SellIn`) y tampoco se degrada en (`Quality`)
6- El artículo "Entrada al Backstage" (`Backstage passes`), incrementa su valor (`Quality`) a medida que acerca la fecha del concierto (`SellIn`)
  6.1- Si faltan `10` días o menos para el concierto, la calidad (`Quality`) se incrementa en `2` unidades
  6.2- Si faltan `5` días o menos, la calidad (`Quality`) se incrementa en `3` unidades
  6.3 Una vez pasada fecha del concierto (`SellIn`), la entrada pierde su valor (`Quality`) y cae a `0`

## Tu tarea

Hace poco contratamos a un proveedor de artículos _conjurados mágicamente_.
Esto requiere una actualización del sistema:

- Los artículos conjurados (`Conjured`) degradan su calidad (`Quality`) el doble de rápido que los artículos normales

Siéntete libre de modificar el método `updateQuality` y agregar el código que sea necesario, siempre y cuando todo siga funcionando correctamente. Sin embargo, **no debes modificar la clase `Item` ni sus propiedades**, ya que esta pertenece a un duende que en un ataque de ira te liquidaría de un golpe ya que no cree en la cultura de código compartido.

## Notas finales

Para aclarar: un artículo nunca puede tener una calidad (`Quality`) superior a `50`, sin embargo los objetos `Sulfuras`, siendo un artículo legendario, poseen una calidad inmutable de `80`.
