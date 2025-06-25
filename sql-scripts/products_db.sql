-- Script d'initialisation de la base de données
-- Ce script sera exécuté automatiquement au démarrage de MySQL
USE products_db;
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3307
-- Généré le : mer. 25 juin 2025 à 16:29
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Base de données : `products_db`
--
-- --------------------------------------------------------
--
-- Structure de la table `categories`
--
CREATE TABLE `categories` (
    `id` bigint(20) NOT NULL,
    `name` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Déchargement des données de la table `categories`
--
INSERT INTO `categories` (`id`, `name`)
VALUES (1, 'Food'),
    (2, 'Book'),
    (3, 'Fashion');
-- --------------------------------------------------------
--
-- Structure de la table `products`
--
CREATE TABLE `products` (
    `id` bigint(20) NOT NULL,
    `created_at` datetime(6) DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    `expiry_date` datetime(6) DEFAULT NULL,
    `image_url` varchar(255) DEFAULT NULL,
    `name` varchar(255) NOT NULL,
    `price` decimal(38, 2) DEFAULT NULL,
    `sku` varchar(255) NOT NULL,
    `stock_quantity` int(11) DEFAULT NULL,
    `category_id` bigint(20) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Déchargement des données de la table `products`
--
INSERT INTO `products` (
        `id`,
        `created_at`,
        `description`,
        `expiry_date`,
        `image_url`,
        `name`,
        `price`,
        `sku`,
        `stock_quantity`,
        `category_id`
    )
VALUES (
        1,
        '2025-06-25 13:43:49.000000',
        'It\'s a makeup tool',
        NULL,
        'products/c02fa97e-3cf9-4516-b4cd-36c7ffb3356d_blue-model-career-kit-arrangement.jpg',
        'Makeup',
        3000.00,
        '30',
        200,
        3
    ),
    (
        2,
        '2025-06-25 14:13:25.000000',
        'A good science book',
        NULL,
        'products/3a86e423-3216-4790-9325-a77e8930149a_front-view-stacked-books-diploma-earth-globe-with-copy-space-education-day.jpg',
        'Science Book',
        30.00,
        '12',
        5234,
        2
    ),
    (
        3,
        '2025-06-25 14:33:59.000000',
        'Nice accessory',
        NULL,
        'products/417bbd9d-9b3f-425f-896a-ca603dfbbd54_view-women-bag-stuff.jpg',
        'Woman accessory',
        1378.00,
        '45',
        67,
        3
    );
-- --------------------------------------------------------
--
-- Structure de la table `suppliers`
--
CREATE TABLE `suppliers` (
    `id` bigint(20) NOT NULL,
    `address` varchar(255) DEFAULT NULL,
    `contact_info` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Déchargement des données de la table `suppliers`
--
INSERT INTO `suppliers` (`id`, `address`, `contact_info`, `name`)
VALUES (1, 'Fès', '0768978667', 'Adnan'),
    (2, 'Lyon', '0678904567', 'Haki Saleh');
-- --------------------------------------------------------
--
-- Structure de la table `transactions`
--
CREATE TABLE `transactions` (
    `id` bigint(20) NOT NULL,
    `created_at` datetime(6) DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    `note` varchar(255) DEFAULT NULL,
    `status` enum(
        'CANCELLED',
        'COMPLETED',
        'PENDING',
        'PROCESSING'
    ) DEFAULT NULL,
    `total_price` decimal(38, 2) DEFAULT NULL,
    `total_products` int(11) DEFAULT NULL,
    `transaction_type` enum('PURCHASE', 'RETURN_TO_SUPPLIER', 'SALE') DEFAULT NULL,
    `update_at` datetime(6) DEFAULT NULL,
    `product_id` bigint(20) DEFAULT NULL,
    `supplier_id` bigint(20) DEFAULT NULL,
    `user_id` bigint(20) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Déchargement des données de la table `transactions`
--
INSERT INTO `transactions` (
        `id`,
        `created_at`,
        `description`,
        `note`,
        `status`,
        `total_price`,
        `total_products`,
        `transaction_type`,
        `update_at`,
        `product_id`,
        `supplier_id`,
        `user_id`
    )
VALUES (
        1,
        '2025-06-25 14:51:22.000000',
        'A great Book',
        'It\'s needed urgently ',
        'PROCESSING',
        120000.00,
        4000,
        'PURCHASE',
        '2025-06-25 14:52:49.000000',
        2,
        1,
        1
    );
-- --------------------------------------------------------
--
-- Structure de la table `users`
--
CREATE TABLE `users` (
    `id` bigint(20) NOT NULL,
    `created_at` datetime(6) DEFAULT NULL,
    `email` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `phone_number` varchar(255) NOT NULL,
    `role` enum('ADMIN', 'MANAGER') DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
-- Déchargement des données de la table `users`
--
INSERT INTO `users` (
        `id`,
        `created_at`,
        `email`,
        `name`,
        `password`,
        `phone_number`,
        `role`
    )
VALUES (
        1,
        '2025-06-24 14:25:54.000000',
        'salim.saleymidou88@gmail.com',
        'Salim Saley Midou',
        '$2a$10$t5zsdFMsaiH2ziNwVuIiMe05LI1Ye4tDDyFVNGKru7/.GQwrkHrsW',
        '0769643466',
        'ADMIN'
    ),
    (
        2,
        '2025-06-24 19:08:01.000000',
        'admin@gmail.com',
        'Admin',
        '$2a$10$oeOtezuau37fIV07jQ8e3O9HW5Sc5MbHNB8n9cqeGxaSF2UUYTwGW',
        '0769643789',
        'MANAGER'
    );
--
-- Index pour les tables déchargées
--
--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
ADD PRIMARY KEY (`id`);
--
-- Index pour la table `products`
--
ALTER TABLE `products`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `UKfhmd06dsmj6k0n90swsh8ie9g` (`sku`),
    ADD KEY `FKog2rp4qthbtt2lfyhfo32lsw9` (`category_id`);
--
-- Index pour la table `suppliers`
--
ALTER TABLE `suppliers`
ADD PRIMARY KEY (`id`);
--
-- Index pour la table `transactions`
--
ALTER TABLE `transactions`
ADD PRIMARY KEY (`id`),
    ADD KEY `FKcdpkn7bkq15bjvlw9mo46l9ft` (`product_id`),
    ADD KEY `FKih7q8ly56miqunee4xnylu4i9` (`supplier_id`),
    ADD KEY `FKqwv7rmvc8va8rep7piikrojds` (`user_id`);
--
-- Index pour la table `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);
--
-- AUTO_INCREMENT pour les tables déchargées
--
--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 4;
--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 4;
--
-- AUTO_INCREMENT pour la table `suppliers`
--
ALTER TABLE `suppliers`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 3;
--
-- AUTO_INCREMENT pour la table `transactions`
--
ALTER TABLE `transactions`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 2;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 3;
--
-- Contraintes pour les tables déchargées
--
--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
ADD CONSTRAINT `FKog2rp4qthbtt2lfyhfo32lsw9` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
ADD CONSTRAINT `FKcdpkn7bkq15bjvlw9mo46l9ft` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
    ADD CONSTRAINT `FKih7q8ly56miqunee4xnylu4i9` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`),
    ADD CONSTRAINT `FKqwv7rmvc8va8rep7piikrojds` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;