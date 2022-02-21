# Weather app client code

A Full Stack weather app built with React.js, Node.js, and Express.js. The client code allows users to input a search location by city, state, zip code, or find users current location if their device has an available Geolocation API. Location search is powered by autocomplete by utilizing Google Places API. On search submission requests and responses to a weather API are proxied through a Express.js server to protect sensitive data from the client. Returned data is then consumed by the client to display current, twenty-four hour, and three-day extended forecasts to the user.

Tech used:

1. Front-End:
    - React hooks
    - Google Places API (Autocomplete)
    - Geolocation API
    - CSS3
    - Testing with Testing-Library, Jest, and MSW
2. Back-End:
    - Node.js
    - Express.js
    - node-fetch package
    - cors package

[LIVE DEMO](https://eloquent-bardeen-6340b4.netlify.app)

## Server code

To protect the weather API key requests and responses are proxied through an Express server to take advantage of environment variables. Server code can be found at: [github.com/TKravel/weather-app-server](https://github.com/TKravel/weather-app-server)

### Requirements to run locally

1. Client and server code installed
2. [WeatherAPI](https://weatherAPI.com) accout
   -Valid WeatherAPI api key
3. [Google Cloud Platform](https://cloud.google.com/) account
   -1 Valid API key with Maps JavaScript API and Place API enabled

#### Installation

Clone this repository. From the root of the directory run:

```bash
npm install
npm start
```

Clone the server repository the from the root of the directory run:

```bash
npm install
```

Create a .dotenv file in the server root directory
Follow the server [README](https://github.com/TKravel/weather-app-server/blob/main/README.md) to set up enivorment variables then run:

```bash
node index.js
```

#### Demo

A working demo can be found at: [WeatherApp](https://eloquent-bardeen-6340b4.netlify.app)
