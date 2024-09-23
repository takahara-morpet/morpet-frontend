import React from "react";
import Reply from "../organisms/Reply";

export interface ReplyData {
  id: number;
  senderName: string;
  time?: string;
  content: string;
  profileImage: string;
}
interface ReplyDataListProps {
  replyList: ReplyData[];
}

const ReplyList: React.FC<ReplyDataListProps> = ({ replyList }) => {
  return (
    <div className="reply-list">
      {replyList &&
        replyList.map((reply) => (
          <Reply
            key={reply.id}
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
