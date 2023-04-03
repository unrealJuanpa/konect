import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/contactos/'

const CompEditContactos = () => {
    const[nombre, setNombre] = useState('')
    const[apellido, setApellido] = useState('')
    const[telefono, setTelefono] = useState('')
    const[correo, setCorreo] = useState('')
    const[facebook, setFacebook] = useState('')
    const[linkedin, setLinkedin] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            facebook: facebook,
            linkedin: linkedin
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getContactosByid() }, 
        []
    )

    const getContactosByid = async () => {
        const res = await axios.get(URI + id)
            setNombre(res.data.nombre)
            setApellido(res.data.apellido)
            setTelefono(res.data.telefono)
            setCorreo(res.data.correo)
            setFacebook(res.data.facebook)
            setLinkedin(res.data.linkedin)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Contactos</h5>
            </div>

            <div class="card-body">
                <h5>Contactos Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Nombre</label>
                                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } type="text" class="form-control" placeholder="Enter Nombre"></input>
                            </div>
                            <div class="form-group">
                                <label>Apellido</label>
                                <input value={apellido} onChange={ (e) => setApellido(e.target.value) } type="text" class="form-control" placeholder="Enter Apellido"></input>
                            </div>
                            <div class="form-group">
                                <label>Telefono</label>
                                <input value={telefono} onChange={ (e) => setTelefono(e.target.value) } type="text" class="form-control" placeholder="Enter Telefono"></input>
                            </div>
                            <div class="form-group">
                                <label>Correo</label>
                                <input value={correo} onChange={ (e) => setCorreo(e.target.value) } type="text" class="form-control" placeholder="Enter Correo"></input>
                            </div>
                            <div class="form-group">
                                <label>Facebook</label>
                                <input value={facebook} onChange={ (e) => setFacebook(e.target.value) } type="text" class="form-control" placeholder="Enter Facebook"></input>
                            </div>
                            <div class="form-group">
                                <label>Linkedin</label>
                                <input value={linkedin} onChange={ (e) => setLinkedin(e.target.value) } type="text" class="form-control" placeholder="Enter Linkedin"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditContactos
