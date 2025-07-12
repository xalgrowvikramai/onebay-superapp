# OneBay Web Application

## Overview
OneBay is a full-stack "Super App" that provides a seamless experience for users across web and mobile platforms. This documentation covers the setup and features of the web application.

## Features
- User authentication and profile management
- Product browsing and cart functionality
- Provider dashboard for service providers
- Admin panel for managing users and products
- Responsive design using Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- PostgreSQL database

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/OneBay.git
   cd OneBay/apps/web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` provided and fill in the required environment variables.

4. Start the development server:
   ```
   npm start
   ```

### Running the Application
- Open your browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure
```
/src
  ├── components        # Reusable components
  ├── hooks             # Custom hooks
  ├── routes            # Application routes
  ├── screens           # Screen components
  ├── types             # TypeScript types
  ├── utils             # Utility functions
  ├── App.tsx           # Main application component
  └── main.tsx          # Entry point for the application
```

## Deployment
For deployment instructions, refer to the CI/CD pipeline configuration in the `.github/workflows/ci-cd.yml` file.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.