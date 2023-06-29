import React, { Component } from 'react';

interface CuentaBancariaState {
  fondos: number;
}

class CuentaBancaria extends Component<{}, CuentaBancariaState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fondos: 500000,
    };
  }

  asignarFondos = (cantidad: number) => {
    this.setState((prevState) => {
      const fondos = prevState.fondos + cantidad;
      if (cantidad > 500000) {
        this.dispararAlarma("Se ha asignado una cantidad alta de fondos");
      }
      return { fondos };
    });
  };

  sacarFondos = (cantidad: number) => {
    this.setState((prevState) => {
      if (cantidad > prevState.fondos) {
        this.dispararAlarma("No hay suficientes fondos disponibles");
      } else if (cantidad > 100000) {
        this.dispararAlarma("Se ha intentado sacar una cantidad alta de fondos");
      } else {
        const fondos = prevState.fondos - cantidad;
        return { fondos };
      }
      return null;
    });
  };

  dispararAlarma = (mensaje: string) => {
    // Lógica para disparar una alarma (puede ser una notificación, registro en consola, etc.)
    console.log("ALARMA:", mensaje);
  };

  render() {
    const { fondos } = this.state;
    return (
      <div>
        <p>Fondos disponibles: {fondos}</p>
        <button onClick={() => this.asignarFondos(600000)}>Asignar 600,000</button>
        <button onClick={() => this.sacarFondos(200000)}>Sacar 200,000</button>
      </div>
    );
  }
}

export default CuentaBancaria;