// copyModule.js

export function setupCopyButton(buttonId, targetId, callback = null) {
  const button = document.getElementById(buttonId);
  const target = document.getElementById(targetId);

  if (!button) {
    console.error(`No se encontró el botón con ID: ${buttonId}`);
    return;
  }

  if (!target) {
    console.error(`No se encontró el elemento con ID: ${targetId}`);
    return;
  }

  button.addEventListener("click", async () => {
    const textToCopy = target.innerText || target.value || "";

    if (!textToCopy.trim()) {
      alert("No hay texto para copiar.");
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);

      // Callback opcional (ej: mostrar mensaje elegante)
      if (callback) callback();

      console.log("Texto copiado:", textToCopy);
    } catch (err) {
      console.error("Error al copiar:", err);
      alert("No se pudo copiar el texto.");
    }
  });
}
