import {Sequelize} from 'sequelize';
import ViajeModel from "./viaje.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './CarpoolApp.db'
})

sequelize.define(
    'Viajes',
    ViajeModel.ViajeAttributes,
    ViajeModel.ViajeOptions,
)

async () => {
    try {

    await sequelize.sync()
}
catch (err){
    console.log({msg: err.message})
}
}

export default sequelize;