# APIwithNode

Este códico forma parte de un ejercicio consiste en desarrollar un API según estas pautas:

La idea es crear un muro donde la gente pueda poner frases y que el resto de la gente las pueda ver”. Además de poder “marcar como favoritas las notas/frases” y poder listar las que están marcadas como favoritas.

De forma que los usuarios puedan:

- Llamar al API, es decir, quiero poder tener un servidor local al que hacer una llamada HTTP y que me devuelva algo.
- Llamar al API para crear notas.
- Llamar al API para consultar las notas.
- Llamar al API para consultar una sóla nota.
- Llamar al API para marcar favorita una nota.
- Llamar al API para consultar las notas marcadas como favoritas.

- En cuanto a tecnologías:Tiene que ser desarrollado en Node.js.

- Tiene que usarse un sistema de control de versiones GIT.

- Se recomendaría realizar pruebas unitarias sobre el proyecto.

---------------------------------
SOBRE LA PARTE TÉCNICA MENCIONAR:

Se ha usado Node.js y las dependencias Body Parser y Express; para parsear el Json y para crear el servidor y hacer llamadas http.

Se han usado tres métodos que son el GET (para traer la información), el POST (para crear las notas) y el PUT (para modificar una nota y ponerla como favorita).
