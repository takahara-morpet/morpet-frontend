"use client";
import { createUser } from "@/lib/api/user";
import { UserCreateRequest } from "@/types/request/user";
import React, { useState } from "react";
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
      const userId = await createUser(formData);
      setSuccessMessage("ユーザー登録が成功しました！");
      setError(null);
      localStorage.setItem("userId", String(userId));
    } catch (err) {
      console.log("Error creating user:", err);
      setError("ユーザー登録に失敗しました。");
      setSuccessMessage(null);
    }
  };

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
