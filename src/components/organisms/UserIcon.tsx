import React from "react";
import Image from "next/image";
import "../organisms/UserIcon.css";
import useProfileNavigation from "@/hooks/useProfileNavigation";

export interface UserIconProps {
  id: number;
  name: string;
  profileImageUrl: string;
  lastMessage?: string; // 最後のメッセージを表示するためにプロパティを追加
}

const UserIcon: React.FC<UserIconProps> = ({ profileImageUrl, name, id, lastMessage }) => {
  const { handleProfileClick } = useProfileNavigation(); // プロフィールクリック用の関数

  return (
    <div className="user-icon-card dm-layout clickable" onClick={() => handleProfileClick(id)}>
      <div className="icon-container">
        {/* ユーザーのプロフィール画像 */}
        <Image
          src={profileImageUrl}
          alt={`${name}'s profile`}
          width={80}
          height={80}
          className="icon-avatar"
        />
        <div className="icon-text">
          <h2 className="icon-name">{name}</h2>
          <p className="icon-id">@{name+id}</p>
        </div>
      </div>

      {/* DM メッセージを表示 */}
      <div className="dm-message-container">
        {lastMessage&&
          <p className="dm-message">{lastMessage}</p>
        }
      </div>
    </div>
  );
};

export default UserIcon;
