const SistemaAbm = require('./abm')

const x = new SistemaAbm.ABM()

const y = new SistemaAbm.Alumno('Elver', 'Galarga', 69, 'sexología', 2)
const z = new SistemaAbm.Alumno('Rosa', 'Meltrozo', 69, 'sexología', 2)



x.agregarAlumno(y)
x.agregarAlumno(z)
// console.log(x.alumnos)
x.borrarAlumno('Rosa')
// console.log(x.alumnos)
x.editar(y.nombre, 'Fer')
console.log(y)
// console.log(x.alumnos);


