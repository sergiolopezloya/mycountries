# Getting Started with My Country List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the main app with React view:
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Runs the backend app as a Node API at folder "backend":
Open [http://localhost:8080](http://localhost:8080) to view API.

### `Endpoint:`

[http://localhost:8080/api/countries](http://localhost:8080/api/countries)

Retrive country list. Add parameter "page" to set page list, limit is fixed to 5.
Filter: "name" - Country name.

[http://localhost:8080/api/countries/:id](http://localhost:8080/api/countries/id)

Retrive country by id.

[http://localhost:8080/api/favorites](http://localhost:8080/api/favorites)

Retrive favorite list. Add parameter "page" to set page list, limit is fixed to 10.
Filter: "email" - Email.

[http://localhost:8080/api/favorites/create](http://localhost:8080/api/favorites/create)

Post method to add country to favorites.
Params: "country_id" - country ID, "email" - user email.

### Code Usage

This repo is for academical usage only.
