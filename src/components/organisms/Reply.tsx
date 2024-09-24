import React from "react";
import "./Reply.css";

interface ReplyProps {
  senderName: string;
  content: string;
  profileImage: string;
  time?: string;
  category: string;
}

const Reply: React.FC<ReplyProps> = ({
  senderName,
  content,
  profileImage,
  time,
  category,
}) => {
  const categoryClass = () => {
    switch (category) {
      case "ときめき":
        return "reply-tokimeki";
      case "恋愛":
        return "reply-tokimeki";
      case "面白い恋愛":
        return "reply-funny";
      case "イライラ恋愛":
        return "reply-angry";
      case "片思い":
        return "reply-one-sided";
      default:
        return "";
    }
  };
  return (
    <div className={`reply ${categoryClass()}`}>
      <img src={profileImage} alt="Profile" className="profile-img" />
      <div className="reply-body">
        <div className="reply-header">
          <span className="sender-name">{senderName}</span>
          <span className="time">.{time}</span>
          <span className="category">{category}</span>
        </div>
        <div className="reply-content">{content}</div>
      </div>
    </div>
  );
};

export default Reply;
