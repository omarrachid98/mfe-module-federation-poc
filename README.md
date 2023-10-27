# Microfrontend Service with React, Vite, and Module Federation

This project is an example of a microfrontend service created using React, Vite, and the Module Federation plugin. 
In this monorepo, we have two projects: one serving as the host and the other as the remote. 
These projects can be run independently and communicate dynamically to create a complex application.

## Features

- **Host Project**: The host project is the entry point of the application and includes a React router for navigation. It also utilizes the Module Federation plugin to dynamically integrate the remote project.

- **Remote Project**: The remote project is a separate microfrontend application that can be dynamically loaded by the host project. This enables breaking the application into modular parts that can be developed and distributed independently.

## Installation and Startup Instructions

Ensure you have Node.js and npm installed on your system. Then, follow these steps:

### Install dependencies for both projects:
1. Clone the repository: 
```bash
  git clone https://github.com/omarrachid98/mfe-module-federation-poc.git
```
2. Navigate into directory:
```bash
  cd mfe-module-federation-poc
```

### Install dependencies for both projects:
```bash
  cd host
  npm install

  cd remote
  npm install
```

### Start boh projects
```bash
  cd host
  npm run dev

  cd remote
  npm run dev
```

#### You can now access the host project at http://localhost:3000 in your browser.

## How It Works
The host project dynamically imports the remote project using the Module Federation plugin. When navigating to a specific route, the host project can load the corresponding remote module. This allows breaking the application into smaller parts that can be developed and distributed separately.

## Contributions
We welcome contributions! If you would like to contribute to this project, follow these steps:

### Fork the repository.

Create a new branch for your changes:

```bash
Copy code
git checkout -b feature/new-feature
Make your changes, ensuring they follow the project's style guidelines.
```

#### Run tests, if any, and make sure they all pass:
Commit your changes:
```bash
git commit -m "Add the new feature"
```
Push your changes to your fork:
```bash
git push origin feature/new-feature
```

Create a Pull Request in the original repository and describe your changes in detail.

#### Wait for feedback and collaborate to complete the Pull Request.

#### Thank you for your contribution!
