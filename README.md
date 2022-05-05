# Wordfulness

## Preparing development environmen

1. In root directory run `yarn` to install dependencies and then `yarn prepare` to install husky.
1. In `backend` directory, run `yarn` to install dependencies, then by following `.env.example` create your own `.env` file. Then start development server by typing `yarn start:dev`
1. With backend running on port `3000`, go to `frontend` directory, install dependencies using `yarn` and generate data types using `yarn codegen`. Now you're prepared to run frontend development server using `yarn dev`.
