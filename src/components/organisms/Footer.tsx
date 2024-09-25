"use client";
// components/Footer.tsx
import React from "react";
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
  const userId = localStorage.getItem("userId");

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
