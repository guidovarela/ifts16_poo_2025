// dummyTextGenerator.js

const dummyTexts = {
  simple: "Hola, este es un texto de prueba para verificar que el traductor funciona correctamente.",
  tecnologia: "La inteligencia artificial está transformando la forma en que desarrollamos software. Nuevos modelos, como los transformadores, permiten procesar lenguaje natural de manera eficiente y precisa.",
  deportes: "La selección nacional tuvo un rendimiento destacado en el último torneo. Con un equipo renovado y un entrenador experimentado, las expectativas son altas para la próxima competencia internacional.",
  noticia: "El Gobierno confirmó nuevas medidas económicas que entrarán en vigencia la próxima semana. Según los analistas, estas políticas podrían tener un impacto significativo en la actividad local. Los detalles se anunciarán oficialmente durante una conferencia de prensa programada para este viernes."
};

// Función principal que devuelve el texto solicitado
export function getDummyText(type = "simple") {
  return dummyTexts[type] || "No hay texto de prueba disponible.";
}

// (OPCIONAL) Función para obtener un texto aleatorio
export function getRandomDummyText() {
  const keys = Object.keys(dummyTexts);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return dummyTexts[randomKey];
}
