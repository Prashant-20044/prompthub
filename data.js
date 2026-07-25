// Mock Data representing a database

export const users = [
  { id: '1', username: 'Prashant', role: 'ADMIN' },
  { id: '2', username: 'AI_Enthusiast99', role: 'USER' },
];

export const aiModels = [
  { id: '101', name: 'GPT-4', company: 'OpenAI' },
  { id: '102', name: 'Claude 3 Opus', company: 'Anthropic' },
  { id: '103', name: 'Midjourney v6', company: 'Midjourney' },
];

export const prompts = [
  {
    id: '1001',
    text: 'Act as a senior software engineer and explain GraphQL to a 5-year-old.',
    userId: '1',
    modelId: '101',
    upvotes: 150
  },
  {
    id: '1002',
    text: 'A cinematic, ultra-realistic photo of a futuristic cyberpunk city at night.',
    userId: '1',
    modelId: '103',
    upvotes: 320
  },
  {
    id: '1003',
    text: 'Analyze the following dataset and provide 3 key business insights.',
    userId: '2',
    modelId: '102',
    upvotes: 45
  }
];
