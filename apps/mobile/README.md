# OneBay Mobile Application

## Overview
OneBay is a comprehensive "Super App" that combines various functionalities into a single platform. This mobile application is built using React Native and Expo, providing a seamless experience for users on their mobile devices.

## Features
- User authentication and profile management
- Product browsing and purchasing
- Cart management
- Provider dashboard for service providers
- Admin panel for administrative tasks

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- Expo CLI (install via `npm install -g expo-cli`)
- A PostgreSQL database (for backend integration)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/OneBay.git
   cd OneBay/apps/mobile
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` provided and fill in the required environment variables.

4. Start the development server:
   ```
   expo start
   ```

### Running the App
- Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or browser.
- Alternatively, you can run the app on an Android or iOS simulator.

## File Structure
```
/OneBay/apps/mobile
├── README.md
├── .env.example
├── app.json
├── package.json
├── tsconfig.json
└── src
    ├── App.tsx
    ├── navigation
    │   ├── index.tsx
    │   └── Tabs.tsx
    ├── screens
    │   ├── HomeScreen.tsx
    │   ├── ProductScreen.tsx
    │   ├── CartScreen.tsx
    │   ├── ProfileScreen.tsx
    │   └── LoginScreen.tsx
    ├── components
    │   ├── ProviderDashboard.tsx
    │   └── AdminPanel.tsx
    ├── hooks
    │   └── useAuth.ts
    ├── utils
    │   └── api.ts
    └── types
        └── index.ts
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.