# Esports Tournament Management System - Setup Guide

This guide provides step-by-step instructions to set up, build, and run the Esports Tournament Management System.

## 1. Prerequisites (Software to Install)
Before starting, ensure you have the following installed on your machine:
- **Java JDK 17+**: Required for the Spring Boot backend. [Download here](https://adoptium.net/)
- **MySQL Server & Workbench**: Required for the database. [Download here](https://dev.mysql.com/downloads/installer/)
- **Node.js (v18+)**: Required for the React frontend. [Download here](https://nodejs.org/)
- **Maven**: (Optional) Spring Boot wrapper can be used, but installing Maven is recommended. [Download here](https://maven.apache.org/download.cgi)
- **IDE**: IntelliJ IDEA (recommended for backend) and VS Code (recommended for frontend).

## 2. Database Setup
1. Open **MySQL Workbench**.
2. Connect to your local MySQL server.
3. If the database doesn't exist, create it by running the following SQL query:
   ```sql
   CREATE DATABASE esports_tournament;
   ```
4. The Spring Boot application is configured with `spring.jpa.hibernate.ddl-auto=update`, which will automatically create the required tables (`players`, `teams`, `tournaments`, `matches`, `match_results`, `registrations`, `team_members`, `prizes`) if they don't already exist.

## 3. Backend Setup (Spring Boot)
1. Open the `backend` folder in **IntelliJ IDEA** or your preferred IDE.
2. Locate the `src/main/resources/application.properties` file.
3. Update the database credentials to match your local MySQL setup:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/esports_tournament
   spring.datasource.username=root
   spring.datasource.password=YOUR_MYSQL_PASSWORD
   ```
4. **To run the backend:**
   - In IntelliJ: Locate the `TournamentApplication.java` file in `src/main/java/com/esports/tournament/` and click the green "Run" button.
   - Using command line: Navigate to the `backend` directory and run:
     ```bash
     mvn spring-boot:run
     ```
5. The backend API will start on `# Esports Tournament Management System

## Overview
The Esports Tournament Management System is a full-stack web application designed to manage esports tournaments, players, teams, matches, and results. It provides a user-friendly interface for registering players and teams, creating tournaments, scheduling matches, and tracking outcomes. The system is built with a Spring Boot backend for robust API services and a React frontend for an interactive user experience.

T# Esports Tournament Management System

## Overview
The Esports Tournament Management System is a full-stack web application designed to manage esports tournaments, players, teams, matches, and results. It provides a user-friendly interface for registering players and teams, creating tournaments, scheduling matches, and tracking outcomes. The system is built with a Spring Boot backend for robust API services and a React frontend for an interactive user experience.

This project aims to streamline the organization of esports events, making it easier for administrators to handle registrations, match scheduling, and result tracking while providing participants with real-time updates.

## Features
- **Player Management**: Register and manage player profiles with details like name, email, and game preferences.
- **Team Management**: Create teams, add members, and manage team registrations for tournaments.
- **Tournament Creation**: Admins can create tournaments with custom rules, schedules, and prize pools.
- **Match Scheduling**: Automatically or manually schedule matches based on tournament brackets.
- **Result Tracking**: Record match results, update standings, and calculate points or rankings.
- **Prize Distribution**: Manage and distribute prizes based on tournament outcomes.
- **Real-time Updates**: Live updates on match statuses and tournament progress.
- **Responsive UI**: A modern, mobile-friendly interface built with React and Tailwind CSS.
- **API-Driven**: RESTful APIs for seamless integration with other systems.
- **Database Integration**: Uses MySQL for persistent data storage with JPA/Hibernate.
- **Security**: Basic authentication and authorization for admin and user roles.

## Tech Stack
- **Backend**: Java 17, Spring Boot, Spring Data JPA, Hibernate, MySQL
- **Frontend**: React 18, Vite, Tailwind CSS, Axios
- **Database**: MySQL 8.0
- **Build Tools**: Maven (for backend), npm (for frontend)
- **Other**: Tomcat (embedded in Spring Boot), ESLint (for code quality)

## Prerequisites
Before setting up the project, ensure you have the following installed:
- **Java JDK 17+**: Download from [Adoptium](https://adoptium.net/).
- **MySQL Server & Workbench**: Download from [MySQL](https://dev.mysql.com/downloads/installer/).
- **Node.js (v18+)**: Download from [Node.js](https://nodejs.org/).
- **Maven**: Download from [Maven](https://maven.apache.org/download.cgi). Follow these steps to install:
  1. Unpack the archive (e.g., `apache-maven-3.9.6.zip`) to a directory like `C:\Program Files\apache-maven-3.9.6`.
  2. Add the `bin` directory to your PATH environment variable (e.g., `C:\Program Files\apache-maven-3.9.6\bin`).
  3. Ensure `JAVA_HOME` is set to your JDK installation path.
  4. Verify installation by running `mvn --version` in the terminal.
- **IDE**: IntelliJ IDEA for backend, VS Code for frontend.

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/esports-tournament-system.git
cd esports-tournament-system`.

## 4. Frontend Setup (React + Tailwind)
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the necessary Node dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. The frontend will start. Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## 5. API Endpoints List
Here are the exposed REST APIs running on `http://localhost:8080/api`:
- `GET /api/players` - Get all players
- `POST /api/players` - Create/register a new player
- `GET /api/tournaments` - Get all tournaments
- `POST /api/tournaments` - Create a new tournament
- `GET /api/matches` - Get all matches
- `GET /api/matches/results` - Get all match results
- `GET /api/teams` - Get all teams
- `POST /api/teams/register` - Register a new team
