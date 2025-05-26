# Markdown versión final

## 🧠 Paradigmas Utilizados

- **Imperativo:**  
  Se usa en la manipulación directa del DOM y estructuras de control (`forEach`, `if`, `addEventListener`).

- **Funcional:**  
  Aplicación clara de funciones como callbacks (`aplicarFormato(formatoNegrita)`), uso de funciones puras importadas (`formatoNegrita`, `formatoCursiva`).

- **Orientado a Objetos (DOM API):**  
  Acceso y manipulación del DOM a través de métodos y propiedades (`classList`, `querySelectorAll`, `innerHTML`, `value`), lo cual simula el uso de objetos reales.

- **Manejo de Excepciones:**  
  Bien implementado con `try/catch` y `throw new Error()` para validar entradas vacías y estructuras Markdown.

---

## ✅ Desempeño por Laboratorio

### 🔹 Lab 09: DOM como API de Objetos

- ✔️ Selección clara y precisa de elementos DOM.  
- ✔️ Manipulación masiva y semántica de clases CSS.  
- ✔️ Aplicación de estilos oscuros y claros con efectos visuales bien diseñados (gradientes, blur, sombras).  

### 🔹 Lab 10: Funciones y Callbacks

- ✔️ Separación de responsabilidades con módulos (`format.js`, `lists.js`, `blocks.js`).  
- ✔️ Uso de funciones como argumentos (`aplicarFormato(formatoNegrita)`).  
- ✔️ Diseño escalable, ideal para añadir más formatos sin duplicar lógica.  

### 🔹 Lab 11: Manejo de Eventos

- ✔️ Uso correcto de `addEventListener` para botones con lógica separada.  
- ✔️ Implementación de un toggle con persistencia de tema (`localStorage`), muy bien logrado.  
- ✔️ Limpieza del contenido bien estructurada y actualiza la vista previa + contador.  

### 🔹 Lab 12: Manejo de Excepciones

- ✔️ Uso de `try/catch` y `throw` personalizado para validar contenido vacío.  
- ✔️ Preparación para validaciones más complejas usando expresiones regulares (`RegEx`).  

---

## ✅ Resumen de Historias de Usuario Implementadas

✅ **HU1: Cambio de Tema Visual**  
Alternar entre tema claro y oscuro para una mejor experiencia de usuario.

✅ **HU2: Formateo Rápido de Texto**  
Aplicar formato de negrita y cursiva al texto seleccionado de forma inmediata.

✅ **HU3: Limpieza Rápida del Editor**  
Permitir al usuario borrar rápidamente todo el contenido del editor.

✅ **HU4: Vista Previa Validada**  
Generar una vista previa en HTML a partir del texto Markdown, validando errores de entrada.

✅ **HU5: Mejora Visual de Encabezados**  
Aplicar estilos visuales diferenciados a los encabezados para mayor legibilidad.

✅ **HU6: Feedback en Tiempo Real**  
Contador de palabras y generación automática de la vista previa mientras se escribe.

✅ **HU7: Productividad con Atajos**  
Implementación de atajos de teclado para funciones clave como formato o limpieza.

✅ **HU8: Persistencia de Sesión**  
Guardar y recuperar automáticamente el contenido del editor con localStorage.

✅ **HU9: Resaltado Dinámico de Código**  
Mejorar la legibilidad del código con estilos destacados en bloques de código.

✅ **HU10: Generación de Listas Numéricas Dinámicamente**  
Permitir al usuario crear listas ordenadas de forma automática desde el editor.

---

## ✅ Conclusión

A lo largo de los Laboratorios 9 al 12, el proyecto evolucionó desde una simple interfaz hasta convertirse en un **Editor Avanzado de Markdown en Vivo**, completamente funcional y robusto. Cada laboratorio aportó una capa de complejidad: desde manipulación básica del DOM, pasando por interactividad avanzada, hasta validación y manejo de errores. Esta evolución progresiva no solo reforzó los principios fundamentales de JavaScript, sino que también demostró cómo un desarrollo incremental permite construir aplicaciones complejas de forma ordenada y mantenible.

---
## 🏁 Conclusión y Calificación

| **Criterio**                    | **Cumplimiento** |
|--------------------------------|------------------|
| DOM Avanzado                   | ✅ Excelente      |
| Modularización Funcional       | ✅ Excelente      |
| Callbacks Personalizados       | ✅ Excelente      |
| Eventos Bien Aplicados         | ✅ Excelente      |
| Excepciones con Validación     | ✅ Excelente      |
| Código Claro y Comentado       | ✅ Excelente      |
| Historia de Usuario Cubierta   | ✅ Todas las visibles |
| Potencial de Escalabilidad     | ✅ Alto           |


---

🎯 Desarrollado como parte del **Módulo 3 (code201)**.
