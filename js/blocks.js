// HU3: Resaltado Dinámico de Código

export function transformarBloquesCodigo(markdown) {
  return markdown.replace(/```([\s\S]*?)```/g, (match, codigo) => {
    const codigoEscapado = codigo
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre class="highlight"><code>${codigoEscapado}</code></pre>`;
  });
}
