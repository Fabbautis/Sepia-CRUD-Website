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
-- Table structure for table `sepia_classes`
--

CREATE TABLE `sepia_classes` (
  `id` int NOT NULL,
  `class_number` varchar(255) NOT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `teacher_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sepia_classes`
--

INSERT INTO `sepia_classes` (`id`, `class_number`, `class_name`, `teacher_id`) VALUES
(1, 'GIMM 285', 'Mobile Web Services II', 1),
(2, 'GIMM 290', 'Game Design Theory', 2),
(3, 'GIMM 300', 'Mobile Web Development', 3),
(4, 'HONORS 392', 'Storytelling', 4),
(5, 'ART 215', 'Painting I', 5),
(6, 'GIMM 280', 'Interactive Physical Computing', 2),
(7, 'GIMM 270', 'Interactive Video and Audio', 2),
(8, 'GIMM 260', 'Mobile Web Services I ', 1),
(9, 'UF 200', 'Foundations of Ethics & Diversity', 6),
(10, 'PSYCH 101', 'Psychology I', 7),
(11, 'GIMM 250', 'Interactive Storytelling ', 8),
(12, 'GIMM 200', 'Visual Storytelling', 9),
(13, 'ITM 225', 'Intro to Programming', 10),
(14, 'ART 109', 'Foundational Drawing', 11),
(15, 'ENGL 102', 'English II', 12),
(16, 'COMM 101', 'Fundamentals of Communications', 13),
(17, 'HONORS 198', 'Honors Seminar', 14),
(18, 'HLTH 110', 'Introduction to Health Science & Public Health', 15),
(19, 'GIMM 110', 'Interactive Programming', 8),
(20, 'GIMM 100', 'Digital Tools', 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sepia_classes`
--
ALTER TABLE `sepia_classes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sepia_classes`
--
ALTER TABLE `sepia_classes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
