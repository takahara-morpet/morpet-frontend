"use client"; // これを最初に追加してクライアントコンポーネントとして指定
import "../globals.css";

import React, { useState, useEffect } from "react";
import UserIcon from "@/components/organisms/UserIcon";
import { User } from "@/types/response/user";
import { fetchUsers } from "@/lib/api/user";

const ProfilePage: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userlist = await fetchUsers();
        console.log(userlist);
        setUsers(userlist);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="page-container">
      <h1 className="hedder">ユーザー一覧</h1>
      <div className="user-list">
        {users && users.map((user) => (
          <UserIcon key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
