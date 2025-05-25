// ===============================
// ANÁLISIS DEL EDITOR DE MARKDOWN
// Proyecto Módulo 3 - Laboratorios 9-12
// ===============================

// PASO 1: IMPORTACIONES MODULARES
// Lab 10: Funciones y Callbacks - Modularización del código
// Se importan funciones especializadas desde módulos externos para formateo y transformación
import { aplicarFormato, formatoNegrita, formatoCursiva } from "./format.js";
import { transformarListasNumericas } from "./lists.js";
import { transformarBloquesCodigo } from "./blocks.js";

// PASO 2: SELECCIÓN DE ELEMENTOS DOM
// Lab 9: DOM como API de Objetos - Manipulación avanzada del DOM
// Se obtienen referencias a todos los elementos HTML necesarios para el editor
const textarea = document.getElementById('markdownInput');
const previewBtn = document.getElementById('previewBtn');
const toggleHeadersBtn = document.getElementById('toggleHeadersBtn');
const previewOutput = document.getElementById('previewOutput');
const contador = document.getElementById('contador');
const toggle = document.getElementById("toggle-tema");

// PASO 3: PERSISTENCIA DE TEMA
// Lab 9: DOM - Manipulación inicial del DOM según estado guardado
// Verifica si hay un tema guardado en localStorage y lo aplica automáticamente
if (localStorage.getItem("tema") === "dark") {
  aplicarTemaOscuro();
  toggle.checked = true;
}

// PASO 4: FUNCIÓN APLICAR TEMA OSCURO
// Lab 9: DOM como API de Objetos - Transformación masiva de clases CSS
// Historia de Usuario 1: Cambio de Tema Visual
// Como usuario, quiero cambiar entre tema claro y oscuro para adaptar la interfaz a mis preferencias visuales
function aplicarTemaOscuro() {
  // Selecciona elementos específicos del DOM para modificar
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll("button:not(#toggle-tema)");
  
  // Manipula clases CSS dinámicamente usando classList
  // Body - Gradiente oscuro moderno
  document.body.classList.remove("bg-gray-100", "text-gray-800");
  document.body.classList.add("bg-gradient-to-br", "from-slate-900", "via-gray-900", "to-slate-800", "text-gray-100");

  // Header con transparencia y blur
  header.classList.remove("bg-white", "shadow-md");
  header.classList.add("bg-slate-800/90", "backdrop-blur-sm", "shadow-xl", "border-b", "border-slate-700");

  // Secciones con fondo semitransparente
  sections.forEach(section => {
    section.classList.remove("bg-white", "shadow");
    section.classList.add("bg-slate-800/80", "backdrop-blur-sm", "shadow-2xl", "border", "border-slate-700");
  });

  // Textarea - Colores optimizados para tema oscuro
  textarea.classList.remove("border", "focus:ring-blue-500");
  textarea.classList.add("bg-slate-700", "text-gray-100", "border-slate-600", "focus:ring-emerald-500", "focus:border-emerald-500", "placeholder-gray-400");

  // Preview output
  previewOutput.classList.remove("bg-white");
  previewOutput.classList.add("bg-slate-700/50", "text-gray-100");

  // Botones - Cada uno con colores específicos y efectos de sombra
  buttons.forEach(button => {
    if (button.id === "btnNegrita") {
      button.classList.remove("bg-blue-500", "hover:bg-blue-600");
      button.classList.add("bg-emerald-600", "hover:bg-emerald-700", "shadow-lg", "hover:shadow-emerald-500/25");
    } else if (button.id === "btnCursiva") {
      button.classList.remove("bg-purple-500", "hover:bg-purple-600");
      button.classList.add("bg-violet-600", "hover:bg-violet-700", "shadow-lg", "hover:shadow-violet-500/25");
    } else if (button.id === "btnLimpiar") {
      button.classList.remove("bg-red-500", "hover:bg-red-600");
      button.classList.add("bg-rose-600", "hover:bg-rose-700", "shadow-lg", "hover:shadow-rose-500/25");
    } else if (button.id === "previewBtn") {
      button.classList.remove("bg-blue-600", "hover:bg-blue-700");
      button.classList.add("bg-cyan-600", "hover:bg-cyan-700", "shadow-lg", "hover:shadow-cyan-500/25");
    } else if (button.id === "toggleHeadersBtn") {
      button.classList.remove("bg-green-600", "hover:bg-green-700");
      button.classList.add("bg-teal-600", "hover:bg-teal-700", "shadow-lg", "hover:shadow-teal-500/25");
    }
  });

  // Footer y contador con colores apropiados
  const footer = document.querySelector("footer");
  footer.classList.remove("text-gray-500");
  footer.classList.add("text-gray-400");

  contador.classList.remove("text-gray-500");
  contador.classList.add("text-gray-300");
}

