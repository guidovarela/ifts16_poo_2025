import { setupCopyButton } from "./copyBtn-module.js";

document.getElementById("btn").onclick = async () => {
  const text = document.getElementById("text").value;
  const source = document.getElementById("source").value;
  const target = document.getElementById("target").value;

  const status = document.getElementById("status");
  const output = document.getElementById("output");

  status.innerHTML = '⏳ Traduciendo... <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
  output.innerText = "";


  const res = await fetch("/api/translate", {
  // const res = await fetch("https://ifts16-poo-2025.onrender.com/api/translate", {
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

//Evento del botón de copiar
setupCopyButton("copyBtn", "copyBtn-2", () => {
  alert("Texto copiado al portapapeles");
});

// document.getElementById("copyBtn").addEventListener("click", async () => {
//   const text = document.getElementById("output").innerText;

//   try {
//     await navigator.clipboard.writeText(text);
//     alert("Texto copiado al portapapeles");
//   } catch (err) {
//     alert("No se pudo copiar el texto");
//   }
// });


// Text generator
import { getDummyText } from './textGenerator.js';

// Evento del botón para generar texto
document.getElementById("generate-text-btn").addEventListener("click", () => {
  const type = document.getElementById("dummy-select").value;
  const textarea = document.getElementById("textGenerated");

  textarea.innerHTML += getDummyText(type);
});