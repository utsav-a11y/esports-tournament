@echo off
TITLE Esports Project Runner

echo ========================================================
echo   Starting Esports Tournament Project...
echo ========================================================

:: Start the Backend in a new Command Prompt window
echo Starting Spring Boot Backend...
start "Esports Backend" cmd /k "cd backend && mvn spring-boot:run"

:: Wait for 5 seconds to let the backend initialize before starting frontend
timeout /t 5 /nobreak > NUL

:: Start the Frontend in a new Command Prompt window
echo Starting React/Vite Frontend...
start "Esports Frontend" cmd /k "cd frontend && npm run dev"

echo ========================================================
echo   Both frontend and backend have been launched!
echo   Check the new windows for their status.
echo   You can safely close this window.
echo ========================================================
pause
