# Security Policy

## Supported version

Security fixes are intended for the current code on the default branch.

## Reporting a vulnerability

Please do not publish credentials, exploit details, personal data, or other sensitive information in a public issue.

Use GitHub's private vulnerability reporting feature for this repository when it is enabled. Otherwise, contact the repository owner through their GitHub profile and provide a concise description with steps to reproduce. Allow time for the issue to be reviewed before public disclosure.

## Credential handling

- Store database passwords and tokens in environment variables or a dedicated secret manager.
- Never commit `.env` files, database passwords, API keys, or production data.
- Rotate any credential that has been exposed. Removing it from the latest commit does not erase it from Git history.
