"use client";
import React from "react";
import "./SignUpForm.css";

interface SignUpFormProps {
  formData: {
    name: string;
    age: number;
    profile: string;
    profileImageUrl: string;
    gender: string;
    mbti: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | null;
  successMessage?: string | null;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  error,
  successMessage,
}) => {
  return (
    <div className="signup-container">
      <h2>登録フォーム</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">名前:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">年齢:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="profile">プロフィール:</label>
          <textarea
            name="profile"
            id="profile"
            value={formData.profile}
            onChange={handleChange}
            required
          />
        </div>
        
          <div>
            <label htmlFor="profileImageUrl">アイコン:</label>
            <select
              name="profileImageUrl"
              id="profileImageUrl"
              value={formData.profileImageUrl || "/images/azarashi.jpg"}
              onChange={handleChange}
              required
            >
              <option value="/images/azarashi.jpg">あざらし</option>
              <option value="/images/bird.jpg">とり</option>
              <option value="/images/crab.jpg">かに</option>
              <option value="/images/elephant.jpg">ぞう</option>
              <option value="/images/kurage.jpg">くらげ</option>
              <option value="/images/lion.jpg">らいおん</option>
              <option value="/images/penguin.jpg">ぺんぎん</option>
              <option value="/images/star.jpg">ひとで</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender">性別:</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">性別を選択</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
            </select>
          </div>
          <div>
            <label htmlFor="mbti">MBTI:</label>
            <input
              type="text"
              id="mbti"
              name="mbti"
              value={formData.mbti}
              onChange={handleChange}
              required
            />
          </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default SignUpForm;
