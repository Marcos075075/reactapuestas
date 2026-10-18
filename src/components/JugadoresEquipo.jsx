import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas'
import { NavLink } from 'react-router-dom';

export default class JugadoresEquipo extends Component {
  service = new ServiceApuestas();

  state = {
    jugadores: [],
    status: false
  }

  getJugadoresEquipo = () => {
    this.service.getJugadoresEquipo(this.props.idequipo).then((response) => {
      console.log("Leyendo jugadores22");
      this.setState({
        jugadores: response,
        status: true
      })
    })
  }

  componentDidMount() {
    this.getJugadoresEquipo();
  }

  render() {
    if (!this.state.status) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Cargando...</h1>
        </div>
      )
    } else {
      return (
        <div style={{ textAlign: "center", marginInline: "25%" }}>
          <button className='btn btn-success'>Volver</button>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {this.state.jugadores.map((jugador, index) => {
                return (
                  <tr key={index}>
                    <td>{jugador.nombre}</td>
                    <td><img src={jugador.imagen} width={100} /></td>
                    <td><NavLink to={"/jugadordetalles/" + jugador.idJugador}>Detalles</NavLink></td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      )
    }
  }
}
