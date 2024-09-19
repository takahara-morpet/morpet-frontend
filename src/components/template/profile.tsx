import React from "react";
import Image from "next/image";
import "./Profile.scss";
import Link from "next/link";

interface ProfileProps {
  icon: string;
  name: string;
  id: string;
  bio: string;
  mbti: string;
  birthday: string;
  gender: string;
  followers: string[];
  following: string[];
}

const ProfileCard: React.FC<ProfileProps> = ({
  icon,
  name,
  id,
  bio,
  mbti,
  birthday,
  gender,
  followers,
  following,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <Image src={icon} alt={`${name}'s profile`} width={80} height={80} className="avatar" />
        <div className="name-username">
          <h2 className="name">{name}</h2>
          <p className="username">@{id}</p>
        </div>
      </div>
      <p className="bio">{bio}</p>
      <div className="profile-details">
        <div>
          <p><strong>MBTI:</strong> {mbti}</p>
          <p><strong>Gender:</strong> {gender}</p>
        </div>
        <div className="birthday">
          <p>{birthday}</p>
        </div>
        <div className="stats">
          <Link href="/followers">
            <strong>{followers.length}</strong>Followers
          </Link>
          <Link href="/followers">
            <strong>{following.length}</strong>Following
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
