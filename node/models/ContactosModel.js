import db from "../database/db.js"
import { DataTypes } from "sequelize"

const ContactosModel = db.define('contactos', {
    nombre: { type: DataTypes.TEXT },
    apellido: { type: DataTypes.TEXT },
    telefono: { type: DataTypes.TEXT },
    correo: { type: DataTypes.TEXT },
    facebook: { type: DataTypes.TEXT },
    linkedin: { type: DataTypes.TEXT}
})

export default ContactosModel