// PASO 5: FUNCIÓN APLICAR TEMA CLARO
// Lab 9: DOM como API de Objetos - Restauración de estilos por defecto
// Contrapartida de la función anterior, restaura el tema claro
function aplicarTemaClaro() {
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll("button:not(#toggle-tema)");
  
  // Restaura colores del tema claro
  document.body.classList.remove("bg-gradient-to-br", "from-slate-900", "via-gray-900", "to-slate-800", "text-gray-100");
  document.body.classList.add("bg-gradient-to-br", "from-blue-50", "via-white", "to-indigo-50", "text-gray-800");

  header.classList.remove("bg-slate-800/90", "backdrop-blur-sm", "shadow-xl", "border-b", "border-slate-700");
  header.classList.add("bg-white/90", "backdrop-blur-sm", "shadow-lg", "border-b", "border-gray-200");

  sections.forEach(section => {
    section.classList.remove("bg-slate-800/80", "backdrop-blur-sm", "shadow-2xl", "border", "border-slate-700");
    section.classList.add("bg-white/80", "backdrop-blur-sm", "shadow-lg", "border", "border-gray-200");
  });

  textarea.classList.remove("bg-slate-700", "text-gray-100", "border-slate-600", "focus:ring-emerald-500", "focus:border-emerald-500", "placeholder-gray-400");
  textarea.classList.add("bg-gray-50", "text-gray-800", "border-gray-300", "focus:ring-blue-500", "focus:border-blue-500", "placeholder-gray-500");

  previewOutput.classList.remove("bg-slate-700/50", "text-gray-100");
  previewOutput.classList.add("bg-gray-50", "text-gray-800");

  // Restaura colores originales de botones
  buttons.forEach(button => {
    if (button.id === "btnNegrita") {
      button.classList.remove("bg-emerald-600", "hover:bg-emerald-700", "shadow-lg", "hover:shadow-emerald-500/25");
      button.classList.add("bg-blue-600", "hover:bg-blue-700", "shadow-md", "hover:shadow-blue-500/25");
    }
    // ... resto de botones con lógica similar
  });

  const footer = document.querySelector("footer");
  footer.classList.remove("text-gray-400");
  footer.classList.add("text-gray-600");

  contador.classList.remove("text-gray-300");
  contador.classList.add("text-gray-600");
}

// PASO 6: EVENT LISTENER PARA CAMBIO DE TEMA
// Lab 11: Event Handling Básico - Manejo dinámico de eventos de cambio
// Detecta cambios en el toggle y aplica el tema correspondiente con persistencia
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    aplicarTemaOscuro();
    localStorage.setItem("tema", "dark");
  } else {
    aplicarTemaClaro();
    localStorage.setItem("tema", "light");
  }
});

// PASO 7: BOTÓN DE NEGRITA
// Lab 11: Event Handling + Lab 10: Callbacks
// Historia de Usuario 2: Formateo Rápido de Texto
// Como editor, quiero aplicar formato de negrita al texto seleccionado para enfatizar contenido importante
document.getElementById("btnNegrita").addEventListener("click", () => {
  aplicarFormato(formatoNegrita); // Usa callback importado
});

