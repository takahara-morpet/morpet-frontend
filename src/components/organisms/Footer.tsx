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
          <Link href="/timeline" className="tooltip" data-tooltip="ホーム">
            <HomeIcon className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/profile" className="tooltip" data-tooltip="プロフィール一覧">
            <UsersIcon className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/notifications" className="tooltip" data-tooltip="通知">
            <BellIcon className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/message" className="tooltip" data-tooltip="メッセージ">
            <EnvelopeIcon className="icon" />
          </Link>
        </li>
        {userId && (
          <li>
            <Link href={`/profile/${userId}`} className="tooltip" data-tooltip="マイプロフィール">
              <UserIcon className="icon" />
            </Link>
          </li>
        )}
      </ul>
    </footer>
  );
};

export default Footer;
