# Portfolio app

An app used to provide my main portfolio website.

This is a Next.js project which uses the build function to pull data from the API and generate a static site. 

## Setup

This project requires the portfolio-api app to work.

### Dev Setup
- Install packages
```
npm install
```
-  Copy env file
```
cp .env.example .env.local
```
-  Fill in env values
```
API_URL
API_EMAIL
API_PASSWORD
```
-  Run on local
```
npm run dev
```
### Static Site Hosting
- Run the following command to generate static site
```
npm run build
```
