"use client"; // これを最初に追加してクライアントコンポーネントとして指定
import "../globals.css";

import React, { useState, useEffect } from "react";
import UserIcon from "@/components/organisms/UserIcon";
import { User } from "@/types/response/user";
import { fetchUsers } from "@/lib/api/user";

// ランダムなダミーDMメッセージを生成する関数
const generateRandomMessage = (): string => {
  const messages = [
    "こんにちは！元気ですか？",
    "今度会いませんか？",
    "昨日の映画、面白かったですね。",
    "最近どうですか？",
    "お疲れ様です！",
    "週末の予定は？",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

const MessagePage: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userlist = await fetchUsers();

        // 各ユーザーにランダムなDMメッセージを追加
        const usersWithMessages = userlist.map((user) => ({
          ...user,
          lastMessage: generateRandomMessage(), // ランダムなメッセージを追加
        }));

        setUsers(usersWithMessages);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="page-container">
      <h1 className="hedder">DM一覧</h1>
      <div className="user-list">
        {users &&
          users.map((user) => (
            <UserIcon
              key={user.id}
              id={user.id}
              name={user.name}
              profileImageUrl={user.profileImageUrl}
              lastMessage={user.lastMessage} // ランダムなメッセージを渡す
            />
          ))}
      </div>
    </div>
  );
};

export default MessagePage;
