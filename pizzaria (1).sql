-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/11/2023 às 23:05
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pizzaria`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `bebidas`
--

CREATE TABLE `bebidas` (
  `id` int(11) NOT NULL,
  `nome` text NOT NULL,
  `valor` varchar(100) NOT NULL,
  `img` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `bebidas`
--

INSERT INTO `bebidas` (`id`, `nome`, `valor`, `img`) VALUES
(1, 'Coca-cola', '6', '../img/coca.png'),
(2, 'Coca-Cola 2L', '13', '../img/coca2L.png'),
(3, 'Fanta', '6', '../img/fanta.png'),
(4, 'Guaraná', '6', '../img/guarana.png'),
(5, 'Guaraná 2L', '13', '../img/guarana2L.png'),
(6, 'Pepsi', '6', '../img/pepsi.png'),
(7, 'Pepsi 3L', '17', '../img/pepsi3L.png'),
(8, 'Sprite', '5', '../img/sprite.png'),
(9, 'Sprite 2L', '13', '../img/sprite2L.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pizzas`
--

CREATE TABLE `pizzas` (
  `id` int(11) NOT NULL,
  `nome` text NOT NULL,
  `valor` varchar(100) NOT NULL,
  `img` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pizzas`
--

INSERT INTO `pizzas` (`id`, `nome`, `valor`, `img`) VALUES
(1, 'Portuguesa', '40', '../img/1.png'),
(2, 'Paulista', '30', '../img/2.png'),
(3, 'Calabresa', ' 35', '../img/3.png'),
(4, 'Margarita', '38', '../img/4.png'),
(5, 'Frango com Catupiry', '42', '../img/5.png'),
(6, 'Quatro Queijos', '37', '../img/6.png'),
(7, 'Vegetariana', '36', '../img/7.png'),
(8, 'Pepperoni', '45', '../img/8.png'),
(9, 'Havaiana', ' 39', '../img/9.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `senha` varchar(10) NOT NULL,
  `confirmarSenha` int(13) NOT NULL,
  `email` varchar(20) NOT NULL,
  `cep` int(8) NOT NULL,
  `telefone` int(13) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `cidade` varchar(20) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `logradouro` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `bebidas`
--
ALTER TABLE `bebidas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `bebidas`
--
ALTER TABLE `bebidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
