-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 16 Feb 2020 pada 08.58
-- Versi Server: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PR_ku`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `todolist`
--

CREATE TABLE `todolist` (
  `id_todo` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama_todo` text NOT NULL,
  `description` text NOT NULL,
  `deadline` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `todolist`
--

INSERT INTO `todolist` (`id_todo`, `id_user`, `nama_todo`, `description`, `deadline`) VALUES
(1, 9, 'PR PBO', 'buat aplikasi', 'pas uas'),
(10, 9, 'PR PKN', 'buat vlog', 'pas uas');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `username`, `name`, `email`, `password`) VALUES
(1, '', 'abcd', 'abcd', '$2a$08$0SLdS3AEJRr4q4bp2l13vu84R7PDYNWZHl1lySjuA4ye4wUlpZWyC'),
(8, 'a', 'a', 'a', '$2a$08$RSfWWdTgeTo2Tx05Xmc.eeOiB84PTVTkukgS3CVyIQEiGYatvqava'),
(9, 'mrakhaf', 'rakha', 'muhammadrakhaf@gmail.com', '$2a$08$i1/9ijHPSoeQBrW9S2xCouFYEBxFCFns9LWYX3pGvWycmOM59ARXu'),
(10, 'b', 'b', 'b@gmail.com', '$2a$08$UoyWgpHXoJ/FmTpxYjXkVuL560K8KNmWGipCB38ZnXy1vzqnnB6Qi'),
(11, 'c', 'c', 'c@gmail.com', '$2a$08$QuNSiJ.xxeX7WFjSktCax.sDKtsrNvY2/VQ/QS8SS16l.C8HfzSWK'),
(13, 'aba', 'aba', 'aba@gmail.com', '$2a$08$EZsG2d3Jk14rIrc0D32IW.9PlwCVztcg2RIGFCqt.G9w46P2IUHa6'),
(14, 'dantijelek', 'dhanty', 'dhanty@gmail.com', '$2a$08$i/QikciKmEi5n8E7DIBOUu3lcRagK/mzaP/D45ZU9Qb6EYJw2TFjy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id_todo`),
  ADD KEY `id_user` (`id_user`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id_todo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `todolist`
--
ALTER TABLE `todolist`
  ADD CONSTRAINT `todolist_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
