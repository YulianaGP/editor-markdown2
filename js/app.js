// Funciones importadas
import { aplicarFormato, formatoNegrita, formatoCursiva } from "./format.js";
import { transformarListasNumericas } from "./lists.js";
import { transformarBloquesCodigo } from "./blocks.js";

// Paso 1: Seleccionamos los elementos del DOM
const textarea = document.getElementById('markdownInput');
const previewBtn = document.getElementById('previewBtn');
const toggleHeadersBtn = document.getElementById('toggleHeadersBtn');
const previewOutput = document.getElementById('previewOutput');
const contador = document.getElementById('contador');

document.getElementById("btnNegrita").addEventListener("click", () => {
  aplicarFormato(formatoNegrita);
});

document.getElementById("btnCursiva").addEventListener("click", () => {
  aplicarFormato(formatoCursiva);
});

// Paso 2: Botón para generar vista previa
// Botón de vista previa
previewBtn.addEventListener('click', () => {
  const markdownTexto = textarea.value;

  const conListas = transformarListasNumericas(markdownTexto);
  const conBloques = transformarBloquesCodigo(conListas);

  previewOutput.innerHTML = marked.parse(conBloques);
});

// Paso 3: Toggle de contraste para encabezados
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

// Paso 4 adicional: Contador de palabras y caracteres dinámico
textarea.addEventListener('input', () => {
  const texto = textarea.value.trim();

  const palabras = texto.length > 0 ? texto.split(/\s+/).length : 0;
  const caracteres = texto.replace(/\s/g, '').length;

  contador.textContent = `${palabras} ${palabras === 1 ? 'palabra' : 'palabras'} | ${caracteres} caracteres`;
});

// 🧠 Atajos de teclado: Ctrl+B (negrita), Ctrl+I (cursiva)
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "b") {
    e.preventDefault();
    aplicarFormato(formatoNegrita);
  }

  if (e.ctrlKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
    aplicarFormato(formatoCursiva);
  }
});
