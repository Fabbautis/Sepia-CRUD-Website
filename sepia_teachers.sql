-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: bsu-gimm260-fall-2021.cwtgn0g8zxfm.us-west-2.rds.amazonaws.com
-- Generation Time: May 03, 2022 at 09:42 PM
-- Server version: 8.0.23
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `FabianBautista`
--

-- --------------------------------------------------------

--
-- Table structure for table `sepia_teachers`
--

CREATE TABLE `sepia_teachers` (
  `id` int NOT NULL,
  `teacher` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `class_description` varchar(255) NOT NULL,
  `class_comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sepia_teachers`
--

INSERT INTO `sepia_teachers` (`id`, `teacher`, `email`, `class_description`, `class_comments`) VALUES
(1, 'Jack', 'jackpolifka@boisestate.edu', 'Mobile backend services', NULL),
(2, 'Ted', 'tedapel@boisestate.edu', 'Game design principles, tools, application, and development on personal game project', 'Game development focused on making first prototype'),
(3, 'Dan', 'danielhampikian@boisestate.edu', 'Front-end web services to create something unique', NULL),
(4, 'Sarah', 'sarahlausch@boisestate.edu\r\n', 'Storytelling and its relationship with community, culture, and society', NULL),
(5, 'Astri', 'astrisnodgrass@boisestate.edu', 'Painting foundations (color, technique, working with mistakes vs ctrl + z)', NULL),
(6, 'Dane', 'danejohns@boisestate.edu', 'Ethics and diversity class with Star Wars theme', 'This is the class with Jedi roleplay / mock senate'),
(7, 'McCrea', 'cindymccrea@boisestate.edu.\r\n', 'General introduction to psychology and its influence on our perceptions / life', 'This class sucked'),
(8, 'Ellertson', 'anthonyellertson@boisestate.edu', 'Dean of GIMM department + teaches intro GIMM classes', 'He scares me'),
(9, 'Doty', 'karendoty@boisestate.edu', 'Art teacher teaching different digital media tools', NULL),
(10, 'John', 'JohnWee@BoiseState.edu', 'ITM professor that teaches C# server development', NULL),
(11, 'Roggenbuck', 'lisaroggenbuck@boisestate.edu', 'Intro Art faculty ', 'Shes nice'),
(12, 'King', 'allisonhess@boisestate.edu ', 'ENGL 102 professor who has a very laid-back personality / open to anything', 'Inspired you to personalize the fuck out of anything you make'),
(13, 'Klassen', 'mklassen@boisestate.edu ', 'COMM 101 professor. ', 'The first \'in person\' college class you had'),
(14, 'Michal', 'michaltmartinez@boisestate.edu \r\n', 'HONORS college house leader who also teaches intro / senior classes', NULL),
(15, 'Lasich', 'nicholelasich@boisestate.edu', 'HLTH professor', 'You didn\'t pay attention ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sepia_teachers`
--
ALTER TABLE `sepia_teachers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sepia_teachers`
--
ALTER TABLE `sepia_teachers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
