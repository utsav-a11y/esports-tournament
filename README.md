# Esports Tournament

A tournament management platform with a Spring Boot backend and a Vite + React frontend.

## Overview

- **Backend**: Java Spring Boot REST API in `backend/`
- **Frontend**: React + Vite UI in `frontend/`
- **Build**: Maven, with a local Maven distribution included in `maven/`

This repository is already connected to GitHub at `https://github.com/utsav-a11y/esports-tournament`.

## Project structure

- `backend/` - Java Spring Boot application
- `frontend/` - Vite + React frontend application
- `maven/` - local Maven distribution included for builds

## Run locally

### Backend

```powershell
cd c:\Users\utsav\Desktop\esports\backend
set JAVA_HOME=C:\Users\utsav\.jdk\jdk-21.0.8
..\maven\apache-maven-3.9.6\bin\mvn.cmd clean spring-boot:run
```

### Frontend

```powershell
cd c:\Users\utsav\Desktop\esports\frontend
npm install
npm run dev
```

## Notes

- The backend is already configured to build with Java 21.
- The repo uses `.gitignore` for common Java, Node, and editor files.
- `.gitattributes` is included to keep line endings consistent across Windows and other environments.
- This repository has been cleaned of internal upgrade logs and is ready for GitHub publishing.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contribution

If you want, I can also help you add a repository description, a better project logo, or a demo screenshot to make the GitHub page look more polished.
