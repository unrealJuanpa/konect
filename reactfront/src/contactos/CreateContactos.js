import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const URI = 'http://localhost:8000/contactos/'

const CompCreateContactos = () => {
    const[nombre, setNombre] = useState('')
    const[apellido, setApellido] = useState('')
    const[telefono, setTelefono] = useState('')
    const[correo, setCorreo] = useState('')
    const[facebook, setFacebook] = useState('')
    const[linkedin, setLinkedin] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre,apellido:apellido,telefono:telefono,correo:correo,facebook:facebook,linkedin:linkedin})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <br></br>
            <br></br>
            <div class="card-header">
                <h5>Create New Contactos</h5>
            </div>

            <div class="card-body">
                <h5>Contactos Data</h5>
                <br></br>
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <form onSubmit={store}>
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
                            <br></br>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateContactos
