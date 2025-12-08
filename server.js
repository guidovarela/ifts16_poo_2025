import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import translationRoutes from "./routes/translate.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Necesario para obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS (si ya queda todo en Render, podés desactivarlo)
app.use(cors());

// JSON
app.use(express.json());

// Servir contenido estático del public
app.use(express.static(path.join(__dirname, "public")));

// API
app.use("/api/translate", translationRoutes);

// Ruta catch-all para SPA / pages directas
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
