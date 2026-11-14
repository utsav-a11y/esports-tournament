# Local Setup Guide

This guide explains how to run the Esports Tournament Management System on Windows. The same project can also be run on macOS or Linux with equivalent shell commands.

## 1. Install prerequisites

Install and verify:

| Tool | Required version | Purpose |
| --- | --- | --- |
| Java JDK | 21 | Runs the Spring Boot backend |
| Apache Maven | 3.9 or newer | Builds and runs the backend |
| Node.js + npm | Node 18 or newer | Installs and runs the frontend |
| MySQL Server | 8 or newer | Stores project data |
| VS Code | Current version | Recommended editor |

Verify in PowerShell:

```powershell
java -version
mvn -version
node --version
npm --version
```

## 2. Start MySQL and create the database

1. Start the MySQL Server service.
2. Open MySQL Workbench and connect to your local server.
3. Run:

```sql
CREATE DATABASE esports_tournament;
```

If the database already exists, you do not need to create it again.

## 3. Configure and run the backend

The backend configuration is in `backend/src/main/resources/application.properties`. Database credentials are read from environment variables rather than stored in source control.

Open a VS Code terminal at the repository root and run:

```powershell
$env:DB_URL = "jdbc:mysql://localhost:3306/esports_tournament?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true"
$env:DB_USERNAME = "root"
$env:DB_PASSWORD = "YOUR_LOCAL_MYSQL_PASSWORD"

cd backend
mvn spring-boot:run
```

Replace the password placeholder with your own MySQL password. Do not paste it into screenshots, source files, or GitHub.

Wait until the terminal displays a message similar to:

```text
Started TournamentApplication
```

The backend API is available at [http://localhost:8080](http://localhost:8080).

Keep this terminal running.

## 4. Install and run the frontend

Open a **second terminal** at the repository root:

```powershell
cd frontend
npm install
npm run dev
```

Open the local address printed by Vite, usually [http://localhost:5173](http://localhost:5173).

The Vite development server proxies requests beginning with `/api` to `http://localhost:8080`. This allows the frontend and backend to communicate without hard-coding the computer's Wi-Fi/LAN IP address in the browser.

Keep this terminal running too.

## 5. Daily startup checklist

After the first-time installation, the normal startup process is:

1. Start MySQL Server.
2. Open the repository folder in VS Code.
3. In terminal 1, set `DB_PASSWORD` (and any non-default DB settings), then run `cd backend` and `mvn spring-boot:run`.
4. In terminal 2, run `cd frontend` and `npm run dev`.
5. Open the frontend URL printed by Vite.

You do **not** need to repeat `npm install` every time. Run it again only after dependencies have changed or when setting up a fresh checkout.

## 6. Useful API endpoints

With the backend running:

- `GET http://localhost:8080/api/players`
- `GET http://localhost:8080/api/teams`
- `GET http://localhost:8080/api/tournaments`
- `GET http://localhost:8080/api/matches`
- `GET http://localhost:8080/api/matches/results`

## 7. Troubleshooting

### `mvn` is not recognized

Install Apache Maven and add its `bin` directory to your Windows `Path`. Close and reopen VS Code after changing environment variables, then verify with `mvn -version`.

### Database connection fails

- Confirm the MySQL Server service is running.
- Confirm the database name is `esports_tournament`.
- Check `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD`.
- Make sure the MySQL account can connect to `localhost:3306`.

### Frontend shows API/network errors

- Confirm the backend terminal still shows `Started TournamentApplication`.
- Confirm the backend is listening on port `8080`.
- Start the frontend through `npm run dev` so the Vite proxy in `vite.config.js` is active.
- Use the URL printed by Vite. Restart the Vite server after editing `vite.config.js`.

### Port already in use

Close the other process using port `8080` (backend) or `5173` (frontend), then start the relevant server again.

## 8. Security reminder

Never commit real database credentials, API tokens, or local environment files. If a credential was committed to a public repository, rotate it immediately; deleting it from the latest file does not remove it from earlier Git history.
