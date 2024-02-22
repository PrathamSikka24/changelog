# Changelog

### Overview
***
The Changelog is a tool designed to track the evolution of software applications from their initial deployment through all subsequent updates, modifications, and feature additions. It's built on the principle that understanding an application's history is crucial for developers, users, and stakeholders. This project supports Markdown, enabling documentation that's both accessible and easy to navigate. It leverages a contemporary stack comprising React, Bun.js, Bao.js, and CockroachDB to deliver a robust platform for tracking the evolution of software projects.

### Features
***
- **Comprehensive History Tracking:** Every step of the application's journey is logged, including updates, deletions, and modifications, ensuring nothing is lost in the course of development.<br>
- **Markdown Support:** Leveraging Markdown for documentation allows for clear, structured, and visually appealing logs.<br>
- **User-Friendly Interface:** Designed with ease of use in mind, making it simple for developers of all skill levels to maintain a detailed history of their projects.<br>

## Technology Stack

### Database

- **[CockroachDB](https://www.cockroachlabs.com/)**: A cloud-native, distributed SQL database designed for scalability and resilience. CockroachDB ensures strong consistency, distributed transactions, and seamless scaling, making it an ideal choice for our application's data storage and management needs.

### Backend

- **[Bun.js](https://bun.sh/)**: A modern JavaScript runtime like Node.js, designed for speed and efficiency. Bun.js powers our backend, offering fast execution, built-in package management, and comprehensive support for web APIs. It's chosen for its impressive performance metrics and simplicity in handling server-side logic.

### Middleware

- **[Bao.js](https://baojs.org/)**: An efficient middleware framework for Node.js applications, focusing on simplicity and speed. Bao.js facilitates the smooth integration between our backend and frontend, ensuring secure and rapid data processing and API calls.

### Frontend Framework

- **[React.js](https://react.dev/)**: A declarative, efficient, and flexible JavaScript library for building user interfaces. Our application leverages React.js to create dynamic, interactive web pages that improve the user experience with real-time updates and responsive design.

## Deployment

Our application is containerized using **[Docker](https://www.docker.com/)**. Docker simplifies deployment by packaging the application and its environment into containers. This ensures consistency across different development and production environments, making deployment efficient and scalable. Docker's containerization allows us to easily manage and deploy our application's various components, including the backend, middleware, and database services.

## Additional Information

- **WSL (Windows Subsystem for Linux)**: Given Bun.js's requirement for a Linux environment, Windows users can leverage WSL to run Linux binaries natively on Windows. This setup is crucial for developers working on Windows to ensure compatibility and performance when working with Bun.js and other Linux-dependent technologies.


 ### High Level Design
 ---

![HLD Diagram for Changelog](https://github.com/PrathamSikka24/changelog/assets/116445216/248e74f0-4af1-41ae-a0c1-0f97ce31c6e3)

## Working

### User Interaction

1. **Frontend Interaction**: Users interact with the Changelog application through a React-based frontend. This setup enables a responsive and interactive user experience, allowing users to effortlessly submit changes, view changelogs, and navigate through different project histories.

### System Operations

2. **Backend Communication**: User actions trigger requests to the backend, powered by Bun.js. This includes operations such as creating new changelog entries, updating existing ones, or deleting records. Bun.js facilitates efficient handling of these requests with its high-performance capabilities.

3. **Middleware Processing**: Bao.js, serving as the middleware, seamlessly connects the frontend to the backend. It processes requests, performs necessary validations or transformations, and routes them to the appropriate services within the backend.

### Data Management and Responses

4. **Database Interactions**: The backend interacts with CockroachDB for all data storage and retrieval operations. Whether it’s adding new changelog entries, fetching updates, or managing deletions, CockroachDB ensures consistent, secure, and scalable data management.

5. **Caching and Performance Optimization**: For frequently accessed data, such as recent changelog entries or popular projects, Redis is utilized as an in-memory data store to enhance performance and reduce load times.

6. **Response Handling**: Once the backend has processed a request and performed the necessary data operations, a response is generated and sent back through the middleware to the frontend. The React application then dynamically updates the user interface to reflect the changes or display the requested data, ensuring a seamless user experience.
   
This workflow depicts our comprehensive, efficient, and user-friendly platform for tracking software project histories through changelogs.
