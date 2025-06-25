# Product Management System

Une application web moderne développée avec React et Spring Boot, offrant une architecture full-stack robuste et performante.

l'Application permet de faire la gestion d'inventaire et d'achats: la gestion des produits, fournisseurs, catégories et transactions avec un système de rôles (Admin/Manager).


## 🎯 Fonctionnalités

- **Authentification** : Connexion/inscription sécurisée
- **Gestion produits** : CRUD des produits et catégories (Admin uniquement)
- **Gestion fournisseurs** : CRUD des fournisseurs (Admin uniquement)
- **Achats et transactions** : Gestion des commandes et suivi des transactions (Admin + Manager)
- **Profil utilisateur** : Gestion des informations personnelles


## 🚀 Technologies Utilisées

### Frontend
- **React 19** - Bibliothèque JavaScript pour la création d'interfaces utilisateur
- **Vite** - Build tool moderne et rapide pour le développement frontend
- **CSS simple** - Pour le styling
- **React Router** - Gestion du routage côté client
- **Axios** - Client HTTP pour les appels API
- **Contexte API** - Gestion de l'état global
- **Crypto-js** - Pour sécuriser le token dans localStorage


### Backend
- **Spring Boot 3** - Framework Java pour le développement d'applications web
- **Spring Web** - Module pour la création d'APIs REST
- **Spring Data JPA** - Abstraction pour l'accès aux données
- **Spring Security** - Sécurisation de l'application
- **Spring Boot Starter Validation** - Validation des données
- **Maven** - Gestionnaire de dépendances et build

### Base de Données
- **MySQL** - Base de données relationnelle
- **Hibernate** - ORM (Object-Relational Mapping)

### Sécurité & Authentification
- **JWT (JSON Web Tokens)** - Authentification stateless
- **Spring Security** - Configuration de la sécurité
- **BCrypt** - Hachage des mots de passe
- **CORS** - Configuration Cross-Origin Resource Sharing

### Outils de Développement
- **Docker** - Conteneurisation de l'application
- **Docker Compose** - Orchestration multi-conteneurs
- **Git** - Contrôle de version
- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** - Formatage de code
- **Postman** - Test des APIs
- **Swagger/OpenAPI** - Documentation API


## 📋 Prérequis

- **Node.js** (version 18 ou supérieure)
- **npm** 
- **Java 17** ou supérieur
- **Maven 3.6+**
- **Docker** (optionnel)



## 🏗️ Architecture

```
├── backend/
│   ├── src/main/java/
│   │   ├── security/          # Securité des données
│   │   ├── controllers/       # Contrôleurs REST
│   │   ├── services/          # Logique métier
│   │   ├── repositories/      # Accès aux données
│   │   ├── entities/          # Entités JPA
│   │   └── dtos/              # Data Transfer Objects
│   └── Dockerfile          
│    
│       
└── frontend/
│   ├── src/
│   │   ├── components/      # Composants React réutilisables
│   │   ├── pages/           # Pages de l'application
│   │   ├── hooks/           # Hooks personnalisés
│   │   ├── services/        # Services API
│   │   ├── contexts/        # Gestion d'état global
│   ├── public/              # Assets statiques
│   └── index.html           # Point d'entrée HTML car projet "Vite"
│   
└── sql-scripts/products_db.sql  # Script sql de la base des données
└── docker-compose.yml /         # Démarrage de conteneurs spring et mysql

```

## 🛠️ Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd backend
```


## 🔧 Configuration

### Modifier les variables docker-compose.yml

#### Remplacer chaque "${...}" par les valeurs suivantes:
```yaml
# MySQL Database Config
DB_HOST=mysql
DB_PORT=3306
DB_NAME=products_db
DB_USERNAME=root
DB_PASSWORD=yourpassword

  # File Upload Limits
MAX_FILE_SIZE=2GB
MAX_REQUEST_SIZE=2GB

  # JWT
SECRETE_JWT_STRING=change_supersecret_keychange_supersecret_keychange_supersecret_key

  # Logging
LOG_LEVEL=debug
```



## 🚀 Lancer l’application

### Backend 
```bash
# Construire l'application
mvn clean package -DskipTests

# Construire et lancer avec Docker Compose
docker-compose up --build
```

### Frontend (React + Vite)

```bash
# Naviguer vers le dossier frontend
cd frontend

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```


## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- **Salim SALEY MIDOU** 

---





