-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: bsu-gimm260-fall-2021.cwtgn0g8zxfm.us-west-2.rds.amazonaws.com
-- Generation Time: May 03, 2022 at 09:41 PM
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
-- Table structure for table `sepia_uploaded_cards`
--

CREATE TABLE `sepia_uploaded_cards` (
  `id` int NOT NULL,
  `assignment_name` varchar(255) NOT NULL,
  `course_id` int NOT NULL,
  `due_date` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `comments` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `file_location` varchar(255) NOT NULL,
  `hyperlink` varchar(255) NOT NULL,
  `file_height` int DEFAULT NULL,
  `file_width` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sepia_uploaded_cards`
--

INSERT INTO `sepia_uploaded_cards` (`id`, `assignment_name`, `course_id`, `due_date`, `description`, `comments`, `file_location`, `hyperlink`, `file_height`, `file_width`) VALUES
(111, 'Concept art', 1, '2022-05-03', 'Make concept art', 'I am going to get tired of writing 100 individual assignments quick', 'sus.png-1651541950463.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 366, 654),
(112, '3D print that one thing', 2, '2022-05-22', 'I need to make a irl model for next class', 'this is going to suck', 'kittyIcon.png-1651542096200.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 439, 400),
(113, 'Charlie brown', 4, '2022-05-02', 'Do the charlie brown dance', 'Stanky leg', '790807760437903380.png-1651542173585.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 121, 121),
(114, 'Uh oh stinky', 4, '2022-01-21', 'POOOOOP', 'ahahahahha', '662539515147190282.png-1651542240355.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 128, 128),
(115, 'Can you defeat the dabbing squidward?', 5, '2022-05-18', 'My painting final for the semester', 'I need to find better references', 'dabbu.png-1651542418989.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 128, 128),
(116, 'Rosanna', 4, '2022-05-22', 'You know that one Toto song? Yeah its just that but in a lecture', 'Take notes', 'Best Buy Order Details.pdf-1651542498577.pdf', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 0, 0),
(117, 'Mickey math', 1, '2022-05-09', 'Make a math game based on mickey mouse', 'asdasd', 'drivers ed.pdf-1651542592487.pdf', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 0, 0),
(118, 'Blah\'s music sample', 4, '2022-05-23', 'Don\'t forget to give Blah those audio samples so you can use them later', 'on discord', 'MattEgg.gif-1651542799780.gif', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 778, 798),
(119, 'Find better way to navigate the cards ', 1, '2022-05-03', 'I just realized adding too many cards could make my computer explode since the webpage will get infinitely larger', 'oopsies', 'cry about it.png-1651542919071.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 992, 1100),
(120, 'I want to animate so badly', 2, '2022-05-02', 'Just give it some more time, youll be done with school and you can die happy', ':smile:', 'sherman-hammer.gif-1651543011264.gif', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 720, 1280),
(121, 'I want to animate so badly', 2, '2022-05-02', 'Just give it some more time, youll be done with school and you can die happy', ':smile:', 'sherman-hammer.gif-1651543021592.gif', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 720, 1280),
(122, 'Dove illustation', 5, '2022-05-02', 'I need to finish dove paiting', 'hello', 'jack.gif-1651543153796.gif', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 720, 1280),
(123, 'trompe loiel illustration', 5, '2022-06-24', 'Finish concept art and choose a stupid drawing', 'asdasdasd. Those aren\'t handwritten notes btw', 'notes.png-1651543231838.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 1728, 1295),
(124, 'trompe loiel illustration', 5, '2022-06-24', 'Finish concept art and choose a stupid drawing', 'asdasdasd. Those aren\'t handwritten notes btw', 'notes.png-1651543232583.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 1728, 1295),
(125, 'finalize the animation delay stuff in the code', 1, '2022-05-02', 'I need to make sure if there is a better way to handle animation delays dynamically ', 'hello momma', 'cuttlefish.png-1651543774999.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 1728, 1296),
(126, 'watch spongebob', 4, '2022-05-02', 'I swear this is for storytelling class ', 'shaken, not stirred', 'da bob.png-1651543880908.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 129, 139),
(127, 'prototype game', 2, '2022-05-02', 'can i make the simpsons x knd in real life?', 'Make a prototype game for my junior final', '1e9a1f4737936f02fd3317bff3edad3b2b0131fc.png-1651543963869.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 201, 700),
(128, 'Chicken wing', 5, '2022-05-06', 'Draw a chicken wing for weekly sketch', 'chicken wing chicken wing hot dog and balogna ', 'chicken dance.gif-1651544503148.gif', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 332, 287),
(129, 'Samuel', 4, '2022-05-21', 'Read Samuel', 'just read', 'Friends or just fans.pdf-1651544633381.pdf', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 0, 0),
(130, 'make 100 assignments', 1, '2022-05-03', 'Make 100 assignments for my final', 'WOO 20% the way there', 'Untitled.png-1651544685664.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 766, 1155),
(131, 'Los cantandores', 4, '2022-05-03', 'Que paso si escribe todas las informacciones en espanol', 'Jack se dara cuenta?', '790807760437903380.png-1651544812526.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 121, 121),
(132, 'La examen de historia', 4, '2022-05-09', 'estudias por la examen o va a morir', 'no quiero morir', 'arrogant.png-1651544869036.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 180, 192),
(133, 'Los monos son muy loco', 5, '2022-05-02', 'Mira, ahora voy a escribir cosas muy loca porque no tengo ideas', 'me quiero volver chango', 'epic snapdragon.png-1651545005893.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 473, 465),
(134, 'quiero dormir', 2, '2022-05-22', 'zzzzzzz estoy durmiendo', 'jimhimhimjim', 'aa.png-1651545138779.png', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 1067, 1425),
(135, 'pinche escuela es muy estupido', 5, '2022-06-24', 'Voy a tener viente anos este dia', 'es muy triste', 'death to comics.gif-1651545366284.gif', 'https://www.youtube.com/watch?v=p3G5IXn0K7A', 1080, 1080);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sepia_uploaded_cards`
--
ALTER TABLE `sepia_uploaded_cards`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sepia_uploaded_cards`
--
ALTER TABLE `sepia_uploaded_cards`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
