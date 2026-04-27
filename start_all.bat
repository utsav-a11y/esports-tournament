@echo off
TITLE Esports Project Runner
SET PROJECT_ROOT=%~dp0
SET MAVEN_BIN=%PROJECT_ROOT%maven\apache-maven-3.9.6\bin\mvn.cmd

echo ========================================================
echo   Starting Esports Tournament Project...
echo ========================================================

:: Check if Maven exists
if not exist "%MAVEN_BIN%" (
    echo [ERROR] Maven not found at %MAVEN_BIN%
    echo Please ensure the maven folder exists in the project root.
    pause
    exit /b
)

:: Start the Backend in a new Command Prompt window
echo Starting Spring Boot Backend...
start "Esports Backend" cmd /k "cd /d %PROJECT_ROOT%backend && ^"%MAVEN_BIN%^" spring-boot:run"

:: Wait for 5 seconds to let the backend initialize before starting frontend
echo Waiting for backend to initialize...
ping -n 6 127.0.0.1 > NUL

:: Start the Frontend in a new Command Prompt window
echo Starting React/Vite Frontend...
start "Esports Frontend" cmd /k "cd /d %PROJECT_ROOT%frontend && npm run dev"

echo ========================================================
echo   Both frontend and backend have been launched!
echo   - Backend: http://localhost:8080
echo   - Frontend: http://localhost:5173 (usually)
echo.
echo   Check the new windows for their status.
echo   You can safely close this window.
echo ========================================================
pause
