import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesJugador extends Component {
  url = Global.apiApuestas;

  state = {
    jugador: null,
  };

  loadJugador = () => {
    var request = "api/jugadores/" + this.props.idJugador;

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo detalles del jugador...");

      this.setState({
        jugador: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadJugador();
  };

  render() {
    return (
      <div className="container">
        {this.state.jugador !== null && (
          <div>
            <h1>{this.state.jugador.nombre}</h1>
            <img src={this.state.jugador.imagen} alt="" />
            <h3>{this.state.jugador.posicion}</h3>
            <p>Fecha de nacimiento: {this.state.jugador.fechaNacimiento}</p>
            <p>País: {this.state.jugador.pais}</p>
          </div>
        )}
        <NavLink
          className="btn btn-success"
          to={"/jugadoresEquipo/" + this.props.idEquipo}
        >
          Jugadores
        </NavLink>
      </div>
    );
  }
}
