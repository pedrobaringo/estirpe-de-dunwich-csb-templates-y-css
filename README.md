# Fichas para Estirpe de Dunwich en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Añadir estilos CSS](#añadir-estilos-css)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades)
  - [Pestaña de Manifestación](#pestaña-de-manifestación)
  - [Pestaña de Trasfondo y Notas](#pestaña-de-trasfondo-y-notas)
- [Crear un PNJ](#crear-un-pnj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades-1)
  - [Pestaña de Combate](#pestaña-de-combate-1)
  - [Pestaña de Descripción y Notas](#pestaña-de-descripción-y-notas-1)
- [Crear Objetos](#crear-objetos)
- [Hacer tiradas](#hacer-tiradas)
- [Iniciativa y Combate](#iniciativa-y-combate)
- [Posibles problemas](#posibles-problemas)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego Estirpe de Dunwich para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente enlace: 

[![Video del tutorial](http://img.youtube.com/vi/2LBxsz_r_Wg/0.jpg)](http://www.youtube.com/watch?v=2LBxsz_r_Wg "Tutorial Foundry-Troubleshooters")


## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/releases/latest/download/module.json

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/b2025a6c-8129-479f-9e15-796e429dd632)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás dos: "Templates_Actores" y "Templates_Objetos".
Es importante que importes primero los Objetos y después los Actores, pero sobretodo que se mantenga el ID del documento como se ve en la imagen:

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/6fa9c0c2-1936-4db6-99b2-7e80f54e7172)

## Añadir estilos CSS
Para que el estilo de las fichas y mensajes sean más parecidos al libro debemos ir a Configurar Ajustes --> Custom System Builder y allí rellenarel campo CSS Style file con "modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/EstirpeStyles.css", sin las comillas. Y ya que estamos en este menú, aprovechamos para cambiar la Initiative formula a "iniciativa" (sin las comillas y en minuscula) y en Roll Icons ponemos "dice" (tambien sin comillas).

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/09cf2f26-2b2c-426d-8433-28be37e88215)

## Crear un PJ
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/1286067f-37f3-48fb-8e5b-d860ce6dea84)

Aqui tenemos que seleccionar en Template una de las dos templates llamadas PJ_Template segun el siguiente criterio:
* Si vamos a **usar el módulo Dice so Nice** (https://foundryvtt.com/packages/dice-so-nice) para ver las tiradas con dados 3D, debemos seleccionar la template **"PJ_Template_DSN"**. Sin el módulo no funcionarán las tiradas con esta template.
* Si **no vamos a usar ese módulo**, debemos seleccionar la template **"PJ_Template"**.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/00175060-33d6-471c-a52a-761bed0f16da)

En la parte de arriba se pueden poner la descripción y los puntos de experiencia y los costes de avances.

### Pestaña de Habilidades
En la pestaña de habilidades se pueden modificar los valores de las habilidades, escribir las especialidades, añadir las armas cuerpo a cuerpo y a distancia arrastrandolas desde objetos y masrcar las casillas de vitalidad e incapacitación. Tambien está el apartado de iniciativa que comentaremos más adelante.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/a5e242b5-5582-4c9e-8046-62819e655e0b)

### Pestaña de Manifestación
En esta pestaña podemos describir la Manifestación de Yog-Sothoth de nuestro personaje, modificar los factores humano y primigenio y marcar los pasos hacia el umbral con sus hitos y deformidades pertinentes. Tambien tenemos la tabla de "Magnitudes de las Manifestaciones".

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/4a53bfe9-fbe7-4d12-a567-0582a6b46408)

### Pestaña de Trasfondo y Notas
En esta última pestaña podemos rellenar el trasfondo del PJ y tomar notas.

![image](https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css/assets/148097688/271f5368-3dd2-4899-b524-e2a2efb093fe)

## Crear un PNJ
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/8968dfd6-5c10-4106-93c1-46780300058a)

Aqui tenemos que seleccionar en Template una de las dos templates llamadas PNJ_Template segun el siguiente criterio:
* Si vamos a **usar el módulo Dice so Nice** (https://foundryvtt.com/packages/dice-so-nice) para ver las tiradas con dados 3D, debemos seleccionar la template **"PNJ_Template_DSN"**. Sin el módulo no funcionarán las tiradas con esta template.
* Si **no vamos a usar ese módulo**, debemos seleccionar la template **"PNJ_Template"**.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/1879812a-426b-49f7-a77e-97129bfce476)

En la parte de arriba se pueden poner la vitalidad máxima y actual y podemos asignarle la iniciativa si es un valor fijo o hacer check en la casilla de encima si la iniciativa es con una tirada de Acción.

Tambien apareceran aqui las etiquetas que arrastremos a este personaje y la casilla de Dar la Vuelta a las tiradas si le arrastramos la correspondiente etiqueta (que está en la carpeta "Etiquetas Adversarios").

### Pestaña de Habilidades
En esta pestaña podemos poner los valores de ha habilidad básica y Especialista así como añadir más habilidades con el botón +.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/adc9089d-7058-4893-9c86-81908d5062d4)

### Pestaña de Combate
En esta pestaña podeis añadir las armas con el botón + con todas sus estadisticas, podeis definir el valor de defensa si tiene así como la protección.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/ea1d1cb3-49ce-4156-be2c-23ce75eaba0a)

### Pestaña de Descripción y Notas
En esta última pestaña podemos tomar notas o describir al personaje.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/7670cc6d-3ca5-4b7a-9203-76fd6ddf92af)

## Crear Objetos
Si hacemos click en crear objeto y elegimos el tipo "equippableItem" podremos crear objetos de todos los tipos usando las templates.
Los tipos son:
* **Armas_CaC_Template**: Para armas Cuerpo a Cuerpo, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/032ce1b5-5de8-4cff-9050-ca47a1a1ccd5)

