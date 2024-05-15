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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `userId` int DEFAULT NULL,
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,1,'quidem molestiae enim'),(1,2,'sunt qui excepturi placeat culpa'),(1,3,'omnis laborum odio'),(1,4,'non esse culpa molestiae omnis sed optio'),(1,5,'eaque aut omnis a'),(1,6,'natus impedit quibusdam illo est'),(1,7,'quibusdam autem aliquid et et quia'),(1,8,'qui fuga est a eum'),(1,9,'saepe unde necessitatibus rem'),(1,10,'distinctio laborum qui'),(2,11,'quam nostrum impedit mollitia quod et dolor'),(2,12,'consequatur autem doloribus natus consectetur'),(2,13,'ab rerum non rerum consequatur ut ea unde'),(2,14,'ducimus molestias eos animi atque nihil'),(2,15,'ut pariatur rerum ipsum natus repellendus praesentium'),(2,16,'voluptatem aut maxime inventore autem magnam atque repellat'),(2,17,'aut minima voluptatem ut velit'),(2,18,'nesciunt quia et doloremque'),(2,19,'velit pariatur quaerat similique libero omnis quia'),(2,20,'voluptas rerum iure ut enim'),(3,21,'repudiandae voluptatem optio est consequatur rem in temporibus et'),(3,22,'et rem non provident vel ut'),(3,23,'incidunt quisquam hic adipisci sequi'),(3,24,'dolores ut et facere placeat'),(3,25,'vero maxime id possimus sunt neque et consequatur'),(3,26,'quibusdam saepe ipsa vel harum'),(3,27,'id non nostrum expedita'),(3,28,'omnis neque exercitationem sed dolor atque maxime aut cum'),(3,29,'inventore ut quasi magnam itaque est fugit'),(3,30,'tempora assumenda et similique odit distinctio error'),(4,31,'adipisci laborum fuga laboriosam'),(4,32,'reiciendis dolores a ut qui debitis non quo labore'),(4,33,'iste eos nostrum'),(4,34,'cumque voluptatibus rerum architecto blanditiis'),(4,35,'et impedit nisi quae magni necessitatibus sed aut pariatur'),(4,36,'nihil cupiditate voluptate neque'),(4,37,'est placeat dicta ut nisi rerum iste'),(4,38,'unde a sequi id'),(4,39,'ratione porro illum labore eum aperiam sed'),(4,40,'voluptas neque et sint aut quo odit'),(5,41,'ea voluptates maiores eos accusantium officiis tempore mollitia consequatur'),(5,42,'tenetur explicabo ea'),(5,43,'aperiam doloremque nihil'),(5,44,'sapiente cum numquam officia consequatur vel natus quos suscipit'),(5,45,'tenetur quos ea unde est enim corrupti qui'),(5,46,'molestiae voluptate non'),(5,47,'temporibus molestiae aut'),(5,48,'modi consequatur culpa aut quam soluta alias perspiciatis laudantium'),(5,49,'ut aut vero repudiandae voluptas ullam voluptas at consequatur'),(5,50,'sed qui sed quas sit ducimus dolor'),(6,51,'odit laboriosam sint quia cupiditate animi quis'),(6,52,'necessitatibus quas et sunt at voluptatem'),(6,53,'est vel sequi voluptatem nemo quam molestiae modi enim'),(6,54,'aut non illo amet perferendis'),(6,55,'qui culpa itaque omnis in nesciunt architecto error'),(6,56,'omnis qui maiores tempora officiis omnis rerum sed repellat'),(6,57,'libero excepturi voluptatem est architecto quae voluptatum officia tempora'),(6,58,'nulla illo consequatur aspernatur veritatis aut error delectus et'),(6,59,'eligendi similique provident nihil'),(6,60,'omnis mollitia sunt aliquid eum consequatur fugit minus laudantium'),(7,61,'delectus iusto et'),(7,62,'eos ea non recusandae iste ut quasi'),(7,63,'velit est quam'),(7,64,'autem voluptatem amet iure quae'),(7,65,'voluptates delectus iure iste qui'),(7,66,'velit sed quia dolor dolores delectus'),(7,67,'ad voluptas nostrum et nihil'),(7,68,'qui quasi nihil aut voluptatum sit dolore minima'),(7,69,'qui aut est'),(7,70,'et deleniti unde'),(8,71,'et vel corporis'),(8,72,'unde exercitationem ut'),(8,73,'quos omnis officia'),(8,74,'quia est eius vitae dolor'),(8,75,'aut quia expedita non'),(8,76,'dolorem magnam facere itaque ut reprehenderit tenetur corrupti'),(8,77,'cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia'),(8,78,'est minima eius possimus ea ratione velit et'),(8,79,'ipsa quae voluptas natus ut suscipit soluta quia quidem'),(8,80,'id nihil reprehenderit'),(9,81,'quibusdam sapiente et'),(9,82,'recusandae consequatur vel amet unde'),(9,83,'aperiam odio fugiat'),(9,84,'est et at eos expedita'),(9,85,'qui voluptatem consequatur aut ab quis temporibus praesentium'),(9,86,'eligendi mollitia alias aspernatur vel ut iusto'),(9,87,'aut aut architecto'),(9,88,'quas perspiciatis optio'),(9,89,'sit optio id voluptatem est eum et'),(9,90,'est vel dignissimos'),(10,91,'repellendus praesentium debitis officiis'),(10,92,'incidunt et et eligendi assumenda soluta quia recusandae'),(10,93,'nisi qui dolores perspiciatis'),(10,94,'quisquam a dolores et earum vitae'),(10,95,'consectetur vel rerum qui aperiam modi eos aspernatur ipsa'),(10,96,'unde et ut molestiae est molestias voluptatem sint'),(10,97,'est quod aut'),(10,98,'omnis quia possimus nesciunt deleniti assumenda sed autem'),(10,99,'consectetur ut id impedit dolores sit ad ex aut'),(10,100,'enim repellat iste');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
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
