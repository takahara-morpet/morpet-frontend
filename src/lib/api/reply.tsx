import { REPLIES_URL } from "@/constants/routes";
import { ReplyCreateRequest } from "@/types/request/reply";
import { ReplyGetResponse } from "@/types/response/reply";
import axios from "axios";

export const fetchReplies = async (): Promise<ReplyGetResponse[]> => {
  try {
    console.log(REPLIES_URL);
    const response = await axios.get(REPLIES_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching reply:", error);
    throw error;
  }
};

// post_id に基づいて返信を取得する関数
export const fetchRepliesById = async (
  postId: string
): Promise<ReplyGetResponse[]> => {
  try {
    const response = await axios.get(`${REPLIES_URL}/${postId}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching replies for postId ${postId}:`, error);
    throw error;
  }
};

export const createReply = async (
  replyData: ReplyCreateRequest
): Promise<number> => {
  try {
    console.log("Sending POST request to:", REPLIES_URL);
    const response = await axios.post(REPLIES_URL, replyData);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error creating reply:", error);
    throw error;
  }
};
