import { ResourceNotFound } from 
"../errors/resource-not-found-error.js"
import sequelize from "../models/database.js"
import { Op } from "sequelize";



const getViajes = async () => {
    const resultado = await sequelize.models.Viaje.findAll({
        attributes: [
            'idViaje',
            'ciudadOrigen',
            'ciudadDestino',
            'puntosIntermedios',
            'asientosDisponibles',
            'precio',
            'conductor',
            'pasajeros',
            'vehiculo',
            'fecha',
            'horaSalida',
        ],
        order: [['idViaje', 'ASC']]
    })
    console.log('resultado', resultado)
    return resultado.map(viaje => {
        return {
            idViaje: viaje.dataValues.idViaje,
            ciudadOrigen: viaje.dataValues.ciudadOrigen,
            ciudadDestino: viaje.dataValues.ciudadDestino,
            puntosIntermedios: viaje.dataValues.puntosIntermedios,
            asientosDisponibles: viaje.dataValues.asientosDisponibles,
            precio: viaje.dataValues.precio,
            conductor: viaje.dataValues.conductor,
            pasajeros: viaje.dataValues.pasajeros,
            vehiculo: viaje.dataValues.vehiculo,
            fecha: viaje.dataValues.fecha.split(" ")[0],
            horaSalida: viaje.dataValues.horaSalida,
        }
    })
}

const insertarViaje = async (viajeCmd) => {
    try{const resultado = await sequelize.models.Viaje.create({
        idViaje: viajeCmd.idViaje,
        ciudadOrigen: viajeCmd.ciudadOrigen,
        ciudadDestino: viajeCmd.ciudadDestino,
        puntosIntermedios: viajeCmd.puntosIntermedios,
        asientosDisponibles: viajeCmd.asientosDisponibles,
        precio: viajeCmd.precio,
        conductor: viajeCmd.conductor,
        pasajeros: viajeCmd.pasajeros,
        vehiculo: viajeCmd.vehiculo,
        fecha: viajeCmd.fecha,
        horaSalida: viajeCmd.horaSalida
    })
    console.log('insertar viaje', resultado)
    return {
        ciudadOrigen: resultado.dataValues.ciudadOrigen,
        ciudadDestino: resultado.dataValues.ciudadDestino,
        fecha: resultado.dataValues.fecha,
        horaSalida: resultado.dataValues.horaSalida
    };
    }catch (error) {
        console.error('Error al insertar el viaje:', error);
      }
    
}

const viajesService = {
    getViajes,
    insertarViaje,
}

export default viajesService;
