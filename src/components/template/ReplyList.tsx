import Reply from "../organisms/Reply";

interface ReplyData {
  id: number;
  senderName: string;
  time?: string;
  content: string;
  profileImage: string;
}
interface ReplyListProps {
  replys: ReplyData[];
}

const ReplyList: React.FC<ReplyListProps> = ({ replys }) => {
  return (
    <div className="reply-list">
      {replys.map((reply, index) => (
        <Reply
          senderName={reply.senderName}
          time={reply.time}
          content={reply.content}
          profileImage={reply.profileImage}
        />
      ))}
    </div>
  );
};

export default ReplyList;
