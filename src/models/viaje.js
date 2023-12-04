const { DataTypes } = require('sequelize');

const ViajeAttributes = {
    idViaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    ciudadOrigen: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La ciudad de origen es necesaria"
            }
        }
    },
    ciudadDestino: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    puntosIntermedios: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    asientosDisponibles: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    conductor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pasajeros: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vehiculo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horaSalida: {
        type: DataTypes.TIME,
        allowNull: false
    }
}

const ViajeOptions = {
    timestamps: false
}

const ViajeModel = {
    ViajeAttributes,
    ViajeOptions
}


module.exports = ViajeModel;
