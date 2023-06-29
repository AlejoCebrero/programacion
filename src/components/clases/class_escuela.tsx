import React, { Component } from 'react';

interface Alumno {
  nombre: string;
}

interface Curso {
  nombre: string;
  alumnos: Alumno[];
}

interface EscuelaProps {
  alumnos: Alumno[];
}

interface EscuelaState {
  cursos: Curso[];
  nuevoAlumnoNombre: string;
}

class Escuela extends Component<EscuelaProps, EscuelaState> {
  constructor(props: EscuelaProps) {
    super(props);
    this.state = {
      cursos: [
        {
          nombre: 'Curso 1',
          alumnos: props.alumnos,
        },
        {
          nombre: 'Curso 2',
          alumnos: [],
        },
      ],
      nuevoAlumnoNombre: '',
    };
  }

  agregarAlumnoACurso = (cursoIndex: number) => {
    const { cursos, nuevoAlumnoNombre } = this.state;
    const nuevoAlumno: Alumno = { nombre: nuevoAlumnoNombre };
    cursos[cursoIndex].alumnos.push(nuevoAlumno);
    this.setState({ cursos, nuevoAlumnoNombre: '' });
  };

  handleNuevoAlumnoNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nuevoAlumnoNombre: event.target.value });
  };

  render() {
    const { cursos, nuevoAlumnoNombre } = this.state;

    return (
      <div>
        {cursos.map((curso, cursoIndex) => (
          <div key={cursoIndex}>
            <h3>{curso.nombre}</h3>
            <ul>
              {curso.alumnos.map((alumno, alumnoIndex) => (
                <li key={alumnoIndex}>{alumno.nombre}</li>
              ))}
            </ul>
            <div>
              <input type="text" value={nuevoAlumnoNombre} onChange={this.handleNuevoAlumnoNombreChange} />
              <button onClick={() => this.agregarAlumnoACurso(cursoIndex)}>
                Agregar Alumno
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Escuela;