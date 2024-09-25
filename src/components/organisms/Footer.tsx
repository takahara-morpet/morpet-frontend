"use client";
// components/Footer.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Footer.css";
import {
  HomeIcon,
  BellIcon,
  UserIcon,
  EnvelopeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"; // Heroiconsをインポート

const Footer: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null); // 初期値はnull

  // クライアントサイドでのみlocalStorageにアクセス
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []); // 初回レンダー時にのみ実行

  return (
    <footer className="footer">
      <ul className="navLinks">
        <li>
          <Link href="/timeline">
            <HomeIcon className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <UsersIcon className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/notifications">
            <BellIcon className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/message">
            <EnvelopeIcon className="icon" />
          </Link>
        </li>
        {userId && (
          <li>
            <Link href={`/profile/${userId}`}>
              <UserIcon className="icon" />
            </Link>
          </li>
        )}
      </ul>
    </footer>
  );
};

export default Footer;
