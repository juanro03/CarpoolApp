import express from "express";
import viajesService from "../services/viajes.service.js";


const router = express.Router();


router.get("/traer", async (req, res) => {
    try {
        const viajes = await viajesService.getViajes();
        console.log('viajes obtenidos')
        res.json(viajes);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los viajes" });
    }
});

router.post('/nuevo', async (req, res) => {
    try {
        const viaje = await viajesService.insertarViaje(req.body);
        res.json(viaje);
    } catch (error) {
        console.error("Error al insertar el viaje:", error);
        res.status(500).json({ error: "Error al insertar el viaje" });
    }
});
