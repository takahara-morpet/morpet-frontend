"use client";
import { createUser } from "@/lib/api/user";
import { UserCreateRequest } from "@/types/request/user";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // useRouter フックをインポート
import SignUpForm from "@/components/template/SignUpForm";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<UserCreateRequest>({
    age: 0,
    name: "",
    profile: "",
    profileImageUrl: "/images/suga.jpg",
    gender: "",
    mbti: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null); // userIdの状態を追跡
  const router = useRouter(); // useRouter フックを呼び出す

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const createdUserId = await createUser(formData); // ユーザーを作成
      setSuccessMessage("ユーザー登録が成功しました！");
      setError(null);
      localStorage.setItem("userId", String(createdUserId));
      setUserId(String(createdUserId)); // userIdを状態に設定
    } catch (err) {
      console.log("Error creating user:", err);
      setError("ユーザー登録に失敗しました。");
      setSuccessMessage(null);
    }
  };

  useEffect(() => {
    if (userId) {
      // ユーザー登録が成功した後、ホームページに遷移する
      router.push("/timeline");
    }
  }, [userId, router]); // userIdが設定されたときに画面遷移する

  return (
    <SignUpForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      successMessage={successMessage}
    />
  );
};

export default SignUpPage;
