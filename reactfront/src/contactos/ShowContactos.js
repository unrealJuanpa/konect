import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const URI = 'http://localhost:8000/contactos/'

const CompShowContactos = () => {
    const[contactos, setContactos] = useState([])
    useEffect(() => {
            getContactos()
        },[]
    )

    const getContactos = async () => {
        const res = await axios.get(URI)
        setContactos(res.data)
    }

    const deleteContactos = async (id) => {
        await axios.delete(`${URI}${id}`)
        getContactos()
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <div className="card-header text-left">
                <h5>Contactos Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Contactos!</span>
                <br></br>
                <Link to="/contactos/create" type="button" className="btn btn-success" data-toggle="tooltip">Create new Register</Link>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Facebook</th>
                                <th>Linkedin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contactos.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.nombre}</td>
                                            <td>{dtyo.apellido}</td>
                                            <td>{dtyo.telefono}</td>
                                            <td>{dtyo.correo}</td>
                                            <td><a href={dtyo.facebook} target="_blank">{dtyo.facebook}</a></td>
                                            <td><a href={dtyo.linkedin} target="_blank">{dtyo.linkedin}</a></td>
                                            <td>
                                                <Link to={`/contactos/edit/${dtyo.id}`} className='btn btn-warning'>Edit</Link>
                                                <button onClick={ () => deleteContactos(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowContactos

