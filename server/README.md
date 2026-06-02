# Server

Simple Express + TypeScript server scaffold.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file or update the existing one.

3. Run in development mode:
   ```bash
   npm run dev
   ```

## Available scripts

- `npm run dev` - start server with `ts-node-dev`
- `npm run build` - compile TypeScript into `dist`
- `npm start` - run compiled server from `dist`

## Project structure

- `app.ts` - Express app configuration
- `server.ts` - server startup entry point
- `config/db.ts` - MongoDB connection
- `models/` - Mongoose models
- `controllers/` - request handlers
- `routes/` - Express route definitions
- `middleware/` - auth and error middleware
