//Crear una clase de Auto con los atributos (marca, modelo, potencia,max. velocidad)
// Crear 5 autos en un array
// Iterar el array y mostrar los autos por pantalla
// Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms

import React from "react";

interface IAuto {
    marca:string ; 
    modelo:string ; 
    potencia : number; 
    velocidad_max : number;
}

class Auto {
    marca:string ;
    modelo:string;
    potencia:number;
    velocidad_max:number;

    constructor(props:IAuto){
        this.marca = props.marca
        this.modelo= props.modelo
        this.potencia= props.potencia
        this.velocidad_max=props.velocidad_max
    }
    calcularTiempo(distancia: number): string {
        const tiempo = distancia / this.velocidad_max;
        const tiempo_redondeado  = tiempo.toFixed(2)
        return tiempo_redondeado;
      }
}
const Autos: React.FC = () => {

const autos: Auto[] = [
    new Auto({ marca: 'Fiat', modelo: 'Argo', potencia: 200, velocidad_max: 180 }),
    new Auto({ marca: 'Renault', modelo: 'Logan', potencia: 180, velocidad_max: 200 }),
    new Auto({ marca: 'Audi', modelo: 'A3', potencia: 220, velocidad_max: 210 }),
    new Auto({ marca: 'Ford', modelo: 'Fiesta', potencia: 190, velocidad_max: 190 }),
    new Auto({ marca: 'Toyota', modelo: 'Yaris', potencia: 210, velocidad_max: 195 }),
  ];

  // Mostrar los autos por pantalla
  const mostrarAutos = () => {
    return autos.map((auto, index) => (
      <div key={index}>
        <h2>{auto.marca} {auto.modelo}</h2>
        <p>Potencia: {auto.potencia}</p>
        <p>Velocidad Máxima: {auto.velocidad_max}</p>
      </div>
    ));
  };

  // Calcular el tiempo óptimo de recorrido para una distancia específica
  const calcularTiempoOptimo = (distancia: number) => {
    return autos.map((auto, index) => (
      <div key={index}>
        <h2>{auto.marca} {auto.modelo}</h2>
        <p>Tiempo óptimo para recorrer {distancia} kms: {auto.calcularTiempo(distancia)} horas</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Autos</h2>
      {mostrarAutos()}
      <h2>Tiempo Óptimo</h2>
      {calcularTiempoOptimo(100)} {/* Ejemplo de distancia: 100 kms */}
    </div>
  );
};

export default Autos;