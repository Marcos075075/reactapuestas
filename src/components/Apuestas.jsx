import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {
  service = new ServiceApuestas();

  state = {
    apuestas: [],
    status: false
  }

  getApuestas() {
    this.service.getApuestas().then((response) => {
      console.log("Leyendo apuestas");
      this.setState({
        apuestas: response,
        status: true
      })
    })
  }

  componentDidMount() {
    this.getApuestas();
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
          <NavLink className='btn btn-danger' to={"/realizarapuesta"}>Realizar Apuesta</NavLink>
          <h1 style={{color: "red"}} >Local: Atletico de Madrid | Visitante: Real Madrid </h1>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Resultado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.apuestas.map((apuesta, index) => {
                  return (
                    <tr key={index}>
                      <td>{apuesta.usuario}</td>
                      <td>{apuesta.resultado}</td>
                      <td>{apuesta.fecha}</td>
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
