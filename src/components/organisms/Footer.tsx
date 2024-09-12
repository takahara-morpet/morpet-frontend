import React from 'react';
import { HomeIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline'; // Heroiconsをインポート
import './Footer.css';
interface FooterProps {
  activePage: 'timeline' | 'profile' | 'notifications';
  handlePageClick: (page: 'timeline' | 'profile' | 'notifications') => void;
}

const Footer: React.FC<FooterProps> = ({ activePage, handlePageClick }) => {
  return (
    <div className="footer">
      <button
        className={`footer-button ${activePage === 'timeline' ? 'active' : ''}`}
        onClick={() => handlePageClick('timeline')}
      >
        <HomeIcon className="icon" />
      </button>
      <button
        className={`footer-button ${activePage === 'profile' ? 'active' : ''}`}
        onClick={() => handlePageClick('profile')}
      >
        <UserIcon className="icon" />
      </button>
      <button
        className={`footer-button ${activePage === 'notifications' ? 'active' : ''}`}
        onClick={() => handlePageClick('notifications')}
      >
        <BellIcon className="icon" />
      </button>
    </div>
  );
};

export default Footer;

