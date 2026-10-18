import axios from "axios";
import Global from "../Global";

export default class ServiceApuestas {
  getEquipos() {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "/api/equipos";
      axios.get(url + request).then((response) => {
        console.log("Leyendo equipos");
        resolve(response.data);
      });
    });
  }

  getDetallesEquipos(id) {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "/api/equipos/" + id;
      axios.get(url + request).then((response) => {
        console.log("Leyendo detalles del equipo: " + id);
        resolve(response.data);
      });
    });
  }

  getJugadoresEquipo(idEquipo) {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "api/jugadores/jugadoresequipos/" + idEquipo;
      axios.get(url + request).then((response) => {
        console.log("Leyendo jugadores");
        resolve(response.data);
      });
    });
  }

  getJugadoresNombre(nombre) {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "api/jugadores/findjugadores/" + nombre;
      axios.get(url + request).then((response) => {
        console.log("Leyendo jugadores");
        resolve(response.data);
      });
    });
  }

  getJugadorDetalles(idJugador) {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "api/jugadores/" + idJugador;
      axios.get(url + request).then((response) => {
        console.log("Leyendo detalles del jugador: " + idJugador);
        resolve(response.data);
      });
    });
  }

  getApuestas() {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "/api/apuestas";
      axios.get(url + request).then((response) => {
        console.log("Leyendo apuestas");
        resolve(response.data);
      });
    });
  }

  insertApuestas(apuesta) {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "/api/apuestas";
      axios
        .post(url + request, apuesta)
        .then((response) => {
          console.log("Añadiendo apuesta");
          resolve(response.data);
        })
        .catch((error) => {
          console.log("Error al añadir apuesta");
          resolve(error);
        });
    });
  }

  deleteApuesta(id) {
    return new Promise(function (resolve) {
      var url = Global.urlApiApuestas;
      var request = "/api/apuestas/" + id;
      axios.delete(url + request).then((response) => {
        console.log("Eliminando apuesta: " + id);
        resolve(response);
      });
    });
  }
}
