# 📝 Editor Markdown en Vivo (Versión Avanzada)

Este proyecto es un Editor Markdown en Vivo que permite al usuario escribir texto con sintaxis Markdown, generar una vista previa en HTML y aplicar estilos dinámicos. Soporta negrita, cursiva, encabezados, listas numeradas, bloques de código resaltado y atajos de teclado para formato rápido.

---

## 🧠 Paradigma de Programación

Este proyecto combina múltiples enfoques de programación en JavaScript:

### ✅ Programación Imperativa
Manipula el DOM directamente para capturar eventos y actualizar la vista:

- `getElementById()`, `addEventListener()`, `innerHTML`, etc.
- Lógica centrada en cómo se hacen las cosas paso a paso.

### ✅ Programación Funcional
Uso de funciones puras y reutilizables para transformar texto:

- **Funciones de orden superior** como `aplicarFormato(callback)`.
- **Callbacks** para aplicar formato (`formatoNegrita`, `formatoCursiva`).
- **Transformadores puros**: `transformarListasNumericas()`, `transformarBloquesCodigo()`.

### ✅ Eventos de Teclado (Interacción avanzada)
Escucha eventos globales como `keydown` para permitir atajos de teclado (Ctrl+B, Ctrl+I), mejorando la experiencia del usuario.

### ✅ Uso de Librerías
Se usa `marked` como motor de conversión Markdown → HTML, lo cual simplifica y estandariza el renderizado.

---

## ✅ Historias de Usuario

- ✅ **HU1**: Como usuario, quiero escribir texto Markdown en un textarea, para generar contenido estructurado.
- ✅ **HU2**: Como usuario, quiero ver una vista previa de mi Markdown convertido a HTML con un solo clic.
- ✅ **HU3**: Como usuario, quiero aplicar un estilo de contraste a los encabezados de la vista previa, para distinguir mejor los títulos.
- ✅ **HU4**: Como usuario, quiero ver un contador de palabras y caracteres mientras escribo, para llevar control de mi contenido.
- ✅ **HU5**: Como usuario, quiero una interfaz clara, responsiva y amigable, para poder trabajar desde distintos dispositivos.
- ✅ **HU6**: Como usuario, quiero poder aplicar negrita y cursiva con botones visuales, para dar formato rápidamente al texto.
- ✅ **HU7**: Como usuario, quiero que se transformen correctamente las listas numeradas escritas como "1) ítem", para que se vean bien en HTML.
- ✅ **HU8**: Como usuario, quiero que los bloques de código entre triple backticks (```) se muestren con formato especial, para facilitar la lectura del código.
- ✅ **HU9** *(Logro adicional)*: Como usuario, quiero aplicar negrita (Ctrl+B) o cursiva (Ctrl+I) usando atajos de teclado, para trabajar más eficientemente.

---

## 🔁 Comparación: Primer Editor vs Versión Avanzada

| Característica                         | Primer Editor                    | Versión Avanzada                     |
|---------------------------------------|----------------------------------|--------------------------------------|
| Paradigma principal                   | Imperativo + DOM                 | Imperativo + Funcional + Eventos     |
| Librería `marked`                     | ✅                               | ✅                                    |
| Aplicación de formato (negrita/cursiva) | ❌ Solo por sintaxis manual       | ✅ Por botón y por atajo de teclado  |
| Transformación de listas (`1)`)       | ❌                               | ✅                                    |
| Transformación de bloques de código   | ❌                               | ✅ Triple backtick → `<pre><code>`   |
| Atajos de teclado (Ctrl+B, Ctrl+I)    | ❌                               | ✅                                    |
| Modularización del código             | ❌ (código en un solo archivo)    | ✅ (`app.js`, `format.js`, etc.)     |

---

## 📌 Conclusión

Este proyecto representa un paso importante en la evolución del desarrollo web:

- Transición de una app puramente imperativa a una combinación rica con programación funcional.
- Mejora de la experiencia del usuario con transformaciones inteligentes y atajos de teclado.
- Aplicación de principios como separación de responsabilidades, modularización y eventos avanzados.

---

🎯 Desarrollado como parte del **Módulo 3: Funciones y Callbacks en JavaScript**.
