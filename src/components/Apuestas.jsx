import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class Apuestas extends Component {
  url = Global.apiApuestas;

  state = {
    apuestas: [],
  };

  loadApuestas = () => {
    var request = "api/apuestas";

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo apuestas...");

      this.setState({
        apuestas: response.data,
      });
    });
  };

  deleteApuesta = (idApuesta) => {
    var request = "api/apuestas/" + idApuesta;

    axios.delete(this.url + request).then((response) => {
      console.log("Apuesta eliminada correctamente");

      this.loadApuestas();
    });
  };

  componentDidMount = () => {
    this.loadApuestas();
  };

  render() {
    return (
      <div className="container">
        <NavLink className="btn btn-danger mb-3 mt-4" to="/crearApuesta">
          Realizar apuesta
        </NavLink>
        <h1 style={{ color: "red" }}>
          Local: Real Madrid, Visitante: Atlético de Madrid
        </h1>
        <table className="table table-info">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Resultado</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.apuestas.map((apuesta, index) => {
              return (
                <tr key={index}>
                  <td>{apuesta.usuario}</td>
                  <td>{apuesta.nombre}</td>
                  <td>{apuesta.fecha}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteApuesta(apuesta.idApuesta);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
