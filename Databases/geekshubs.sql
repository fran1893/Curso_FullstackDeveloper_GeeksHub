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

-- INSERTAR DATOS
INSERT INTO
    nacionalidades (nombre_nacion)
VALUES
    ("Española");

INSERT INTO
    nacionalidades (nombre_nacion)
VALUES
    ("Mexicana"),
    ("Colombiana"),
    ("Argentina"),
    ("Ecuatoriana"),
    ("Venezolana"),
    ("Uruguaya");

INSERT INTO
    nacionalidades (nombre_nacion)
VALUES
    ('Italiana'),
    ('Rusa'),
    ('Cubana');

INSERT INTO
    alumnos (
        nombre,
        apellidos,
        edad,
        fecha_nacimiento,
        activo,
        id_nacionalidad
    )
VALUES
    ('Jose', 'Palacios', 24, '1990-01-01', 'SI', 1);

INSERT INTO
    alumnos (
        nombre,
        apellidos,
        edad,
        fecha_nacimiento,
        activo,
        id_nacionalidad
    )
VALUES
    ('Marta', 'García', 18, '1990-01-01', 'SI', 3);

INSERT INTO
    alumnos (
        nombre,
        apellidos,
        edad,
        fecha_nacimiento,
        activo,
        id_nacionalidad
    )
VALUES
    ('Ernesto', 'Pérez', 54, '1990-01-01', 'SI', 2);

INSERT INTO
    alumnos (
        nombre,
        apellidos,
        edad,
        fecha_nacimiento,
        activo,
        id_nacionalidad
    )
VALUES
    ('Vicente', 'Ruiz', 33, '1990-01-01', 'SI', 4);

INSERT INTO
    alumnos (
        nombre,
        apellidos,
        edad,
        fecha_nacimiento,
        activo,
        id_nacionalidad
    )
VALUES
    (
        'Enrique',
        'Cervantes',
        46,
        '1990-01-01',
        'SI',
        6
    );

INSERT INTO
    direcciones (provincia, poblacion, calle, numero, id_alumno)
VALUES
    ('Barcelona', 'Barcelona', 'Calle del río', 42, 3),
    ('Barcelona', 'Girona', 'La carrera', 81, 4),
    (
        'Barcelona',
        'Hospitalet',
        'Plaza Garibaldi',
        45,
        5
    ),
    ('Madrid', 'Madrid', 'Avenida Alvear', 33, 6),
    ('Madrid', 'Madrid', 'Avenida Boyacá', 64, 7);

INSERT INTO
    categorias(nombre_categoria)
VALUES
    ('Frontend'),
    ('Backend');

INSERT INTO
    cursos (nombre_curso, id_categoria)
VALUES
    ('Javascript', 1),
    ('HTML', 1),
    ('CSS', 1),
    ('SQL', 2),
    ('Express', 2),
    ('NodeJs', 2);

INSERT INTO
    cursos_alumnos (id_alumno, id_curso)
VALUES
    (3, 1),
    (3, 2),
    (3, 3),
    (4, 4),
    (4, 5),
    (4, 6),
    (5, 6),
    (6, 2),
    (6, 3);

-- ACTUALIZAR DATOS
UPDATE
    alumnos
SET
    fecha_nacimiento = '1996-05-01'
WHERE
    nombre = 'Jose';

UPDATE
    alumnos
SET
    fecha_nacimiento = '20002-09-10'
WHERE
    nombre = 'Marta';

UPDATE
    alumnos
SET
    fecha_nacimiento = '1966-07-23'
WHERE
    nombre = 'Ernesto';

UPDATE
    alumnos
SET
    fecha_nacimiento = '1987-12-31'
WHERE
    nombre = 'Vicente';

UPDATE
    alumnos
SET
    fecha_nacimiento = '1974-01-15'
WHERE
    nombre = 'Enrique';

UPDATE
    alumnos
SET
    activo = "NO"
WHERE
    id = 7;

UPDATE
    alumnos
SET
    direccion = 'Calle del río 42'
WHERE
    id = 3;

UPDATE
    alumnos
SET
    direccion = 'La carrera 81'
WHERE
    id = 4;

UPDATE
    alumnos
SET
    direccion = 'Plaza Garibaldi 45'
WHERE
    id = 5;

UPDATE
    alumnos
SET
    direccion = 'Avenida Alvear 33'
WHERE
    id = 6;

UPDATE
    alumnos
SET
    direccion = 'Avenida Boyacá 64'
WHERE
    id = 7;

-- MODIFICAR TABLA
ALTER TABLE
    alumnos
ADD
    direccion VARCHAR(40) NOT NULL;

ALTER TABLE
    alumnos DROP direccion;

-- LIKE
-- busca las nacionalidades que empiezan por A
SELECT
    *
FROM
    nacionalidades
WHERE
    nombre_nacion LIKE 'A%';

-- COUNT
-- cuenta todas las nacionalidades y devuelve una tabla llamada total de nacionalidades
SELECT
    COUNT(id) AS 'Total de nacionalidades'
FROM
    nacionalidades;

-- INNER JOIN
SELECT
    *
FROM
    cursos CU
    INNER JOIN categorias CA ON CU.id_categoria = CA.id;