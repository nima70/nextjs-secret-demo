# Managing Next.js Secrets in CI/CD
This repository demonstrates a secure approach to managing environment variables in a Next.js application using Docker and GitHub Actions.

## Overview
In Next.js applications, handling environment variables, especially for client-side use, requires careful consideration. This project showcases how to securely manage and expose environment variables during the CI/CD process, ensuring that sensitive information is protected.

## Key Features
- **Next.js:** Leveraging environment variables securely on both the server and client side.
- **Docker:** Containerization of the Next.js application for consistent deployment.
- **GitHub Actions:** Automated build and deployment process with secure handling of secrets.
## How It Works
- **Dockerfile Modifications:** Integrates build-time arguments to securely pass environment  variables into the application.
- **GitHub Actions:** Uses GitHub Secrets to securely inject environment variables during the Docker build process, ensuring that sensitive information is not exposed in the codebase or public repositories.
## Repository Structure
- **src/:** Contains the Next.js application source code.
- **Dockerfile:** Configures the Docker image, including secure handling of environment variables.
- **.github/workflows/:** Contains the GitHub Actions workflow file used for CI/CD.
## Getting Started
Clone the repository and follow the instructions in the relevant blog post to set up and run the application.

## License
This project is licensed under the MIT License.