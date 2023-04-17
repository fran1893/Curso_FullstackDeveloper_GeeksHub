-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: GeeksHubsSequelize
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('01-create-nacionalidad.js'),('02-create-direccion.js'),('03-create-alumno.js'),('04-create-categoria.js'),('05-create-curso.js'),('06-create-curso-alumno.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `activo` enum('si','no') DEFAULT NULL,
  `id_nacionalidad` int DEFAULT NULL,
  `id_direccion` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_nacionalidad` (`id_nacionalidad`),
  KEY `id_direccion` (`id_direccion`),
  CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`id_nacionalidad`) REFERENCES `nacionalidades` (`id`),
  CONSTRAINT `alumnos_ibfk_2` FOREIGN KEY (`id_direccion`) REFERENCES `direcciones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES (1,'Jose','Palacios',24,'1996-05-01 00:00:00','si',1,1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,'Marta','García',18,'2002-09-10 00:00:00','si',3,2,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(3,'Ernesto','Pérez',54,'1966-07-23 00:00:00','si',2,3,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(4,'Vicente','Ruiz',33,'1987-12-31 00:00:00','si',4,4,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(5,'Enrrique','Cervantes',46,'1974-01-15 00:00:00','no',6,5,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(6,'Terry','Medhurst',50,'2000-12-25 00:00:00','no',4,1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(7,'Sheldon','Quigley',28,'2003-08-02 00:00:00','si',4,2,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(8,'Terrill','Hills',38,'1992-12-30 00:00:00','si',3,3,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(9,'Miles','Cummerata',49,'1969-01-16 00:00:00','no',6,4,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(10,'Mavis','Schultz',38,'1968-11-03 00:00:00','si',6,5,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(11,'Alison','Reichert',21,'1969-07-21 00:00:00','si',8,1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(12,'Oleta','Abbott',31,'1982-02-21 00:00:00','no',1,1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(13,'Ewell','Mueller',29,'1964-08-24 00:00:00','no',2,2,'2023-04-12 17:07:41','2023-04-12 17:31:18');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Frontend','2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,'Backend','2023-04-12 17:07:41','2023-04-12 17:07:41');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_curso` varchar(255) DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `cursos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT INTO `cursos` VALUES (1,'HTML',1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,'CSS',1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(3,'JavaScript',1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(4,'SQL',2,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(5,'Express',2,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(6,'NodeJs',2,'2023-04-12 17:07:41','2023-04-12 17:07:41');
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos_alumnos`
--

DROP TABLE IF EXISTS `cursos_alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursos_alumnos` (
  `id_alumno` int NOT NULL,
  `id_curso` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_alumno`,`id_curso`),
  KEY `id_curso` (`id_curso`),
  CONSTRAINT `cursos_alumnos_ibfk_1` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id`),
  CONSTRAINT `cursos_alumnos_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos_alumnos`
--

LOCK TABLES `cursos_alumnos` WRITE;
/*!40000 ALTER TABLE `cursos_alumnos` DISABLE KEYS */;
INSERT INTO `cursos_alumnos` VALUES (1,1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(1,2,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(1,4,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(1,5,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,2,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,4,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,5,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(3,1,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(3,2,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(3,5,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(6,3,'2023-04-12 17:07:41','2023-04-12 17:07:41');
/*!40000 ALTER TABLE `cursos_alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `calle` varchar(255) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,'Calle del río',42,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,'La carrera',81,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(3,'Plaza Garibaldi',45,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(4,'Avenida Avear',33,'2023-04-12 17:07:41','2023-04-12 17:07:41'),(5,'Avenida Boyacá',64,'2023-04-12 17:07:41','2023-04-12 17:07:41');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nacionalidades`
--

DROP TABLE IF EXISTS `nacionalidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nacionalidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_nacion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nacionalidades`
--

LOCK TABLES `nacionalidades` WRITE;
/*!40000 ALTER TABLE `nacionalidades` DISABLE KEYS */;
INSERT INTO `nacionalidades` VALUES (1,'Española','2023-04-12 17:07:41','2023-04-12 17:07:41'),(2,'Mexicana','2023-04-12 17:07:41','2023-04-12 17:07:41'),(3,'Colombiana','2023-04-12 17:07:41','2023-04-12 17:07:41'),(4,'Argentina','2023-04-12 17:07:41','2023-04-12 17:07:41'),(5,'Ecuatoriana','2023-04-12 17:07:41','2023-04-12 17:07:41'),(6,'Venezolana','2023-04-12 17:07:41','2023-04-12 17:07:41'),(7,'Uruguaya','2023-04-12 17:07:41','2023-04-12 17:07:41'),(8,'Italiana','2023-04-12 17:07:41','2023-04-12 17:07:41'),(9,'Rusa','2023-04-12 17:07:41','2023-04-12 17:07:41'),(10,'Cubana','2023-04-12 17:07:41','2023-04-12 17:07:41');
/*!40000 ALTER TABLE `nacionalidades` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-17 10:31:55
