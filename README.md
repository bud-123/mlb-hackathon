# MLB Spring League AI Search

An AI-powered search application for MLB Spring League information, built with React and Google Cloud's Vertex AI Agent Builder for the Google Cloud x MLB Hackathon.

## Features

- AI-powered search functionality for MLB statistics and information
- Real-time search results
- Responsive design
- Baseball card-style UI elements

## Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm
- A Google Cloud account with Gen App Builder configured
- Firebase CLI (for deployment)

## Environment Variables

Create a `.env` file in the root directory with:

REACT_APP_CONFIG_ID=your_config_id_here
REACT_APP_TRIGGER_ID=searchWidgetTrigger

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mlb-spring-league-ai-search.git
   cd mlb-spring-league-ai-search
   ```

2. Install dependencies:
   ```bash
   npm install

3. Create a `.env` file in the root directory with:
   ```bash
   REACT_APP_CONFIG_ID=your_config_id_here
   REACT_APP_TRIGGER_ID=searchWidgetTrigger
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the application:
   ```bash
   firebase deploy
   ```

3. Open your browser and navigate to `https://your-app-id.web.app` to view the application.


