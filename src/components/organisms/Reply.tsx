interface ReplyProps {
  senderName: string;
  content: string;
  profileImage: string;
  time?: string;
}

const Reply: React.FC<ReplyProps> = ({
  senderName,
  content,
  profileImage,
  time,
}) => {
  return (
    <div className="reply">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <div className="reply-body">
        <div className="reply-header">
          <span className="sender-name">{senderName}</span>
          <span className="time">.{time}</span>
        </div>
        <div className="reply-content">{content}</div>
      </div>
    </div>
  );
};
export default Reply;
