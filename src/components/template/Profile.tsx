import React from "react";
import Image from "next/image";
import "./Profile.css";

interface ProfileProps {
  id: number;
  age: number;
  name: string;
  profile: string;
  profileImageUrl: string;
  gender: string;
  mbti: string;
  created_at: string;
  updated_at: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  id,
  age,
  name,
  profile,
  profileImageUrl,
  gender,
  mbti,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <Image src={profileImageUrl} alt={`${name}'s profile`} width={80} height={80} className="avatar" />
        <div className="name-username">
          <h2 className="name">{name}</h2>
          <p className="username">@{id}</p>
        </div>
      </div>
      <p className="bio">{profile}</p>
      <div className="profile-details">
        <div>
          <p><strong>性別:</strong> {gender}</p>
          <p><strong>年齢:</strong> {age}歳</p>
          <p><strong>MBTI:</strong> {mbti}</p>
        </div>
        {/* <div className="birthday">
          <p>{age}</p>
        </div>
        <div className="stats">
          <a><strong>{followers.length}</strong>Followers</a>
          <a><strong>{following.length}</strong>Following</a>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileCard;
