-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2024 at 06:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kanbanboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `kanbanboard`
--

CREATE TABLE `kanbanboard` (
  `id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kanbanboard`
--

INSERT INTO `kanbanboard` (`id`, `title`, `tag`, `createAt`) VALUES
(12, 'Next', 'doingo', '2024-08-09 21:01:10'),
(13, 'NextJS', 'todo', '2024-08-09 21:09:12'),
(16, 'test', 'done', '2024-08-09 21:15:26'),
(18, 'Vite', 'doing', '2024-08-09 21:42:00'),
(19, 'test add', 'todo', '2024-08-09 23:00:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kanbanboard`
--
ALTER TABLE `kanbanboard`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kanbanboard`
--
ALTER TABLE `kanbanboard`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
