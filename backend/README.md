# OneBay Backend API Documentation

## Overview
OneBay is a full-stack "Super App" that provides a seamless experience for users to manage their products, profiles, and more. The backend API is built using Node.js, Express, and PostgreSQL, with Supabase integration for enhanced functionality.

## Features
- User authentication and authorization
- Product management
- Admin functionalities
- Integration with Supabase for real-time capabilities
- RESTful API endpoints

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- Supabase account

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/OneBay.git
   cd OneBay/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` provided:
   ```
   cp .env.example .env
   ```

4. Set up your PostgreSQL database and update the `.env` file with your database credentials.

5. Run database migrations (if using Prisma):
   ```
   npx prisma migrate dev
   ```

6. Start the server:
   ```
   npm run dev
   ```

### API Endpoints
- **Authentication**
  - `POST /api/auth/login`: Log in a user
  - `POST /api/auth/register`: Register a new user

- **Products**
  - `GET /api/products`: Retrieve all products
  - `POST /api/products`: Create a new product
  - `GET /api/products/:id`: Retrieve a specific product
  - `PUT /api/products/:id`: Update a specific product
  - `DELETE /api/products/:id`: Delete a specific product

- **Admin**
  - `GET /api/admin/users`: Retrieve all users
  - `DELETE /api/admin/users/:id`: Delete a specific user

## Deployment
For deployment, you can use platforms like Heroku, Vercel, or any cloud provider that supports Node.js applications. Ensure to set the environment variables in your deployment settings.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.