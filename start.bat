@echo off
TITLE Esports Project Launcher
SET PROJECT_ROOT=%~dp0
SET MAVEN_BIN=%PROJECT_ROOT%maven\apache-maven-3.9.6\bin\mvn.cmd

echo ========================================================
echo   Starting Esports Tournament Project...
echo ========================================================

:: Background task to open the browser after a delay
:: Vite usually takes a few seconds to be ready
echo [INFO] Browser will open automatically at http://localhost:5173/ in 10 seconds.
start /B cmd /c "ping -n 11 127.0.0.1 > NUL && start http://localhost:5173/"

:: Start the Backend
echo [INFO] Starting Spring Boot Backend...
if not exist "%MAVEN_BIN%" (
    echo [WARNING] Local Maven not found at %MAVEN_BIN%. Trying system 'mvn'...
    start "Esports Backend" cmd /k "cd /d %PROJECT_ROOT%backend && mvn spring-boot:run"
) else (
    start "Esports Backend" cmd /k "cd /d %PROJECT_ROOT%backend && ^"%MAVEN_BIN%^" spring-boot:run"
)

:: Check for node_modules in frontend
if not exist "%PROJECT_ROOT%frontend\node_modules\" (
    echo [INFO] node_modules not found. Running npm install in frontend...
    echo This might take a minute...
    pushd "%PROJECT_ROOT%frontend"
    call npm install
    popd
)

:: Start the Frontend
echo [INFO] Starting Vite Frontend...
start "Esports Frontend" cmd /k "cd /d %PROJECT_ROOT%frontend && npm run dev"

echo ========================================================
echo   Both servers are starting!
echo   - Backend: http://localhost:8080
echo   - Frontend: http://localhost:5173
echo.
echo   You can safely close this window.
echo ========================================================
pause

