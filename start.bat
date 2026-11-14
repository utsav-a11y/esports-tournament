@echo off
setlocal
title Esports Tournament Management System

set "PROJECT_ROOT=%~dp0"

echo ======================================================
echo   Esports Tournament Management System
echo ======================================================
echo.

where java >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Java was not found. Install JDK 21 and add it to PATH.
    pause
    exit /b 1
)

where mvn >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Maven was not found. Install Maven and add its bin folder to PATH.
    pause
    exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js was not found. Install Node.js 18 or newer.
    pause
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] npm was not found. Reinstall Node.js or repair PATH.
    pause
    exit /b 1
)

if not exist "%PROJECT_ROOT%frontend\node_modules" (
    echo [INFO] Installing frontend dependencies for the first run...
    pushd "%PROJECT_ROOT%frontend"
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed.
        popd
        pause
        exit /b 1
    )
    popd
)

echo [INFO] Starting backend in a new terminal...
start "Esports Backend" /D "%PROJECT_ROOT%backend" cmd /k "mvn spring-boot:run"

echo [INFO] Starting frontend in a new terminal...
start "Esports Frontend" /D "%PROJECT_ROOT%frontend" cmd /k "npm run dev"

echo.
echo Backend:  http://localhost:8080
echo Frontend: http://localhost:5173
echo.
echo Make sure MySQL Server is running and DB_PASSWORD is set
echo in the environment before launching this script.
echo Keep both server windows open while using the app.
echo.
pause
