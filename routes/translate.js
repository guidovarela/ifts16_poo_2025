
import express from 'express';
import translateController from '../controllers/translateController.js';
const router = express.Router();
router.post('/', translateController.translate);
export default router;
