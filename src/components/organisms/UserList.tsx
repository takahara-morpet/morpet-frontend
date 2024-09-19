// components/UserList.tsx
import React from 'react';
import Link from 'next/link';
import './UserList.scss'; // 必要に応じてCSSファイルをインポート

interface User {
  id: string;
  name: string;
  icon: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul className="list">
      {users.map(user => (
        <li key={user.id}>
          <Link href={`/profile/${user.id}`}>
            <div className="user-info">
              <img src={user.icon} alt={user.name} className="user-icon" />
              <span>{user.name}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;