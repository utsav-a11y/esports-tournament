# Run this from the project root: .\run-all.ps1
# It builds backend and frontend, then starts the backend jar and frontend preview server.

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $projectRoot

Write-Host "[1/4] Building backend..." -ForegroundColor Cyan
Push-Location backend
& "$projectRoot\maven\apache-maven-3.9.6\bin\mvn.cmd" clean package -DskipTests
if ($LASTEXITCODE -ne 0) {
    Write-Host "Backend build failed." -ForegroundColor Red
    exit $LASTEXITCODE
}
Pop-Location

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js is not installed or not on PATH. Install Node.js 18+ and restart PowerShell." -ForegroundColor Red
    exit 1
}
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm is not installed or not on PATH. Install Node.js and ensure npm is available." -ForegroundColor Red
    exit 1
}

Write-Host "[2/4] Building frontend..." -ForegroundColor Cyan
Push-Location frontend
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed." -ForegroundColor Red
    exit $LASTEXITCODE
}
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Frontend build failed." -ForegroundColor Red
    exit $LASTEXITCODE
}
Pop-Location

Write-Host "[3/4] Starting backend..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$projectRoot\backend'; java -jar target\tournament-0.0.1-SNAPSHOT.jar"

Write-Host "[4/4] Starting frontend preview server..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$projectRoot\frontend'; npm run preview -- --host 0.0.0.0 --port 4173"

Write-Host "Done. Backend: http://localhost:8080" -ForegroundColor Green
Write-Host "Frontend preview: http://localhost:4173" -ForegroundColor Green
