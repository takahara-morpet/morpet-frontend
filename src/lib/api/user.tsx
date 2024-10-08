// client.ts

import axios from "axios";
import { USERS_URL, USERS_DETAIL_URL } from "../../constants/routes";
import { User, UserDetail } from "../../types/response/user";
import { UserCreateRequest } from "@/types/request/user";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    console.log(USERS_URL);
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    console.log("test");
    throw error;
  }
};

export const fetchUserDetail = async (id: string): Promise<UserDetail> => {
  try {
    console.log(`${USERS_DETAIL_URL}/${id}`);
    const response = await axios.get(`${USERS_DETAIL_URL}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createUser = async (
  userData: UserCreateRequest
): Promise<number> => {
  try {
    console.log("Sending POST request to:", USERS_URL);
    // サーバーが返すのは userID だけなので、それを期待する
    const response = await axios.post(USERS_URL, userData);
    console.log("Created userID:", response.data);
    console.log(response);
    return response.data; // response.data は userID
  } catch (error) {
    console.log("Error creating user:", error);
    throw error;
  }
};
