// components/Footer.tsx
import React from "react";
import Link from "next/link";
import "./footer.scss";
import { HomeIcon, BellIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; // Heroiconsをインポート

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="navLinks">
        <li><Link href="/timeline">
          <HomeIcon className="icon" />
        </Link></li>
        <li><Link href="/profile">
          <UserIcon className="icon" />
        </Link></li>
        <li><Link href="/notifications">
          <BellIcon className="icon" />
        </Link></li>
        <li><Link href="/message">
          <EnvelopeIcon className="icon" />
        </Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
