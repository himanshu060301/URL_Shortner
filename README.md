# URL Shortener Project

Description
-----------
This project is a URL shortener implemented using Node.js, EJS for templating, and authentication handled via JSON Web Tokens (JWT). Additionally, the project has been dockerized for easy deployment and is hosted on Render.

Table of Contents
-----------------
- Installation
- Usage
- Features

Installation
------------
To run this project locally, follow these steps:

1. Clone the repository from GitHub:

    git clone https://github.com/himanshu060301/URL_Shortner.git

2. Navigate to the project directory:

    cd url-shortener

3. Install dependencies using npm:

    npm install

4. Create a .env file and provide the necessary environment variables. These typically include a secret key for JWT authentication and database connection details.

5. Start the server:

    npm start

Usage
-----
Once the server is running, you can access the URL shortener web application through your browser. You will be prompted to login using your credentials. After successful authentication, you can shorten URLs and manage them as needed.

Features
--------
- URL Shortening: Generate short URLs for long links.
- Authentication: Users must authenticate using JWT to access the URL shortening functionality.
- Dockerization: The project has been dockerized for easy deployment and management.
