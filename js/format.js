// HU2: Formateo Rápido de Texto - Aplicar negrita/cursiva al texto seleccionado

// Función de orden superior
export function aplicarFormato(callback) {
    const textarea = document.getElementById("markdownInput");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (!selectedText) return;

    const nuevoTexto = callback(selectedText);

    // Reemplazar el texto seleccionado por el nuevo
    textarea.setRangeText(nuevoTexto, start, end, "end");
    textarea.focus();
}

// Callbacks para negrita y cursiva
export const formatoNegrita = (texto) => `**${texto}**`;
export const formatoCursiva = (texto) => `*${texto}*`;
