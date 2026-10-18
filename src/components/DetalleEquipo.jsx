import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas'
import { NavLink } from 'react-router-dom';

export default class DetalleEquipo extends Component {
  service = new ServiceApuestas();

  state = {
    equipo: null,
    status: false
  }

  getEquipo() {
    this.service.getDetallesEquipos(this.props.id).then(result => {
      console.log("Cargando equipo");
      this.setState({
        equipo: result,
        status: true
      })
    })
  }

  componentDidMount() {
    this.getEquipo();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.id !== this.props.id) {
      this.getEquipo();
    }
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
        <div style={{ textAlign: "center", marginInline:"25%" }}>
          <h3>{this.state.equipo.nombre}</h3>
          <img src={this.state.equipo.imagen} width={100} />
          <h3>Champions ganadas: {this.state.equipo.champions}</h3>
          <h5>{this.state.equipo.descripcion}</h5>
          <NavLink className='btn btn-success' to={"/jugadores/" + this.state.equipo.idEquipo}>Jugadores</NavLink>
          <button className='btn btn-info'>Volver</button>
        </div>
      )
    }
  }
}