// PASO 8: BOTÓN DE CURSIVA
// Lab 11: Event Handling + Lab 10: Callbacks
// Complementa la historia de usuario de formateo, aplicando cursivas
document.getElementById("btnCursiva").addEventListener("click", () => {
  aplicarFormato(formatoCursiva); // Usa callback importado
});

// PASO 9: BOTÓN LIMPIAR CONTENIDO
// Lab 11: Event Handling Básico - Evento de limpieza
// Historia de Usuario 3: Limpieza Rápida del Editor
// Como usuario, quiero limpiar todo el contenido del editor para empezar de nuevo
document.getElementById('btnLimpiar').addEventListener('click', () => {
  textarea.value = '';
  previewOutput.innerHTML = '';
  contador.textContent = '0 palabras | 0 caracteres';
});

// PASO 10: VISTA PREVIA CON MANEJO DE ERRORES
// Lab 12: Excepciones en JavaScript - Validación robusta con try/catch
// Lab 10: Funciones - Transformaciones con callbacks
// Historia de Usuario 4: Vista Previa Validada
// Como redactor, quiero generar vista previa del Markdown con validación para evitar errores
previewBtn.addEventListener('click', () => {
  const markdownTexto = textarea.value.trim();

  try {
    // Lab 12: Validación con throw personalizado
    if (markdownTexto === '') {
      throw new Error("⚠️ El campo de texto está vacío. Escribe algo en Markdown para previsualizar.");
    }

    // Validaciones de estructura Markdown usando RegEx
    const encabezadoValido = /^#{1,6} .+/m.test(markdownTexto);
    const listaValida = /^(\*|\-|\+) .+/m.test(markdownTexto);
    const codigoValido = /```[\s\S]*?```/.test(markdownTexto);

    if (!encabezadoValido && !listaValida && !codigoValido) {
      throw new Error("⚠️ El texto no contiene elementos Markdown reconocibles como encabezados, listas o bloques de código.");
    }

    // Lab 10: Aplicación de callbacks para transformaciones
    const conListas = transformarListasNumericas(markdownTexto);
    const conBloques = transformarBloquesCodigo(conListas);

    // Lab 9: Manipulación del DOM para mostrar resultado
    previewOutput.innerHTML = marked.parse(conBloques);

  } catch (error) {
    // Lab 12: Manejo de errores sin detener la aplicación
    previewOutput.innerHTML = `<p class="text-red-600 font-semibold">${error.message}</p>`;
  }
});

// PASO 11: TOGGLE CONTRASTE DE ENCABEZADOS
// Lab 11: Event Handling + Lab 9: Manipulación DOM
// Historia de Usuario 5: Mejora Visual de Encabezados
// Como lector, quiero resaltar los encabezados para mejorar la legibilidad del contenido
let contrasteActivo = false;

toggleHeadersBtn.addEventListener('click', () => {
  contrasteActivo = !contrasteActivo;

  // Lab 9: Selección y manipulación directa de elementos específicos
  const encabezados = previewOutput.querySelectorAll('h1, h2, h3, h4, h5, h6');

  encabezados.forEach(h => {
    if (contrasteActivo) {
      // Aplica estilos inline para contraste visual
      h.style.color = '#2563eb';
      h.style.backgroundColor = '#f0f9ff';
      h.style.padding = '4px';
      h.style.borderRadius = '6px';
    } else {
      // Restaura estilos por defecto
      h.style.color = '';
      h.style.backgroundColor = '';
      h.style.padding = '';
      h.style.borderRadius = '';
    }
  });
});

