import './App.css';

import CompShowContactos from './contactos/ShowContactos.js';
import CompCreateContactos from './contactos/CreateContactos.js';
import CompEditContactos from './contactos/EditContactos.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowContactos/>}/>
          <Route path='/contactos/create' element={ <CompCreateContactos/>}/>
          <Route path='/contactos/edit/:id' element={ <CompEditContactos/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

