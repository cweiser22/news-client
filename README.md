# News Client

This is a simple React app this displays news headlines.

### News API

This app needs a token from https://newsapi.org to work. You can get a free developer key from there.<br />
Create a file called `apikey.ts` in the `src` folder, and in it, place the following: <br/>
`export const API_KEY = "your_api_key"`
Replace `your_api_key` with the key from https://newsapi.org.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Running the application

Ensure all dependencies are installed with `yarn install`. Then run `yarn start`.

## Project Structure

```
--api
    #contains code for api calls
---components
    #contains all react components, organized by route
    |--shared
        #contains react components used in multiple routes

```

## Todo

- make more visually appealing
- add search field
