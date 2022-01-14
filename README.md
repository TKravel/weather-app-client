# Weather app client code

A weather app built with React.js. Search input connects to Google places API autocomplete and is powered by WeatherAPI data proxied through a Express.js server

## Server code

To protect the API key requests are forwarded from a Express server. Server code can be found at https://github.com/TKravel/weather-app-server

## Requirements

1. Client and server code installed
2. WeatherAPI accout (https://weatherAPI.com)
   ..1. Valid WeatherAPI api key
3. Google Cloud Platform account
   ..1 Valid API key with Maps JavaScript API and Place API enabled

## Installation

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
Follow the server README to set up enivorment variables then run:

```bash
node index.js
```

## Demo

A working demo can be found at https://eloquent-bardeen-6340b4.netlify.app
