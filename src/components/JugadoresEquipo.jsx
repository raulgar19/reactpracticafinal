import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";

export default class JugadoresEquipo extends Component {
  url = Global.apiApuestas;

  state = {
    jugadores: [],
  };

  loadJugadores = () => {
    var request = "api/jugadores/jugadoresequipos/" + this.props.idEquipo;

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo jugadores del equipo...");

      this.setState({
        jugadores: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadJugadores();
  };

  render() {
    return (
      <div className="container">
        <NavLink className="btn btn-success mb-3 mt-4" to="/">
          Volver
        </NavLink>
        <table className="table table-info">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jugadores.map((jugador, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      style={{ width: "auto", height: "200px" }}
                      src={jugador.imagen}
                      alt=""
                    />
                  </td>
                  <td>{jugador.nombre}</td>
                  <td>
                    <NavLink
                      className="btn btn-danger"
                      to={
                        "/detallesJugador/" +
                        this.props.idEquipo +
                        "/" +
                        jugador.idJugador
                      }
                    >
                      Detalles
                    </NavLink>
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
