# Deployment Guide

## Repository Structure

This repository contains:
- **Source Code**: All React/TypeScript source files in `src/`
- **Compiled Build**: Production-ready files in `dist/`
- **Tests**: Unit tests with Vitest and React Testing Library

## Accessing the Compiled Version

The compiled production build is available in the `dist/` folder. To use it:

1. Navigate to the `dist/` folder in this repository
2. Download the entire `dist/` folder
3. Serve it using any static file server:
   ```bash
   # Using Python
   cd dist
   python -m http.server 8000
   
   # Using Node.js serve
   npx serve dist
   
   # Using VS Code Live Server
   Right-click on dist/index.html and select "Open with Live Server"
   ```

## Running from Source

### Prerequisites
- Node.js v22.13.1 or higher
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open http://localhost:5173

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

## Technologies Used
- React 19.2.0
- TypeScript
- Vite
- Tailwind CSS
- Vitest + React Testing Library

## Features
- Fully responsive design (mobile-first)
- Interactive components with animations
- Form validation
- Industry filtering
- 6 passing unit tests
