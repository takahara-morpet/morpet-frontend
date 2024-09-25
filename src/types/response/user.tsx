export type User = {
  id: number;
  name: string;
  profileImageUrl: string;
  lastMessage?: string;
};

export type UserDetail = {
  id: number;
  age: number;
  name: string;
  profile: string;
  profileImageUrl: string;
  gender: string;
  mbti: string;
  createdAt: string;
  updatedAt: string;
};
