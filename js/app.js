// Paso 1: Funciones importadas
import { aplicarFormato, formatoNegrita, formatoCursiva } from "./format.js";
import { transformarListasNumericas } from "./lists.js";
import { transformarBloquesCodigo } from "./blocks.js";

// Paso 2: Seleccionamos de elementos del DOM
const textarea = document.getElementById('markdownInput');
const previewBtn = document.getElementById('previewBtn');
const toggleHeadersBtn = document.getElementById('toggleHeadersBtn');
const previewOutput = document.getElementById('previewOutput');
const contador = document.getElementById('contador');
const toggle = document.getElementById("toggle-tema");

// Paso 3: Comprobación de tema guardado en localStorage
if (localStorage.getItem("tema") === "dark") {
  aplicarTemaOscuro();
  toggle.checked = true;
}

// Paso 4: Aplicar tema oscuro con clases de Tailwind personalizadas
function aplicarTemaOscuro() {
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll("button:not(#toggle-tema)");
  
  // Body - Tema oscuro moderno con gradiente sutil
  document.body.classList.remove("bg-gray-100", "text-gray-800");
  document.body.classList.add("bg-gradient-to-br", "from-slate-900", "via-gray-900", "to-slate-800", "text-gray-100");

  // Header - Elegante con transparencia
  header.classList.remove("bg-white", "shadow-md");
  header.classList.add("bg-slate-800/90", "backdrop-blur-sm", "shadow-xl", "border-b", "border-slate-700");

  // Secciones - Fondo semitransparente
  sections.forEach(section => {
    section.classList.remove("bg-white", "shadow");
    section.classList.add("bg-slate-800/80", "backdrop-blur-sm", "shadow-2xl", "border", "border-slate-700");
  });

  // Textarea - Colores suaves para los ojos
  textarea.classList.remove("border", "focus:ring-blue-500");
  textarea.classList.add("bg-slate-700", "text-gray-100", "border-slate-600", "focus:ring-emerald-500", "focus:border-emerald-500", "placeholder-gray-400");

  // Preview output
  previewOutput.classList.remove("bg-white");
  previewOutput.classList.add("bg-slate-700/50", "text-gray-100");

  // Botones - Colores vibrantes pero elegantes
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

  // Footer
  const footer = document.querySelector("footer");
  footer.classList.remove("text-gray-500");
  footer.classList.add("text-gray-400");

  // Contador
  contador.classList.remove("text-gray-500");
  contador.classList.add("text-gray-300");
}

// Paso 5: Aplicar tema claro con clases de Tailwind personalizadas
function aplicarTemaClaro() {
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll("button:not(#toggle-tema)");
  
  // Body - Tema claro moderno con gradiente sutil
  document.body.classList.remove("bg-gradient-to-br", "from-slate-900", "via-gray-900", "to-slate-800", "text-gray-100");
  document.body.classList.add("bg-gradient-to-br", "from-blue-50", "via-white", "to-indigo-50", "text-gray-800");

  // Header - Limpio y moderno
  header.classList.remove("bg-slate-800/90", "backdrop-blur-sm", "shadow-xl", "border-b", "border-slate-700");
  header.classList.add("bg-white/90", "backdrop-blur-sm", "shadow-lg", "border-b", "border-gray-200");

  // Secciones - Fondo limpio con sombra suave
  sections.forEach(section => {
    section.classList.remove("bg-slate-800/80", "backdrop-blur-sm", "shadow-2xl", "border", "border-slate-700");
    section.classList.add("bg-white/80", "backdrop-blur-sm", "shadow-lg", "border", "border-gray-200");
  });

  // Textarea - Colores frescos
  textarea.classList.remove("bg-slate-700", "text-gray-100", "border-slate-600", "focus:ring-emerald-500", "focus:border-emerald-500", "placeholder-gray-400");
  textarea.classList.add("bg-gray-50", "text-gray-800", "border-gray-300", "focus:ring-blue-500", "focus:border-blue-500", "placeholder-gray-500");

  // Preview output
  previewOutput.classList.remove("bg-slate-700/50", "text-gray-100");
  previewOutput.classList.add("bg-gray-50", "text-gray-800");

  // Botones - Colores vibrantes y modernos
  buttons.forEach(button => {
    if (button.id === "btnNegrita") {
      button.classList.remove("bg-emerald-600", "hover:bg-emerald-700", "shadow-lg", "hover:shadow-emerald-500/25");
      button.classList.add("bg-blue-600", "hover:bg-blue-700", "shadow-md", "hover:shadow-blue-500/25");
    } else if (button.id === "btnCursiva") {
      button.classList.remove("bg-violet-600", "hover:bg-violet-700", "shadow-lg", "hover:shadow-violet-500/25");
      button.classList.add("bg-purple-600", "hover:bg-purple-700", "shadow-md", "hover:shadow-purple-500/25");
    } else if (button.id === "btnLimpiar") {
      button.classList.remove("bg-rose-600", "hover:bg-rose-700", "shadow-lg", "hover:shadow-rose-500/25");
      button.classList.add("bg-red-500", "hover:bg-red-600", "shadow-md", "hover:shadow-red-500/25");
    } else if (button.id === "previewBtn") {
      button.classList.remove("bg-cyan-600", "hover:bg-cyan-700", "shadow-lg", "hover:shadow-cyan-500/25");
      button.classList.add("bg-indigo-600", "hover:bg-indigo-700", "shadow-md", "hover:shadow-indigo-500/25");
    } else if (button.id === "toggleHeadersBtn") {
      button.classList.remove("bg-teal-600", "hover:bg-teal-700", "shadow-lg", "hover:shadow-teal-500/25");
      button.classList.add("bg-emerald-600", "hover:bg-emerald-700", "shadow-md", "hover:shadow-emerald-500/25");
    }
  });

  // Footer
  const footer = document.querySelector("footer");
  footer.classList.remove("text-gray-400");
  footer.classList.add("text-gray-600");

  // Contador
  contador.classList.remove("text-gray-300");
  contador.classList.add("text-gray-600");
}

