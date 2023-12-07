/*import { ResourceNotFound } from 
"../errors/resource-not-found-error.js"
import { Op } from "sequelize";*/
import sequelize from "../models/database.js";

const getViajes = async () => {
    console.log('entro al service')
    const resultado = await sequelize.models.Viajes.findAll({
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
            'hora'
        ],
        order: [['idViaje', 'ASC']]
    })
    console.log('salio del service')
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
            fecha: viaje.dataValues.fecha,
            hora: viaje.dataValues.hora
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
        fecha: viaje.dataValues.fecha,
        hora: viaje.dataValues.hora
    })
    console.log('insertar viaje', resultado)
    return {
        idViaje : resultado.dataValues.idViaje,
        ciudadOrigen: resultado.dataValues.ciudadOrigen,
        ciudadDestino: resultado.dataValues.ciudadDestino
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
