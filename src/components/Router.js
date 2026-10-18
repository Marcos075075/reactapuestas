import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import Apuestas from './Apuestas'
import DetalleEquipo from './DetalleEquipo'
import JugadoresEquipo from './JugadoresEquipo'
import JugadorDetalles from './JugadorDetalles'
import RealizarApuesta from './RealizarApuesta'
import Buscador from './Buscador'
import Jugadores from './Jugadores'

export default class Router extends Component {
  render() {

    function DetalleEquipoElement() {
      const { id } = useParams();
      return <DetalleEquipo id={id} />;
    }
    
    function JugadoresEquipoElement() {
      const { idequipo } = useParams();
      return <JugadoresEquipo idequipo={idequipo} />;
    }

    function JugadorDetallesElement() {
      const { idjugador } = useParams();
      return <JugadorDetalles idjugador={idjugador} />;
    }


    return (
        <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path='/' element={<HomeComponent />} />
                    <Route path='/apuestas' element={<Apuestas />} />
                    <Route path='/detalle/:id' element={<DetalleEquipoElement />} />
                    <Route path='/jugadores/:idequipo' element={<JugadoresEquipoElement />} />
                    <Route path='/jugadordetalles/:idjugador' element={<JugadorDetallesElement />} />
                    <Route path='/realizarapuesta' element={<RealizarApuesta />} />
                    <Route path='/buscador' element={<Buscador />} />
                    <Route path='/jugadores' element={<Jugadores />} />
                </Routes>
            </BrowserRouter>
    )
  }
}
