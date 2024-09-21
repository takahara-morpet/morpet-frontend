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
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="age">Age:</label>
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
          <label htmlFor="profile">Profile:</label>
          <textarea
            name="profile"
            id="profile"
            value={formData.profile}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="profileImageUrl">Profile Image Url:</label>
            <input
              type="text"
              name="profileImageUrl"
              id="profileImageUrl"
              value={formData.profileImageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
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
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
