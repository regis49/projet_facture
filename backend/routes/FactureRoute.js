import express from "express";
import { 
    getFactures,
    getFactureById,
    createFacture,
    updateFacture,
    deleteFacture
 } from "../controllers/FactureController.js";


const router = express.Router();

router.get('/factures',getFactures);
router.get('/factures/:id',getFactureById);
router.post('/factures',createFacture);
router.patch('/factures/:id',updateFacture);
router.delete('/factures/:id',deleteFacture);

export default router;