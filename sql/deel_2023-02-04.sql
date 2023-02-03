# ************************************************************
# Sequel Ace SQL dump
# 版本号： 20046
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# 主机: rds.mysql.xiangwen.com (MySQL 8.0.26)
# 数据库: deel
# 生成时间: 2023-02-03 16:07:25 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# 转储表 author
# ------------------------------------------------------------

DROP TABLE IF EXISTS `author`;

CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `name` varchar(32) DEFAULT NULL COMMENT '作者姓名',
  `description` text COMMENT '作者描述',
  `sale_count` int DEFAULT NULL COMMENT '作者售卖的书籍数量',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;

INSERT INTO `author` (`id`, `name`, `description`, `sale_count`, `created_at`, `updated_at`, `deleted_at`)
VALUES
	(1,'鲁迅','鲁迅（1881年9月25日－1936年10月19日），原名周樟寿，后改名周树人，字豫山，后改豫才，“鲁迅”是他1918年发表《狂人日记》时所用的笔名，也是他影响最为广泛的笔名，浙江绍兴人。',8,'2023-02-02 05:30:37','2023-02-03 23:00:56',NULL),
	(2,'刘慈欣','代表作，三体',NULL,'2023-02-03 22:47:40','2023-02-03 22:47:40',NULL),
	(3,'余华','代表作，活着',NULL,'2023-02-03 23:47:59','2023-02-03 23:47:59',NULL);

/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 book
# ------------------------------------------------------------

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `title` varchar(32) DEFAULT NULL COMMENT '书籍标题',
  `author_id` int DEFAULT NULL COMMENT '书籍作者ID',
  `description` text COMMENT '书籍描述',
  `price` decimal(5,2) DEFAULT NULL COMMENT '书籍价格',
  `sale_count` int DEFAULT '0' COMMENT '销售数量',
  `status` int DEFAULT '0' COMMENT '0为默认状态; 正数为各种有效状态;',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;

INSERT INTO `book` (`id`, `title`, `author_id`, `description`, `price`, `sale_count`, `status`, `created_at`, `updated_at`, `deleted_at`)
VALUES
	(1,'《呐喊》',1,'鲁迅的代表作',120.50,7,0,'2023-02-02 05:30:55','2023-02-03 23:00:56',NULL),
	(2,'《彷徨》',1,'鲁迅的代表作',100.50,7,0,'2023-02-02 05:31:18','2023-02-03 23:00:56',NULL),
	(3,'《三体》',2,'刘慈欣的代表作',220.50,0,0,'2023-02-03 22:52:56','2023-02-03 22:53:36',NULL),
	(4,'《活着》',3,'余华代表作',100.50,0,0,'2023-02-03 23:51:44','2023-02-03 23:51:44',NULL);

/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `key` text COMMENT 'log的键名',
  `value` text COMMENT 'log的值',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;