// Paso 6: Cambio dinámico de tema con persistencia
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    aplicarTemaOscuro();
    localStorage.setItem("tema", "dark");
  } else {
    aplicarTemaClaro();
    localStorage.setItem("tema", "light");
  }
});



// Paso 7: Botón de Negrita 
document.getElementById("btnNegrita").addEventListener("click", () => {
  aplicarFormato(formatoNegrita);
});

// Paso 8: Botón de Cursiva 
document.getElementById("btnCursiva").addEventListener("click", () => {
  aplicarFormato(formatoCursiva);
});

// Paso 9: Botón de limpiar contenido 🧼
document.getElementById('btnLimpiar').addEventListener('click', () => {
  textarea.value = '';
  previewOutput.innerHTML = '';
  contador.textContent = '0 palabras | 0 caracteres';
});


// Paso 10: Botón para generar vista previa
previewBtn.addEventListener('click', () => {
  const markdownTexto = textarea.value;

  const conListas = transformarListasNumericas(markdownTexto);
  const conBloques = transformarBloquesCodigo(conListas);

  previewOutput.innerHTML = marked.parse(conBloques);
});

// Paso 11: Toggle para aplicar contraste visual para encabezados
let contrasteActivo = false;

toggleHeadersBtn.addEventListener('click', () => {
  contrasteActivo = !contrasteActivo;

  // Seleccionamos todos los encabezados del preview
  const encabezados = previewOutput.querySelectorAll('h1, h2, h3, h4, h5, h6');

  encabezados.forEach(h => {
    if (contrasteActivo) {
      h.style.color = '#2563eb'; // azul Tailwind
      h.style.backgroundColor = '#f0f9ff'; // fondo claro
      h.style.padding = '4px';
      h.style.borderRadius = '6px';
    } else {
      // Restauramos estilos por defecto
      h.style.color = '';
      h.style.backgroundColor = '';
      h.style.padding = '';
      h.style.borderRadius = '';
    }
  });
});

// Paso 12: Contador de palabras y caracteres dinámico + Vista previa automática
textarea.addEventListener('input', () => {
  // 🧮 Contador de palabras y caracteres
  const texto = textarea.value.trim();
  const palabras = texto.length > 0 ? texto.split(/\s+/).length : 0;
  const caracteres = texto.replace(/\s/g, '').length;
  contador.textContent = `${palabras} ${palabras === 1 ? 'palabra' : 'palabras'} | ${caracteres} caracteres`;

  // 👁️ Vista previa automática
  const markdownTexto = textarea.value;
  const conListas = transformarListasNumericas(markdownTexto);
  const conBloques = transformarBloquesCodigo(conListas);
  previewOutput.innerHTML = marked.parse(conBloques);
});


// Paso 13: 🧠 Atajos de teclado: Ctrl+B (negrita), Ctrl+I (cursiva) y limpiar
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "b") {
    e.preventDefault();
    // Aplica negrita
    aplicarFormato(formatoNegrita);
  }

  if (e.ctrlKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
    // Aplica cursiva
    aplicarFormato(formatoCursiva);
  }

  if (e.ctrlKey && e.key.toLowerCase() === "l") {
    e.preventDefault();
    // Limpiar contenido
    textarea.value = '';
    previewOutput.innerHTML = '';
    contador.textContent = '0 palabras | 0 caracteres';
  }
});
