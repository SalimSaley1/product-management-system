# Product Management System

A modern web application developed with React and Spring Boot, offering a robust and performant full-stack architecture.

The application enables inventory and purchase management: managing products, suppliers, categories, and transactions with a role-based system (Admin/Manager).

## 🎯 Features

- **Authentication**: Secure login/registration
- **Product management**: CRUD operations for products and categories (Admin only)
- **Supplier management**: CRUD operations for suppliers (Admin only)
- **Purchases and transactions**: Order management and transaction tracking (Admin + Manager)
- **User profile**: Personal information management

## 🚀 Technologies Used

### Frontend
- **React 19** - JavaScript library for building user interfaces
- **Vite** - Modern and fast build tool for frontend development
- **Simple CSS** - For styling
- **React Router** - Client-side routing management
- **Axios** - HTTP client for API calls
- **Context API** - Global state management
- **Crypto-js** - For securing tokens in localStorage

### Backend
- **Spring Boot 3** - Java framework for web application development
- **Spring Web** - Module for creating REST APIs
- **Spring Data JPA** - Data access abstraction
- **Spring Security** - Application security
- **Spring Boot Starter Validation** - Data validation
- **Maven** - Dependency manager and build tool

### Database
- **MySQL** - Relational database
- **Hibernate** - ORM (Object-Relational Mapping)

### Security & Authentication
- **JWT (JSON Web Tokens)** - Stateless authentication
- **Spring Security** - Security configuration
- **BCrypt** - Password hashing
- **CORS** - Cross-Origin Resource Sharing configuration

### Development Tools
- **Docker** - Application containerization
- **Docker Compose** - Multi-container orchestration
- **Git** - Version control
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Postman** - API testing
- **Swagger/OpenAPI** - API documentation

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **npm**
- **Java 17** or higher
- **Maven 3.6+**
- **Docker** (optional)

## 🏗️ Architecture

```
├── backend/
│   ├── src/main/java/
│   │   ├── security/          # Data security
│   │   ├── controllers/       # REST controllers
│   │   ├── services/          # Business logic
│   │   ├── repositories/      # Data access
│   │   ├── entities/          # JPA entities
│   │   └── dtos/              # Data Transfer Objects
│   └── Dockerfile          
│    
│       
└── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Application pages
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # API services
│   │   ├── contexts/        # Global state management
│   ├── public/              # Static assets
│   └── index.html           # HTML entry point for "Vite" project
│   
└── sql-scripts/products_db.sql  # Database SQL script
└── docker-compose.yml /         # Spring and MySQL container startup

```

## 🛠️ Installation

```bash
# Clone the repository
git clone [REPO_URL]
cd backend
```

## 🔧 Configuration

### Modify docker-compose.yml variables

#### Replace each "${...}" with the following values:
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

## 🚀 Running the Application

### Backend
```bash
# Build the application
mvn clean package -DskipTests

# Build and run with Docker Compose
docker-compose up --build
```

### Frontend (React + Vite)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run in development mode
npm run dev
```

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 👥 Authors

- **Salim SALEY MIDOU**

---