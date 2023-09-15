# Git Commit History App

## Description
A web application to display the commit history of a given GitHub repository. This project showcases the use of the GitHub API to fetch commit data and presents it in a user-friendly interface.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
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

## Installation & Setup
1. Clone the repository: `git clone [REPO_LINK]`
2. Navigate to the project directory: `cd [PROJECT_DIRECTORY]`
3. Install dependencies: `npm install`
4. Run the application: `npm start`
5. Open a browser and visit `http://localhost:3000` 

## Usage
1. Reload the website to fetch new commits.

## Tech Stack
- **Frontend**: React.js, Tremor.js, Nest.js
- **Testing**: Jest, React-Testing-Library
- **API**: GitHub API

## API Endpoints
- `/latest-commits`: Fetches the latest commits from the specified repository.
- `/contributer-activity`: Fetches total number of commits by each contributer.
  
## Error Handling
Errors such as failed API calls or invalid repository URLs are gracefully handled and communicated to the user via user-friendly messages.

## Testing
This project uses Jest and React-Testing-Library for unit testing. To run the tests:
1. Navigate to the project directory: `cd [PROJECT_DIRECTORY]`
2. Run the tests: `npm test`

## Contributing
If you'd like to contribute, please fork the repository and create a pull request. For bugs, questions, or comments, please open an issue.

## License
This project is open-source and available under the [MIT License](LICENSE).

