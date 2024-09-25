import { POSTS_URL } from "@/constants/routes";
import { PostCreateRequest } from "@/types/request/post";
import { PostGetResponse } from "@/types/response/post";
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
    // window.location.reload();
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error creating post:", error);
    throw error;
  }
};
