import ContactosModel from "../models/ContactosModel.js"

export const getAllContactos = async (req, res) => {
    try 
    {
        const datos = await ContactosModel.findAll();
        res.json(datos)
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

export const getContactos = async (req, res) => {
    try
    {
        const datos = await ContactosModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(datos[0])
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const createContactos = async (req, res) => {
    try
    {
        await ContactosModel.create(req.body)
        res.json( { message: "Registro generado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const updateContactos = async (req, res) => {
    try
    {
        await ContactosModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json( { message: "Registro actualizado correctamente!" } )
    }
    catch (error)
    {
        res.json( { message: error.message } )
    }
}

export const deleteContactos = async (req, res) => {
    try
    {
        await ContactosModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Registro eliminado correctamente!" })
    }
    catch (error)
    {
        res.json({ message: error.message })
    }
}

