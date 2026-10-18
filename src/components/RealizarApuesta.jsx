import React, { Component } from 'react'
import ServiceApuestas from '../services/ServiceApuestas';
import { Navigate } from 'react-router-dom';

export default class RealizarApuesta extends Component {
    service = new ServiceApuestas();

    cajaUsuario = React.createRef();
    cajaResultado1 = React.createRef();
    cajaResultado2 = React.createRef();
    cajaFecha = React.createRef();

    state = {
        status: false
    }

    insertarApuesta = (e) => {
        e.preventDefault();
        const apuesta = {
            idApuesta: 0,
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaResultado1.current.value + "-" + this.cajaResultado2.current.value,
            fecha: this.cajaFecha.current.value
        };
        this.service.insertApuestas(apuesta).then((response) => {
            console.log("Apuesta insertada");
            this.setState({
                status: true
            })
        })
    }

  render() {
    return (
      <div style={{ textAlign: "center", marginInline: "40%" }}>
        {
            this.state.status &&
            <Navigate to="/apuestas" />
        }
        <h1>Nueva Apuesta</h1>
        <form className='form-group' onSubmit={this.insertarApuesta}>
            <label>Usuario</label>
            <input type="text" className='form-control' ref={this.cajaUsuario} required />
            <label>Ateltico de madrid</label>
            <input type="number" className='form-control' ref={this.cajaResultado1} required />
            <label>Real Madrid</label>
            <input type="number" className='form-control' ref={this.cajaResultado2} required />
            <label>Fecha</label>
            <input type="date" className='form-control' ref={this.cajaFecha} required />
            <button className='btn btn-success'>Confirmar Apuesta</button>
        </form>
      </div>
    )
  }
}
