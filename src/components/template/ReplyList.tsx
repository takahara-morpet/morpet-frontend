import React from "react";
import Reply from "../organisms/Reply";

export interface ReplyData {
  id: number;
  senderName: string;
  time?: string;
  content: string;
  profileImage: string;
  category: string;
}

const ReplyList: React.FC<{ replyList: ReplyData[] }> = ({ replyList }) => {
  if (!replyList || replyList.length === 0) {
    return <p>リプライがありません。</p>; // データが存在しない場合のハンドリング
  }

  return (
    <div>
      {replyList.map((reply) => (
        <Reply
          key={reply.id}
          senderName={reply.senderName || "匿名"} // 安全な値を使用
          time={reply.time || "不明"}
          content={reply.content || "内容がありません"}
          profileImage={reply.profileImage || "/default-image.png"}
          category={reply.category}
        />
      ))}
    </div>
  );
};

export default ReplyList;
