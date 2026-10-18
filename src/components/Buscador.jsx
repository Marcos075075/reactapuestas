import React, { Component } from 'react'
import Jugadores from './Jugadores';
import ServiceApuestas from '../services/ServiceApuestas';

export default class Buscador extends Component {
  service = new ServiceApuestas();

  cajaNombre = React.createRef();
  cajaEquipo = React.createRef();

  state = {
    nombre: null,
    equipo: null,
    equipos: []
  }
  
  getNombreJugador = () => {
    this.setState({
      nombre: this.cajaNombre.current.value,
      equipo: null
    })
  }

  getEquipo = () => {
    this.setState({
      equipo: this.cajaEquipo.current.value,
      nombre: null
    })
  }

  generarEquipos = () => {
    this.service.getEquipos().then(result => {
      this.setState({
        equipos: result
      })
    })
  }

  componentDidMount() {
    this.generarEquipos();
  }

  render() {
    return (
      <div style={{ marginInline: "30%", textAlign: "center" }}>
        <h1 style={{ color: "blue" }}>Buscador Jugadores</h1>
        <label>Nombre del jugador </label>
        <input type="text" ref={this.cajaNombre} className='form-control' />
        <button type='button' className='btn btn-info' style={{ marginTop: "10px" }} onClick={() => {this.getNombreJugador()}}>Buscar Jugadores Nombre</button>
        
        <label style={{display: "block", marginTop: "20px"}}>Equipo del jugador </label>
        <select ref={this.cajaEquipo} className='form-control'>
          {
            this.state.equipos.map((equipo, index) => {
              return(
                <option key={index} value={equipo.idEquipo}>{equipo.nombre}</option>
              )
            })
          }

        </select>
        <button type='button' className='btn btn-warning' style={{ marginTop: "10px" }} onClick={() => {this.getEquipo()}}>Buscar Jugadores Equipo</button>
        {
          this.state.nombre && <Jugadores nombre={this.state.nombre} />
        }
        {
          this.state.equipo && <Jugadores idequipo={this.state.equipo} />
        }
        

      </div>
    )
  }
}