INSERT INTO `log` (`id`, `key`, `value`, `created_at`, `updated_at`)
VALUES
	(1,'access_log','::1; /sms/verify_code','2023-02-02 05:29:53','2023-02-02 05:29:53'),
	(2,'access_log','::1; /user/reg','2023-02-02 05:30:08','2023-02-02 05:30:08'),
	(3,'access_log','::1; /user/login','2023-02-02 05:30:24','2023-02-02 05:30:24'),
	(4,'access_log','::1; /user/list','2023-02-02 05:30:28','2023-02-02 05:30:28'),
	(5,'access_log','::1; /author/add','2023-02-02 05:30:37','2023-02-02 05:30:37'),
	(6,'access_log','::1; /author/list','2023-02-02 05:30:41','2023-02-02 05:30:41'),
	(7,'access_log','::1; /author/search','2023-02-02 05:30:45','2023-02-02 05:30:45'),
	(8,'access_log','::1; /book/add','2023-02-02 05:30:55','2023-02-02 05:30:55'),
	(9,'access_log','::1; /author/list_include_books','2023-02-02 05:30:59','2023-02-02 05:30:59'),
	(10,'access_log','::1; /book/add','2023-02-02 05:31:18','2023-02-02 05:31:18'),
	(11,'access_log','::1; /author/list_include_books','2023-02-02 05:31:28','2023-02-02 05:31:28'),
	(12,'access_log','::1; /book/update?id=1','2023-02-02 05:31:39','2023-02-02 05:31:39'),
	(13,'access_log','::1; /book/list','2023-02-02 05:31:44','2023-02-02 05:31:44'),
	(14,'access_log','::1; /book/list','2023-02-02 05:31:49','2023-02-02 05:31:49'),
	(15,'access_log','::1; /book/all','2023-02-02 05:31:56','2023-02-02 05:31:56'),
	(16,'access_log','::1; /book/count','2023-02-02 05:32:01','2023-02-02 05:32:01'),
	(17,'access_log','::1; /book/sum?cloum=price','2023-02-02 05:32:05','2023-02-02 05:32:05'),
	(18,'access_log','::1; /book/search','2023-02-02 05:32:09','2023-02-02 05:32:09'),
	(19,'access_log','::1; /book/search','2023-02-02 05:32:19','2023-02-02 05:32:19'),
	(20,'access_log','::1; /book/increment?cloum=sale_count&by=2','2023-02-02 05:32:25','2023-02-02 05:32:25'),
	(21,'access_log','::1; /book/list_with_author','2023-02-02 05:32:32','2023-02-02 05:32:32'),
	(22,'access_log','::1; /book/list_with_author','2023-02-02 05:32:46','2023-02-02 05:32:46'),
	(23,'access_log','::1; /book/sale_an_author_book','2023-02-02 05:33:03','2023-02-02 05:33:03'),
	(24,'500','::1; /book/sale_an_author_book; Error: WHERE parameter \"author_id\" has invalid \"undefined\" value','2023-02-02 05:33:03','2023-02-02 05:33:03'),
	(25,'access_log','::1; /book/sale_an_author_book','2023-02-02 05:34:19','2023-02-02 05:34:19'),
	(26,'500','::1; /book/sale_an_author_book; SequelizeDatabaseError: Unknown column \'sae_count\' in \'field list\'','2023-02-02 05:34:20','2023-02-02 05:34:20'),
	(27,'access_log','::1; /book/sale_an_author_book','2023-02-02 05:34:45','2023-02-02 05:34:45'),
	(28,'500','::1; /book/sale_an_author_book; SequelizeDatabaseError: Unknown column \'sae_count\' in \'field list\'','2023-02-02 05:34:45','2023-02-02 05:34:45'),
	(29,'access_log','::1; /book/sale_an_author_book','2023-02-02 05:35:12','2023-02-02 05:35:12'),
	(30,'access_log','::1; /book/sale_an_author_book','2023-02-02 05:35:31','2023-02-02 05:35:31'),
	(31,'access_log','::1; /book/list','2023-02-02 06:24:07','2023-02-02 06:24:07'),
	(32,'access_log','::1; /author/add','2023-02-03 22:47:40','2023-02-03 22:47:40'),
	(33,'access_log','::1; /author/list','2023-02-03 22:47:44','2023-02-03 22:47:44'),
	(34,'access_log','::1; /author/list','2023-02-03 22:48:29','2023-02-03 22:48:29'),
	(35,'access_log','::1; /author/list','2023-02-03 22:48:50','2023-02-03 22:48:50'),
	(36,'access_log','::1; /author/search','2023-02-03 22:49:03','2023-02-03 22:49:03'),
	(37,'404','::1; /author/search','2023-02-03 22:49:03','2023-02-03 22:49:03'),
	(38,'access_log','::1; /author/list_include_books','2023-02-03 22:49:27','2023-02-03 22:49:27'),
	(39,'access_log','::1; /sms/verify_code','2023-02-03 22:49:53','2023-02-03 22:49:53'),
	(40,'access_log','::1; /user/reg','2023-02-03 22:51:24','2023-02-03 22:51:24'),
	(41,'access_log','::1; /user/login','2023-02-03 22:51:39','2023-02-03 22:51:39'),
	(42,'access_log','::1; /book/add','2023-02-03 22:52:56','2023-02-03 22:52:56'),
	(43,'access_log','::1; /book/update?id=3','2023-02-03 22:53:11','2023-02-03 22:53:11'),
	(44,'access_log','::1; /book/update?id=3','2023-02-03 22:53:36','2023-02-03 22:53:36'),
	(45,'access_log','::1; /book/list','2023-02-03 22:53:42','2023-02-03 22:53:42'),
	(46,'access_log','::1; /book/list','2023-02-03 22:53:53','2023-02-03 22:53:53'),
	(47,'access_log','::1; /book/all','2023-02-03 22:54:00','2023-02-03 22:54:00'),
	(48,'access_log','::1; /book/count','2023-02-03 22:54:05','2023-02-03 22:54:05'),
	(49,'access_log','::1; /book/sum?cloum=price','2023-02-03 22:54:09','2023-02-03 22:54:09'),
	(50,'access_log','::1; /book/search','2023-02-03 22:54:12','2023-02-03 22:54:12'),
	(51,'access_log','::1; /book/increment?cloum=sale_count&by=2','2023-02-03 22:54:20','2023-02-03 22:54:20'),
	(52,'access_log','::1; /book/list_with_author','2023-02-03 22:58:29','2023-02-03 22:58:29'),
	(53,'access_log','::1; /author/list_include_books','2023-02-03 22:59:13','2023-02-03 22:59:13'),
	(54,'access_log','::1; /book/list_with_author','2023-02-03 22:59:47','2023-02-03 22:59:47'),
	(55,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 22:59:47','2023-02-03 22:59:47'),
	(56,'access_log','::1; /book/list_with_author','2023-02-03 22:59:50','2023-02-03 22:59:50'),
	(57,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 22:59:50','2023-02-03 22:59:50'),
	(58,'access_log','::1; /book/list_with_author','2023-02-03 23:00:30','2023-02-03 23:00:30'),
	(59,'access_log','::1; /book/sale_an_author_book','2023-02-03 23:00:56','2023-02-03 23:00:56'),
	(60,'access_log','::1; /book/list_with_author','2023-02-03 23:02:14','2023-02-03 23:02:14'),
	(61,'access_log','::1; /author/list_include_books','2023-02-03 23:02:30','2023-02-03 23:02:30'),
	(62,'access_log','::1; /author/list_include_books','2023-02-03 23:02:40','2023-02-03 23:02:40'),
	(63,'access_log','::1; /book/list_with_author','2023-02-03 23:04:31','2023-02-03 23:04:31'),
	(64,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:04:31','2023-02-03 23:04:31'),
	(65,'access_log','::1; /book/list_with_author','2023-02-03 23:04:53','2023-02-03 23:04:53'),
	(66,'access_log','::1; /book/list_with_author','2023-02-03 23:05:21','2023-02-03 23:05:21'),
	(67,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:05:21','2023-02-03 23:05:21'),
	(68,'access_log','::1; /book/list_with_author','2023-02-03 23:07:10','2023-02-03 23:07:10'),
	(69,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:07:10','2023-02-03 23:07:10'),
	(70,'access_log','::1; /book/list_with_author','2023-02-03 23:07:12','2023-02-03 23:07:12'),
	(71,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:07:12','2023-02-03 23:07:12'),
	(72,'access_log','::1; /book/list_with_author','2023-02-03 23:08:08','2023-02-03 23:08:08'),
	(73,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:08:09','2023-02-03 23:08:09'),
	(74,'access_log','::1; /book/list_with_author','2023-02-03 23:08:11','2023-02-03 23:08:11'),
	(75,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:08:11','2023-02-03 23:08:11'),
	(76,'access_log','::1; /book/list_with_author','2023-02-03 23:08:36','2023-02-03 23:08:36'),
	(77,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:08:36','2023-02-03 23:08:36'),
	(78,'access_log','::1; /book/list_with_author','2023-02-03 23:09:41','2023-02-03 23:09:41'),
	(79,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:09:41','2023-02-03 23:09:41'),
	(80,'access_log','::1; /book/list_with_author','2023-02-03 23:09:58','2023-02-03 23:09:58'),
	(81,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:09:59','2023-02-03 23:09:59'),
	(82,'access_log','::1; /book/list_with_author','2023-02-03 23:10:23','2023-02-03 23:10:23'),
	(83,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:10:23','2023-02-03 23:10:23'),
	(84,'access_log','::1; /book/list_with_author','2023-02-03 23:10:58','2023-02-03 23:10:58'),
	(85,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:10:58','2023-02-03 23:10:58'),
	(86,'access_log','::1; /book/list_with_author','2023-02-03 23:11:47','2023-02-03 23:11:47'),
	(87,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:11:47','2023-02-03 23:11:47'),
	(88,'access_log','::1; /book/list_with_author','2023-02-03 23:12:41','2023-02-03 23:12:41'),
	(89,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:12:41','2023-02-03 23:12:41'),
	(90,'access_log','::1; /author/list_include_books','2023-02-03 23:13:58','2023-02-03 23:13:58'),
	(91,'access_log','::1; /author/list_include_books','2023-02-03 23:14:07','2023-02-03 23:14:07'),
	(92,'access_log','::1; /book/list_with_author','2023-02-03 23:15:09','2023-02-03 23:15:09'),
	(93,'access_log','::1; /book/list_with_author','2023-02-03 23:15:54','2023-02-03 23:15:54'),
	(94,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:15:54','2023-02-03 23:15:54'),
	(95,'access_log','::1; /book/list_with_author','2023-02-03 23:16:51','2023-02-03 23:16:51'),
	(96,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:16:51','2023-02-03 23:16:51'),
	(97,'access_log','::1; /book/list_with_author','2023-02-03 23:17:07','2023-02-03 23:17:07'),
	(98,'access_log','::1; /book/list_with_author','2023-02-03 23:17:38','2023-02-03 23:17:38'),
	(99,'access_log','::1; /book/list_with_author','2023-02-03 23:17:51','2023-02-03 23:17:51'),
	(100,'access_log','::1; /author/list_include_books','2023-02-03 23:18:17','2023-02-03 23:18:17'),
	(101,'access_log','::1; /book/list_with_author','2023-02-03 23:19:12','2023-02-03 23:19:12'),
	(102,'access_log','::1; /book/list_with_author','2023-02-03 23:19:40','2023-02-03 23:19:40'),
	(103,'access_log','::1; /book/list_with_author','2023-02-03 23:20:29','2023-02-03 23:20:29'),
	(104,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.book_id\' in \'on clause\'','2023-02-03 23:20:29','2023-02-03 23:20:29'),
	(105,'access_log','::1; /book/list_with_author','2023-02-03 23:20:52','2023-02-03 23:20:52'),
	(106,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:20:52','2023-02-03 23:20:52'),
	(107,'access_log','::1; /book/list_with_author','2023-02-03 23:20:53','2023-02-03 23:20:53'),
	(108,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.author_id\' in \'on clause\'','2023-02-03 23:20:54','2023-02-03 23:20:54'),
	(109,'access_log','::1; /book/list_with_author','2023-02-03 23:21:11','2023-02-03 23:21:11'),
	(110,'access_log','::1; /book/list_with_author','2023-02-03 23:21:40','2023-02-03 23:21:40'),
	(111,'access_log','::1; /book/list_with_author','2023-02-03 23:22:30','2023-02-03 23:22:30'),
	(112,'access_log','::1; /book/list_with_author','2023-02-03 23:24:07','2023-02-03 23:24:07'),
	(113,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.book_id\' in \'on clause\'','2023-02-03 23:24:07','2023-02-03 23:24:07'),
	(114,'access_log','::1; /book/list_with_author','2023-02-03 23:25:04','2023-02-03 23:25:04'),
	(115,'access_log','::1; /book/list_with_author','2023-02-03 23:30:38','2023-02-03 23:30:38'),
	(116,'access_log','::1; /book/list_with_author','2023-02-03 23:31:04','2023-02-03 23:31:04'),
	(117,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:31:04','2023-02-03 23:31:04'),
	(118,'access_log','::1; /book/list_with_author','2023-02-03 23:31:06','2023-02-03 23:31:06'),
	(119,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:31:06','2023-02-03 23:31:06'),
	(120,'access_log','::1; /book/list_with_author','2023-02-03 23:32:59','2023-02-03 23:32:59'),
	(121,'access_log','::1; /book/list_with_author','2023-02-03 23:37:29','2023-02-03 23:37:29'),
	(122,'access_log','::1; /book/list_with_author','2023-02-03 23:38:32','2023-02-03 23:38:32'),
	(123,'access_log','::1; /book/list_with_author','2023-02-03 23:39:47','2023-02-03 23:39:47'),
	(124,'500','::1; /book/list_with_author; TypeError: dao.list_with is not a function','2023-02-03 23:39:47','2023-02-03 23:39:47'),
	(125,'access_log','::1; /author/list_include_books','2023-02-03 23:44:29','2023-02-03 23:44:29'),
	(126,'access_log','::1; /author/list_include_books','2023-02-03 23:45:31','2023-02-03 23:45:31'),
	(127,'access_log','::1; /book/list_with_author','2023-02-03 23:45:44','2023-02-03 23:45:44'),
	(128,'access_log','::1; /book/list_with_author','2023-02-03 23:46:39','2023-02-03 23:46:39'),
	(129,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:46:39','2023-02-03 23:46:39'),
	(130,'access_log','::1; /book/list_with_author','2023-02-03 23:46:40','2023-02-03 23:46:40'),
	(131,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:46:40','2023-02-03 23:46:40'),
	(132,'access_log','::1; /book/list_with_author','2023-02-03 23:46:56','2023-02-03 23:46:56'),
	(133,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.title\' in \'field list\'','2023-02-03 23:46:57','2023-02-03 23:46:57'),
	(134,'access_log','::1; /book/list_with_author','2023-02-03 23:46:59','2023-02-03 23:46:59'),
	(135,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.title\' in \'field list\'','2023-02-03 23:46:59','2023-02-03 23:46:59'),
	(136,'access_log','::1; /book/list_with_author','2023-02-03 23:47:13','2023-02-03 23:47:13'),
	(137,'access_log','::1; /author/add','2023-02-03 23:47:59','2023-02-03 23:47:59'),
	(138,'access_log','::1; /book/list_with_author','2023-02-03 23:48:03','2023-02-03 23:48:03'),
	(139,'access_log','::1; /book/list_with_author','2023-02-03 23:48:30','2023-02-03 23:48:30'),
	(140,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:48:30','2023-02-03 23:48:30'),
	(141,'access_log','::1; /book/list_with_author','2023-02-03 23:48:46','2023-02-03 23:48:46'),
	(142,'access_log','::1; /author/list_include_books','2023-02-03 23:50:58','2023-02-03 23:50:58'),
	(143,'access_log','::1; /book/add','2023-02-03 23:51:44','2023-02-03 23:51:44'),
	(144,'access_log','::1; /author/list_include_books','2023-02-03 23:51:52','2023-02-03 23:51:52'),
	(145,'access_log','::1; /book/list_with_author','2023-02-03 23:52:57','2023-02-03 23:52:57'),
	(146,'access_log','::1; /book/list_with_author','2023-02-03 23:53:32','2023-02-03 23:53:32'),
	(147,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:53:33','2023-02-03 23:53:33'),
	(148,'access_log','::1; /book/list_with_author','2023-02-03 23:54:16','2023-02-03 23:54:16'),
	(149,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:54:16','2023-02-03 23:54:16'),
	(150,'access_log','::1; /book/list_with_author','2023-02-03 23:54:17','2023-02-03 23:54:17'),
	(151,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'authors.author_id\' in \'on clause\'','2023-02-03 23:54:18','2023-02-03 23:54:18'),
	(152,'access_log','::1; /book/list_with_author','2023-02-03 23:58:58','2023-02-03 23:58:58'),
	(153,'500','::1; /book/list_with_author; TypeError: dao.list_with is not a function','2023-02-03 23:58:59','2023-02-03 23:58:59'),
	(154,'access_log','::1; /book/list_with_author','2023-02-04 00:00:52','2023-02-04 00:00:52'),
	(155,'500','::1; /book/list_with_author; SequelizeEagerLoadingError: author is not associated to book!','2023-02-04 00:00:52','2023-02-04 00:00:52'),
	(156,'access_log','::1; /book/list_with_author','2023-02-04 00:02:26','2023-02-04 00:02:26'),
	(157,'500','::1; /book/list_with_author; SequelizeDatabaseError: Unknown column \'author.book_id\' in \'on clause\'','2023-02-04 00:02:26','2023-02-04 00:02:26'),
	(158,'access_log','::1; /author/list_include_books','2023-02-04 00:03:29','2023-02-04 00:03:29');

/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `phone` bigint DEFAULT NULL COMMENT '手机号',
  `verify_code` int DEFAULT NULL COMMENT '手机号验证码',
  `verify_time` datetime DEFAULT NULL COMMENT '手机号验证码发送时间',
  `username` text COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `status` int DEFAULT '0' COMMENT '0为默认状态; 正数为各种有效状态;',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `phone`, `verify_code`, `verify_time`, `username`, `password`, `status`, `created_at`, `updated_at`, `deleted_at`)
VALUES
	(1,18611114365,203734,'2023-02-03 22:49:53','user','1bbd886460827015e5d605ed44252251',0,'2023-02-02 05:29:54','2023-02-03 22:51:24',NULL);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
