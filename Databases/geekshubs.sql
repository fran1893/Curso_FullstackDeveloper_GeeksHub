CREATE TABLE nacionalidades (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre_nacion VARCHAR(40)
);

CREATE TABLE alumnos (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    apellidos VARCHAR(40),
    edad INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    activo ENUM('SI', 'NO'),
    PRIMARY KEY(id)
);

-- Agregar FOREIGN KEY luego de creada la tabla (en este caso seria el id de la tabla nacionalidades a la tabla alumnos en id_nacionalidad)
ALTER TABLE
    alumnos
ADD
    id_nacionalidad INT NOT NULL;

ALTER TABLE
    alumnos
ADD
    CONSTRAINT fk_nacionalidad FOREIGN KEY (id_nacionalidad) REFERENCES nacionalidades(id);

CREATE TABLE cursos(
    id INT AUTO_INCREMENT NOT NULL,
    nombre_curso VARCHAR(20),
    id_categoria INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_categoria) REFERENCES categorias(id)
);

CREATE TABLE categorias(
    id INT AUTO_INCREMENT NOT NULL,
    nombre_categoria VARCHAR(45) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE direcciones(
    id INT AUTO_INCREMENT NOT NULL,
    privincia VARCHAR(40) NOT NULL,
    poblacion VARCHAR(40) NOT NULL,
    calle VARCHAR(45) NOT NULL,
    numero INT NOT NULL,
    id_alumno INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_alumno) REFERENCES alumnos(id)
);

-- TABLA CONEXIÓN
CREATE TABLE cursos_alumnos(
    id_alumno INT NOT NULL,
    id_curso INT NOT NULL,
    PRIMARY KEY(id_alumno, id_curso),
    FOREIGN KEY(id_alumno) REFERENCES alumnos(id),
    FOREIGN KEY(id_curso) REFERENCES cursos(id)
);