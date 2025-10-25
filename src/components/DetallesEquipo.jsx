import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesEquipo extends Component {
  url = Global.apiApuestas;

  state = {
    equipo: null,
  };

  loadDetalles = () => {
    var request = "api/equipos/" + this.props.idEquipo;

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo detalles del equipo...");

      this.setState({
        equipo: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDetalles();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.idEquipo !== this.props.idEquipo) {
      this.loadDetalles();
    }
  };

  render() {
    return (
      <div>
        {this.state.equipo !== null && (
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "40vh" }}
          >
            <h3
              className="p-2 rounded text-dark mt-4"
              style={{ backgroundColor: "lightgray" }}
            >
              {this.state.equipo.nombre}
            </h3>
            <img
              className="img-fluid mt-3"
              style={{ width: "auto", height: "200px" }}
              src={this.state.equipo.imagen}
              alt={this.state.equipo.nombre}
            />
            <h4 className="mt-3">Champions: {this.state.equipo.champions}</h4>
            <p className="text-center">{this.state.equipo.descripcion}</p>
            <br />
            <div className="">
              <NavLink
                className="btn btn-success me-2"
                to={"/jugadoresEquipo/" + this.state.equipo.idEquipo}
              >
                Jugadores
              </NavLink>
              <NavLink className="btn btn-info" to="/">
                Volver
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}
