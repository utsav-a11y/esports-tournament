# Contributing

Thanks for taking an interest in improving the Esports Tournament Management System.

## Before making a change

1. Check existing issues and pull requests to avoid duplicate work.
2. Keep changes focused and explain the problem they solve.
3. Do not commit passwords, tokens, private data, generated build output, or local environment files.

## Local development

Follow [setup_guide.md](setup_guide.md) to configure MySQL, run the Spring Boot backend, and start the React frontend.

## Validation

Before opening a pull request, run the checks relevant to your change:

```powershell
# Backend
mvn -f backend/pom.xml test

# Frontend
cd frontend
npm install
npm run build
```

The GitHub Actions workflow runs the backend Maven test phase and frontend production build on pushes and pull requests targeting `main`.

## Pull requests

A good pull request should include:

- A clear summary of the change and its motivation.
- Screenshots for visible UI changes.
- Notes about database or configuration changes.
- The commands/checks you ran and their results.
- Any known limitations or follow-up work.

Keep pull requests small and avoid unrelated formatting changes.