* **Armas_Dist_Template**: Para armas a Distancia, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/cf9ecdba-2816-4545-b2bf-cc294ce6667e)

  
* **Complicacion_Template**: Para las Complicaciones, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/5d88451e-87c1-4c0e-8cc0-255f2abea010)


* **Talento_Template**: Para los Talentos, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/e5b862ba-1c5a-43c9-a032-1d46e63298ae)


* **Estados_Template**: Para los Estados, sirve para PJs y PNJs.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/ebeb889d-d5a1-4942-bf53-60948138272d)


* **Etiquetas_Template**: Para las etiquetas de los PNJs.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/33e16ba9-d43c-479c-a3da-991a1955bbd5)

## Hacer tiradas
Para hacer tiradas simplemente se tiene que hacer click en la habilidad o icono de dado correspondiente o en el botón en el caso de ataques. Saldrá el mensaje en el chat con los botones para dar la vuelta a la tirada gastando puntos de Historia (se restan automaticamente) y el Daño si corresponde.
Al clickar en los botones se genera un nuevo mensaje con el resultado correspondiente a la acción. Si sale un resultado de Karma se suma automaticamente el punto de Historia a la ficha del Personaje.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/8e6f3f8f-ca9e-4579-8fee-6a63a356e79b)
![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/e4918cd5-30e8-471e-b3cc-bae567ec225a)

Para aplicar un modificador a la tirada, se deberá pulsar la tecla "Mayus" mientras se hace click. Aparecerá un dialogo donde podemos asignar el modificador positivo o negativo. Esto funciona solo en las tiradas donde puede haber modificador.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/14c370ba-017a-4d69-b5e8-5594f2e2bbea)

## Iniciativa y Combate
Antes de empezar un combate, todos los PJs y los PNJs que tengan de Iniciativa una tirada de acción, deberan hacer click en su iniciativa para que se lancen los dados y se calcule.

Solo cuando lo hayan hecho todos se podrá "tirar" la iniciativa en el menú de "Encuentros de Combate". Se ordenarán los actores de mayor iniciativa a menor.

Como caso particular, si se hace una acción "¡PAM! - Disparo preciso" la iniciativa en la ficha bajará en 2 puntos automaticamente, pero se tendrá que volver a calcular para el siguiente turno en "Encuentros de Combate".

En el caso de "¡RATATATA! - Vaciar el Arma" saldrán dos botones de daño, el normal que se aplica si impactas a varios personajes y el "Daño a un solo objetivo" que añade dos dados al daño automaticamente si solo te concentras en un objetivo.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/99d65377-8e29-4f49-bba6-410e97babd60)

## Posibles problemas
Debido a como esta creado el sistema Custom System Builder, tuve que implementar los botones del chat de una forma poco óptima. Esto puede provocar que algunas veces no aparezcan los botones o aparezcan en mensajes anteriores (creo que puede ser más habitual con conexiones lentas, pero no he podido probarlo).

Este problema no afecta a los resultados de las tiradas y si se quiere dar la vuelta a la tirada se puede hacer mentalmente y restar los puntos de Historia manualmente en la ficha.

En el caso que sucediese en una tirada de combate y no apareciese el botón de Daño, se puede hacer la tirada usando en el chat la siguiente formula (explotan los 6 y cuenta como éxitos los valores superiores o iguales a 4) sustituyendo Y por el número de dados de daño que se tirarian: **Yd6x6cs>=4** 
