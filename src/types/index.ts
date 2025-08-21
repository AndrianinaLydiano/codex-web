export interface Post {
  id: string;
  network: string;
  format: string;
  content: string;
  createdAt: string;
}

export interface Quota {
  remaining: number;
  limit: number;
}

export interface Prompt {
  id: string;
  text: string;
}
