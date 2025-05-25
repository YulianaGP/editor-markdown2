// HU10: Generación de listas numéricas dinámicamente

// Función para detectar y transformar listas numéricas Markdown en listas <ol>
export function transformarListasNumericas(markdown) {
    const lineas = markdown.split('\n');

    const resultado = [];
    let bloqueLista = [];

    lineas.forEach(linea => {
        const esItemNumerado = /^\d+\.\s+/.test(linea);

        if (esItemNumerado) {
            bloqueLista.push(linea.replace(/^\d+\.\s+/, '')); // Quitamos el número
        } else {
            if (bloqueLista.length > 0) {
                // Convertimos bloque anterior en lista HTML y lo empujamos
                const listaHTML = 
                    `<ol>\n${bloqueLista.map(item => '<li>' + item + '</li>').join('\n')}\n</ol>`;
                resultado.push(listaHTML);
                bloqueLista = [];
            }
            resultado.push(linea); // Línea normal
        }
    });

    // Si el archivo termina dentro de una lista
    if (bloqueLista.length > 0) {
        const listaHTML = 
            `<ol>\n${bloqueLista.map(item => '<li>' + item + '</li>').join('\n')}\n</ol>`;
        resultado.push(listaHTML);
    }

    return resultado.join('\n');
}
