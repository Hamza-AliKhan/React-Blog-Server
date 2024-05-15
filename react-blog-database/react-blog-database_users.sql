-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: react-blog-database
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` json NOT NULL,
  `phone` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `company` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Leanne Graham','Bret','Sincere@april.biz','{\"geo\": {\"lat\": \"-37.3159\", \"lng\": \"81.1496\"}, \"city\": \"Gwenborough\", \"suite\": \"Apt. 556\", \"street\": \"Kulas Light\", \"zipcode\": \"92998-3874\"}','1-770-736-8031 x56442','hildegard.org','{\"bs\": \"harness real-time e-markets\", \"name\": \"Romaguera-Crona\", \"catchPhrase\": \"Multi-layered client-server neural-net\"}'),(2,'Ervin Howell','Antonette','Shanna@melissa.tv','{\"geo\": {\"lat\": \"-43.9509\", \"lng\": \"-34.4618\"}, \"city\": \"Wisokyburgh\", \"suite\": \"Suite 879\", \"street\": \"Victor Plains\", \"zipcode\": \"90566-7771\"}','010-692-6593 x09125','anastasia.net','{\"bs\": \"synergize scalable supply-chains\", \"name\": \"Deckow-Crist\", \"catchPhrase\": \"Proactive didactic contingency\"}'),(3,'Clementine Bauch','Samantha','Nathan@yesenia.net','{\"geo\": {\"lat\": \"-68.6102\", \"lng\": \"-47.0653\"}, \"city\": \"McKenziehaven\", \"suite\": \"Suite 847\", \"street\": \"Douglas Extension\", \"zipcode\": \"59590-4157\"}','1-463-123-4447','ramiro.info','{\"bs\": \"e-enable strategic applications\", \"name\": \"Romaguera-Jacobson\", \"catchPhrase\": \"Face to face bifurcated interface\"}'),(4,'Patricia Lebsack','Karianne','Julianne.OConner@kory.org','{\"geo\": {\"lat\": \"29.4572\", \"lng\": \"-164.2990\"}, \"city\": \"South Elvis\", \"suite\": \"Apt. 692\", \"street\": \"Hoeger Mall\", \"zipcode\": \"53919-4257\"}','493-170-9623 x156','kale.biz','{\"bs\": \"transition cutting-edge web services\", \"name\": \"Robel-Corkery\", \"catchPhrase\": \"Multi-tiered zero tolerance productivity\"}'),(5,'Chelsey Dietrich','Kamren','Lucio_Hettinger@annie.ca','{\"geo\": {\"lat\": \"-31.8129\", \"lng\": \"62.5342\"}, \"city\": \"Roscoeview\", \"suite\": \"Suite 351\", \"street\": \"Skiles Walks\", \"zipcode\": \"33263\"}','(254)954-1289','demarco.info','{\"bs\": \"revolutionize end-to-end systems\", \"name\": \"Keebler LLC\", \"catchPhrase\": \"User-centric fault-tolerant solution\"}'),(6,'Mrs. Dennis Schulist','Leopoldo_Corkery','Karley_Dach@jasper.info','{\"geo\": {\"lat\": \"-71.4197\", \"lng\": \"71.7478\"}, \"city\": \"South Christy\", \"suite\": \"Apt. 950\", \"street\": \"Norberto Crossing\", \"zipcode\": \"23505-1337\"}','1-477-935-8478 x6430','ola.org','{\"bs\": \"e-enable innovative applications\", \"name\": \"Considine-Lockman\", \"catchPhrase\": \"Synchronised bottom-line interface\"}'),(7,'Kurtis Weissnat','Elwyn.Skiles','Telly.Hoeger@billy.biz','{\"geo\": {\"lat\": \"24.8918\", \"lng\": \"21.8984\"}, \"city\": \"Howemouth\", \"suite\": \"Suite 280\", \"street\": \"Rex Trail\", \"zipcode\": \"58804-1099\"}','210.067.6132','elvis.io','{\"bs\": \"generate enterprise e-tailers\", \"name\": \"Johns Group\", \"catchPhrase\": \"Configurable multimedia task-force\"}'),(8,'Nicholas Runolfsdottir V','Maxime_Nienow','Sherwood@rosamond.me','{\"geo\": {\"lat\": \"-14.3990\", \"lng\": \"-120.7677\"}, \"city\": \"Aliyaview\", \"suite\": \"Suite 729\", \"street\": \"Ellsworth Summit\", \"zipcode\": \"45169\"}','586.493.6943 x140','jacynthe.com','{\"bs\": \"e-enable extensible e-tailers\", \"name\": \"Abernathy Group\", \"catchPhrase\": \"Implemented secondary concept\"}'),(9,'Glenna Reichert','Delphine','Chaim_McDermott@dana.io','{\"geo\": {\"lat\": \"24.6463\", \"lng\": \"-168.8889\"}, \"city\": \"Bartholomebury\", \"suite\": \"Suite 449\", \"street\": \"Dayna Park\", \"zipcode\": \"76495-3109\"}','(775)976-6794 x41206','conrad.com','{\"bs\": \"aggregate real-time technologies\", \"name\": \"Yost and Sons\", \"catchPhrase\": \"Switchable contextually-based project\"}'),(10,'Clementina DuBuque','Moriah.Stanton','Rey.Padberg@karina.biz','{\"geo\": {\"lat\": \"-38.2386\", \"lng\": \"57.2232\"}, \"city\": \"Lebsackbury\", \"suite\": \"Suite 198\", \"street\": \"Kattie Turnpike\", \"zipcode\": \"31428-2261\"}','024-648-3804','ambrose.net','{\"bs\": \"target end-to-end models\", \"name\": \"Hoeger LLC\", \"catchPhrase\": \"Centralized empowering task-force\"}');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-15 14:58:15