// PASO 12: CONTADOR Y VISTA PREVIA AUTOMÁTICA
// Lab 11: Event Handling - Evento input en tiempo real
// Lab 12: Excepciones - Manejo de errores en tiempo real
// Historia de Usuario 6: Feedback en Tiempo Real
// Como escritor, quiero ver estadísticas del texto y vista previa automática mientras escribo
textarea.addEventListener('input', () => {
  // Contador de palabras y caracteres
  const texto = textarea.value.trim();
  const palabras = texto.length > 0 ? texto.split(/\s+/).length : 0;
  const caracteres = texto.replace(/\s/g, '').length;
  contador.textContent = `${palabras} ${palabras === 1 ? 'palabra' : 'palabras'} | ${caracteres} caracteres`;

  // Vista previa automática con validación
  try {
    if (texto === "") {
      throw new Error("⚠️ No se ingresó contenido.");
    }

    // Lab 10: Aplicación de callbacks de transformación
    const conListas = transformarListasNumericas(texto);
    const conBloques = transformarBloquesCodigo(conListas);
    previewOutput.innerHTML = marked.parse(conBloques);

  } catch (error) {
    // Lab 12: Manejo silencioso de errores sin interrumpir la experiencia
    previewOutput.innerHTML = `<p class="text-red-600 font-semibold">${error.message}</p>`;
    console.error(error);
  }

  // Persistencia automática del contenido
  localStorage.setItem('markdownGuardado', textarea.value);
});

// PASO 13: ATAJOS DE TECLADO
// Lab 11: Event Handling - Eventos de teclado complejos
// Historia de Usuario 7: Productividad con Atajos
// Como usuario avanzado, quiero usar atajos de teclado para acciones rápidas y mejorar mi productividad
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "b") {
    e.preventDefault();
    aplicarFormato(formatoNegrita); // Lab 10: Callback
  }

  if (e.ctrlKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
    aplicarFormato(formatoCursiva); // Lab 10: Callback
  }

  if (e.ctrlKey && e.key.toLowerCase() === "l") {
    e.preventDefault();
    // Limpieza rápida con atajo
    textarea.value = '';
    previewOutput.innerHTML = '';
    contador.textContent = '0 palabras | 0 caracteres';
  }
});

// PASO 14: RECUPERACIÓN DE CONTENIDO GUARDADO
// Lab 11: Event Handling - Evento de carga de página
// Historia de Usuario 8: Persistencia de Sesión
// Como usuario, quiero que mi contenido se mantenga guardado entre sesiones para no perder mi trabajo
window.addEventListener('DOMContentLoaded', () => {
  const contenidoGuardado = localStorage.getItem('markdownGuardado');
  if (contenidoGuardado) {
    textarea.value = contenidoGuardado;
  }
});

// =====================================
// RESUMEN DE HISTORIAS DE USUARIO IMPLEMENTADAS:
// =====================================
// HU1: Cambio de Tema Visual - Alternar entre tema claro/oscuro
// HU2: Formateo Rápido de Texto - Aplicar negrita/cursiva al texto seleccionado  
// HU3: Limpieza Rápida del Editor - Limpiar todo el contenido
// HU4: Vista Previa Validada - Generar preview con validación de errores
// HU5: Mejora Visual de Encabezados - Resaltar encabezados para mejor legibilidad
// HU6: Feedback en Tiempo Real - Contador de palabras y preview automático
// HU7: Productividad con Atajos - Atajos de teclado para acciones rápidas
// HU8: Persistencia de Sesión - Guardar/recuperar contenido automáticamente
// HU9: Resaltado Dinámico de Código
// HU10: Generación de listas numéricas dinámicamente

// =====================================
// INTEGRACIÓN DE LABORATORIOS:
// =====================================
// Lab 9: Manipulación avanzada del DOM, selección de elementos, modificación de clases CSS
// Lab 10: Modularización con imports, uso de callbacks para formateo y transformaciones
// Lab 11: Manejo completo de eventos (click, input, keydown, DOMContentLoaded)  
// Lab 12: Validación robusta con try/catch/throw, manejo de errores sin interrumpir UX