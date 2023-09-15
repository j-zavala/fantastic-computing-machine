# Git Commit History App

## Description
A web application to display the commit history of a given GitHub repository. This project showcases the use of the GitHub API to fetch commit data and presents it in a user-friendly interface. The project is structured with a Nest.js backend and a React-based frontend.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Backend](#backend)
- [Frontend](#frontend)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact Information](#contact-information)

## Prerequisites
- Node.js and npm installed on your machine.
- A GitHub account (for fetching commit data).
- Docker (optional, for unified development environment).

## Installation & Setup
1. Clone the repository: `git clone [REPO_LINK]`
2. Navigate to the project directory: `cd [PROJECT_DIRECTORY]`
3. Install dependencies for both backend and frontend: `npm run setup`
4. Run the application (both frontend and backend): `npm start`
5. Open a browser and visit `http://localhost:3000` 

## Usage
1. Reload website to fetch new commits.

## Tech Stack
- **Backend**: Nest.js
- **Frontend**: React.js
- **Build Tool**: Vite (for frontend)
- **Testing**: Jest, React-Testing-Library, Nest.js Testing Utilities
- **Containerization**: Docker
- **API**: GitHub API

## Backend
Detailed information about the backend, its structure, and functionalities can be found in the [backend README](./backend/README.md).

## Frontend
For a deeper dive into the frontend aspect, including components, services, and state management, refer to the [frontend README](./frontend/README.md).

## API Endpoints
- `/latest-commits`: Fetches the latest commits from the specified repository.
- `/contributer-activity`: Fetches total number of commits by each contributor.

## Error Handling
Errors such as failed API calls or invalid repository URLs are gracefully handled and communicated to the user via user-friendly messages.

## Testing
This project uses Jest and associated testing utilities for both unit and end-to-end testing. To run the tests:
1. Navigate to the project directory: `cd [PROJECT_DIRECTORY]`
2. Run the tests: `npm test`

## Contributing
If you'd like to contribute, please fork the repository and create a pull request. For bugs, questions, or comments, please open an issue.

## License
This project is open-source and available under the [MIT License](LICENSE).

