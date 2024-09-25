export type PostGetResponse = {
  id: number;
  userId: number;
  content: string;
  category: string;
  malePercentage: number;
  femalePercentage: number;
  createdAt: string;
  updatedAt: string;
  profileImageUrl: string;
};

export type PostPercentageUpdateResponse = {
  malePercentage: number;
  femalePercentage: number;
};
