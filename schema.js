import { users, prompts, aiModels } from './data.js';

// 1. Define the GraphQL Schema (Type Definitions)
export const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    role: String!
    # A user can have multiple prompts
    prompts: [Prompt!]! 
  }

  type AIModel {
    id: ID!
    name: String!
    company: String!
    # All prompts associated with this model
    prompts: [Prompt!]!
  }

  type Prompt {
    id: ID!
    text: String!
    upvotes: Int!
    # Relationships
    author: User!
    model: AIModel!
  }

  # The main queries clients can run
  type Query {
    users: [User!]!
    user(id: ID!): User
    prompts: [Prompt!]!
    models: [AIModel!]!
  }
`;

// 2. Define the Resolvers (How to fetch the data)
export const resolvers = {
  Query: {
    // Top-level queries
    users: () => users,
    user: (_, args) => users.find(u => u.id === args.id),
    prompts: () => prompts,
    models: () => aiModels,
  },
  
  // Relationship Resolvers (This is where GraphQL shines!)
  User: {
    // When querying a User, how do we get their prompts?
    prompts: (parentUser) => prompts.filter(p => p.userId === parentUser.id)
  },
  
  Prompt: {
    // When querying a Prompt, how do we get its author and model?
    author: (parentPrompt) => users.find(u => u.id === parentPrompt.userId),
    model: (parentPrompt) => aiModels.find(m => m.id === parentPrompt.modelId)
  },
  
  AIModel: {
    // When querying a Model, how do we get all prompts written for it?
    prompts: (parentModel) => prompts.filter(p => p.modelId === parentModel.id)
  }
};
