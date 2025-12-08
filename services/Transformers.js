
import { pipeline } from '@xenova/transformers';

export default class Transformers {
  constructor() {
    this.translator = null;
    this.langMap = {
      es: "spa_Latn",
      en: "eng_Latn",
      fr: "fra_Latn",
      it: "ita_Latn",
      de: "deu_Latn",
      pt: "por_Latn"
    };
  }

  async loadTranslator() {
    if (!this.translator) {
      console.log("Cargando modelo...");
      this.translator = await pipeline(
        "translation",
        "Xenova/nllb-200-distilled-600M"
      );
      console.log("Modelo listo");
    }
    return this.translator;
  }

  async translate(text, sourceLang, targetLang) {
    const translator = await this.loadTranslator();
    if (!this.langMap[sourceLang] || !this.langMap[targetLang])
      throw new Error("Idioma no soportado");

    const output = await translator(text, {
      src_lang: this.langMap[sourceLang],
      tgt_lang: this.langMap[targetLang]
    });

    return output[0].translation_text;
  }
}
