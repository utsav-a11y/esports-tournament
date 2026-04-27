# Esports Tournament

This repository contains the Esports Tournament project with a Spring Boot backend and a Vite + React frontend.

## Project structure

- `backend/` - Java Spring Boot backend application
- `frontend/` - Vite frontend application
- `maven/` - local Maven distribution included for offline use

## GitHub setup instructions

1. Open PowerShell or Command Prompt.
2. Change to the project folder:
   ```powershell
   cd c:\Users\utsav\Desktop\esports
   ```
3. Initialize Git locally:
   ```powershell
   git init
   ```
4. Create `.gitignore` (already created in this repo).
5. Add all files and commit:
   ```powershell
   git add .
   git commit -m "Initial project import"
   ```
6. Create a GitHub repository manually or with GitHub CLI.

### If you use the GitHub CLI (`gh`)

```powershell
cd c:\Users\utsav\Desktop\esports
gh repo create <your-username>/<repo-name> --public --source=. --remote=origin --push
```

### If you prefer the GitHub website

1. Create a new repository on GitHub.
2. Copy the remote URL.
3. Add the remote and push:
   ```powershell
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

## Notes

- If you already have Git installed, the commands above are all you need.
- If you want, I can also help you create a GitHub repository name and a useful first commit message.
