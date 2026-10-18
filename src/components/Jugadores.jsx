import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas';

export default class Jugadores extends Component {
  service = new ServiceApuestas();

  state = {
    jugadores: []
  }

  getJugadoresPorNombre = () => {
    this.service.getJugadoresNombre(this.props.nombre).then(result => {
      console.log("Buscando jugadores..." + result);
      
      this.setState({
        jugadores: result
      })
    })
  }

  getJugadoresPorEquipo = () => {
    this.service.getJugadoresEquipo(this.props.idequipo).then(result => {
      console.log("Buscando jugadores por equipo..." + result);
      this.setState({
        jugadores: result
      })
    })
  }

  componentDidMount() {
    if(this.props.nombre){
      this.getJugadoresPorNombre();
    } else if(this.props.idequipo){
      this.getJugadoresPorEquipo();
    }
  }

  componentDidUpdate(oldrops) {
    if(oldrops.nombre !== this.props.nombre){
      this.getJugadoresPorNombre();
    } 

    if(oldrops.idequipo !== this.props.idequipo){
      this.getJugadoresPorEquipo();
    }
  }

  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>Jugadores Component</h1>
        <table className='table table-info'>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Posición</th>
              <th>Pais</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.jugadores.map((jugador, index) => {
                return(
                  <tr key={index}>
                    <td><img src={jugador.imagen} width={50} /></td>
                    <td>{jugador.nombre}</td>
                    <td>{jugador.posicion}</td>
                    <td>{jugador.pais}</td>
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
