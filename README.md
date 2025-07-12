# OneBay Project

OneBay is a full-stack "Super App" that integrates various features into a single platform. This project includes a responsive web application built with React and Tailwind CSS, a mobile application using React Native (Expo), and a backend API developed with Node.js, Express, and PostgreSQL. The application also integrates Supabase for real-time capabilities and utilizes GitHub Actions for CI/CD deployment.

## Features

- **Web Application**: A responsive web app with a modern UI, built using React and styled with Tailwind CSS.
- **Mobile Application**: A cross-platform mobile app developed with React Native, featuring tab navigation and a user-friendly interface.
- **Backend API**: A robust API built with Node.js and Express, providing endpoints for user authentication, product management, and admin functionalities.
- **Database**: PostgreSQL is used for data storage, with Supabase integration for real-time features.
- **CI/CD Pipeline**: Automated deployment using GitHub Actions to streamline the development workflow.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- Expo CLI (for mobile app development)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/OneBay.git
   cd OneBay
   ```

2. Set up the backend:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on the `.env.example` provided and configure your database connection.
   - Run the server:
     ```
     npm run dev
     ```

3. Set up the web application:
   - Navigate to the web directory:
     ```
     cd apps/web
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on the `.env.example` provided.
   - Start the development server:
     ```
     npm start
     ```

4. Set up the mobile application:
   - Navigate to the mobile directory:
     ```
     cd apps/mobile
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on the `.env.example` provided.
   - Start the Expo app:
     ```
     expo start
     ```

## Folder Structure

The project is organized into the following structure:

```
OneBay
├── README.md
├── .gitignore
├── .env.example
├── package.json
├── apps
│   ├── web
│   ├── mobile
├── backend
│   ├── README.md
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── prisma
│       └── schema.prisma
└── .github
    └── workflows
        └── ci-cd.yml
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.