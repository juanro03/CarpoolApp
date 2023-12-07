import { DataTypes } from 'sequelize';

const ViajeAttributes = {
    idViaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    ciudadOrigen: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La ciudad de origen es necesaria"
            }
        }
    },
    ciudadDestino: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    puntosIntermedios: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    asientosDisponibles: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    conductor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pasajeros: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vehiculo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
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

export default ViajeModel;
