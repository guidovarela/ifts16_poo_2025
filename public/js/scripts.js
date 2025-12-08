document.getElementById("btn").onclick = async () => {
  const text = document.getElementById("text").value;
  const source = document.getElementById("source").value;
  const target = document.getElementById("target").value;

  const status = document.getElementById("status");
  const output = document.getElementById("output");

  status.innerHTML = '⏳ Traduciendo... <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
  output.innerText = "";

  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, sourceLang: source, targetLang: target })
  });

  const data = await res.json();
  status.innerText = "✅ Traducción completada!";
  output.innerText = data.translation || data.error;
  
// mostrar botón de copiar solo si hay texto traducido
  if (data.translation) { copyBtn.style.display = "inline-block";}
};

// Evento del botón de copiar
document.getElementById("copyBtn").addEventListener("click", async () => {
  const text = document.getElementById("output").innerText;

  try {
    await navigator.clipboard.writeText(text);
    alert("Texto copiado al portapapeles");
  } catch (err) {
    alert("No se pudo copiar el texto");
  }
});
