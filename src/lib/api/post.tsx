import { POSTS_URL } from "@/constants/routes";
import { PostCreateRequest } from "@/types/request/post";
import {
  PostGetResponse,
  PostPercentageUpdateResponse,
} from "@/types/response/post";
import axios from "axios";

export const fetchPosts = async (): Promise<PostGetResponse[]> => {
  try {
    console.log(POSTS_URL);
    const response = await axios.get(POSTS_URL);
    return response.data;
  } catch (error) {
    console.log("test");
    throw error;
  }
};

export const createPosts = async (postData: PostCreateRequest): Promise<[]> => {
  try {
    console.log("Sending POST request to:", POSTS_URL);
    const response = await axios.post(POSTS_URL, postData);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error creating post:", error);
    throw error;
  }
};

export const fetchPostById = async (id: string): Promise<PostGetResponse> => {
  try {
    console.log(`${POSTS_URL}/${id}`);
    const response = await axios.get(`${POSTS_URL}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// パーセンテージを更新する関数
export const updatePostPercentage = async (
  id: string,
  percentages: PostPercentageUpdateResponse
): Promise<void> => {
  try {
    console.log("sendingdata" + String(percentages.malePercentage));
    // axiosを使ってPUTリクエストを送信
    await axios.put(
      `${POSTS_URL}/${id}/percentage`,
      {
        malePercentage: percentages.malePercentage,
        femalePercentage: percentages.femalePercentage,
      },
      {
        headers: {
          "Content-Type": "application/json", // JSONを送信するためのContent-Type
        },
      }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to update percentages:", error.response?.data);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};
