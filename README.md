# Weather Application 🌤️

A simple and responsive weather application that provides current weather information for your location by default and allows users to search for weather data of other cities. Built with **React** and powered by the **OpenWeather API**.

## Features ✨

- **Default Weather**: Automatically fetches weather data for your current location using geolocation.
- **City Search**: Allows users to search for weather information of any city.
- **Weather Details**: Displays:
  - Temperature
  - Humidity
  - Wind speed
  - Weather condition with an icon
  - Location details
- **Loading State**: Displays a loading screen while data is being fetched.
- **Error Handling**: Shows appropriate error messages for invalid city searches or geolocation failures.
- **Responsive Design**: Optimized for all screen sizes.

## Live Demo 🌐

Check out the live application here: [Weather Application on Netlify](https://seasondemo.netlify.app/)

## Getting Started 🚀

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the OpenWeather API key:
   - Open the `Weather.jsx` component.
   - Replace the `apiKey` value with your own API key from [OpenWeather](https://openweathermap.org/api).

### Running the Application

- Start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
- Open your browser and visit `http://localhost:5173` (default Vite port).

### Building for Production

- Create a production build:
  ```bash
  npm run build
  # or
  yarn build
  ```
- Serve the production build locally:
  ```bash
  npm run preview
  # or
  yarn preview
  ```

## Project Structure 📂

```
weather-app/
├── public/
│ └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Weather.jsx  # Main weather component
│   │   ├── Loading.jsx  # Loading component
│   ├── App.jsx          # Main app entry point
│   └── main.jsx         # Application bootstrap file
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Technologies Used 🛠️

- **Frontend**: React, Vite
- **Styling**: CSS (custom)
- **API**: [OpenWeather API](https://openweathermap.org/api)
- **HTTP Client**: Axios

## To-Do List 📝

- Add unit tests for components
- Improve styling and animations
- Allow users to toggle temperature units (Celsius/Fahrenheit)

## Contributing 🤝

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git push origin feature-name
   ```
4. Open a pull request.
