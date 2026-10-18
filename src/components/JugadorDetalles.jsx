import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas';
import { NavLink } from 'react-router-dom';

export default class JugadorDetalles extends Component {
    service = new ServiceApuestas();

    state = {
        jugador: null,
        status: false
    }

    getDetalles(){
        this.service.getJugadorDetalles(this.props.idjugador).then(result => {
            console.log("Cargando detalles del jugador");
            this.setState({
                jugador: result,
                status: true
            })
        })
    }

    componentDidMount() {
        this.getDetalles();
    }

  render() {
    if (!this.state.status) {
      return (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#555" }}>
            <h2>Cargando...</h2>
        </div>
      )
    }
    return (
      <div style={{ maxWidth: "600px", margin: "40px auto", padding: "30px", textAlign: "center", backgroundColor: "#f8f9fa", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)" }}>
        <h2 style={{ marginBottom: "20px", color: "#1f3c88" }}>{this.state.jugador.nombre}</h2>
        <img
          src={this.state.jugador.imagen}
          alt={this.state.jugador.nombre}
          style={{ width: "180px", height: "180px", objectFit: "contain", marginBottom: "20px" }}
        />
        <div style={{ marginBottom: "24px", color: "#444", lineHeight: "1.8" }}>
          <p><strong>Posición:</strong> {this.state.jugador.posicion}</p>
          <p><strong>Fecha de nacimiento:</strong> {this.state.jugador.fechaNacimiento}</p>
          <p><strong>País:</strong> {this.state.jugador.pais}</p>
        </div>
        <NavLink
          to={"/jugadores/" + this.state.jugador.idEquipo}
          style={{ display: "inline-block", padding: "10px 18px", color: "white", backgroundColor: "#1f3c88", borderRadius: "6px", textDecoration: "none" }}
        >
          Volver a jugadores
        </NavLink>
      </div>
    )
  }
}
