import React from "react";
import Image from "next/image";
import "../organisms/UserIcon.css";
import useProfileNavigation from "@/hooks/useProfileNavigation";

export interface UserIconProps {
  id: number;
  name: string;
  profileImageUrl: string;
}

const UserIcon: React.FC<UserIconProps> = ({ profileImageUrl, name, id }) => {
  const { handleProfileClick } = useProfileNavigation(); // Still handling the click!

  return (
    <div
      className="user-icon-card clickable" // Updated class names
      onClick={() => handleProfileClick(id)} // Clicking magic happening here
    >
      <div className="icon-container">
        <Image
          src={profileImageUrl}
          alt={`${name}'s profile`}
          width={80}
          height={80}
          className="icon-avatar"
        />
        <div className="icon-text">
          <h2 className="icon-name">{name}</h2>
          <p className="icon-id">@{id}</p>
        </div>
      </div>
    </div>
  );
};

export default UserIcon;
