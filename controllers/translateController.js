
import Transformers from '../services/Transformers.js';
const transformer = new Transformers();

export default {
  async translate(req, res) {
    try {
      const { text, sourceLang, targetLang } = req.body;
      const result = await transformer.translate(text, sourceLang, targetLang);
      res.json({ translation: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}
