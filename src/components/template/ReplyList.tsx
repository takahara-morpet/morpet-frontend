import { useEffect, useState } from "react";
import Reply from "../organisms/Reply";
import { fetchReplies } from "@/lib/api/reply";
import { context } from "@react-three/fiber";

interface ReplyData {
  id: number;
  senderName: string;
  time?: string;
  content: string;
  profileImage: string;
}

const ReplyList = () => {
  const [replys, setReplys] = useState<ReplyData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchReplysData = async () => {
      try {
        const replysList = await fetchReplies();
        const mappedReplys = replysList.map((reply) => ({
          id: reply.id,
          senderName: String(reply.senderId) + "user",
          time: reply.sentAt,
          content: reply.content,
          profileImage: "/images/suga.jpg",
        }));
        setReplys(mappedReplys);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchReplysData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="reply-list">
      {replys &&
        replys.map((reply) => (
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

// フォロー中の投稿データ
const dummyReplys = [
  {
    id: 32222222,
    senderName: "フォロー中ユーザー1",
    time: "3時間前",
    content: "僕もそれわかります",
    profileImage: "https://example.com/profile3.jpg",
  },
  {
    id: 3222322222,
    senderName: "フォロー中ユーザー2",
    time: "1時間前",
    content: "正直許せませんよね",
    profileImage: "https://example.com/profile3.jpg",
  },
];
