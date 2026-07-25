# PromptHub GraphQL API

PromptHub is a GraphQL API designed for an AI-focused community where developers can share, rate, and discover the best prompts for different AI models (like ChatGPT, Claude, or Midjourney).

## Features
- **Users**: Users can write prompts and have assigned roles.
- **AI Models**: Categorization of prompts by AI models (e.g., GPT-4, Claude 3 Opus, Midjourney v6).
- **Prompts**: Stores prompts text, author, targeted AI model, and upvote score.

## Tech Stack
- **Node.js**
- **Apollo Server**
- **GraphQL**

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prashant-20044/prompthub.git
   cd prompthub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   *Note: This will start the server using nodemon for hot-reloading.*

### Explore the API
Once the server is running, you can access the **Apollo Sandbox** at [http://localhost:4000](http://localhost:4000).

Try running this query to fetch prompts with their associated authors and AI models:
```graphql
query GetPrompts {
  prompts {
    text
    upvotes
    author {
      username
      role
    }
    model {
      name
      company
    }
  }
}
```

## Deployment
This project is configured to easily deploy to free cloud providers like **Render** or **Railway**. 
The `index.js` uses `process.env.PORT` to allow dynamic port assignment by the hosting provider.
