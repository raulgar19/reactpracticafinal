import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import champions from "../assets/images/champions.png";
import Global from "../Global";
import axios from "axios";

export default class Menu extends Component {
  url = Global.apiApuestas;

  state = {
    equipos: [],
  };

  loadEquipos = () => {
    var request = "api/equipos";

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo equipos...");

      this.setState({
        equipos: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadEquipos();
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        data-bs-theme="light"
      >
        <div className="container">
          <img
            src={champions}
            className="w-25 h-25 img-fluid"
            alt="champions"
          />
          <a className="navbar-brand" href="/">
            Champions
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/apuestas">
                  Apuestas
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Equipos
                </a>
                <ul className="dropdown-menu">
                  {this.state.equipos.map((equipo, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          className="dropdown-item"
                          value={equipo.idEquipo}
                          to={"/detallesEquipo/" + equipo.idEquipo}
                        >
                          {equipo.nombre}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
