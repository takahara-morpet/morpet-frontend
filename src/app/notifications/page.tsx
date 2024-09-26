import React from "react";
import "../globals.css";
import "../../components/template/Profile.css";

import Image from "next/image";

const Notifications: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="hedder">通知</h1>
      <ul className="notification-list">
        <li className="notification-item">
          <Image src="/images/penguin.jpg" alt="penguin" className="avatar" width={40} height={40} />
          <strong>メンヘラぺんぎん</strong> があなたの投稿にいいねしました！
          <span className="timestamp">2024-09-25 00:30</span>
        </li>
        <li className="notification-item">
          <Image src="/images/penguin.jpg" alt="penguin" className="avatar" width={40} height={40} />
          <strong>メンヘラぺんぎん</strong> があなたにメッセージを送りました。
          <span className="timestamp">2024-09-24 23:45</span>
        </li>
        <li className="notification-item">
          <Image src="/images/elephant.jpg" alt="elephant" className="avatar" width={40} height={40} />
          <strong>ひもになりたい</strong> があなたをフォローしました。
          <span className="timestamp">2024-09-23 18:00</span>
        </li>
        <li className="notification-item">
          <Image src="/images/penguin.jpg" alt="penguin" className="avatar" width={40} height={40} />
          <strong>メンヘラぺんぎん</strong> があなたの投稿にいいねしました！
          <span className="timestamp">2024-09-23 01:30</span>
        </li>
        <li className="notification-item">
          <Image src="/images/azarashi.jpg" alt="azarashi" className="avatar" width={40} height={40} />
          <strong>応援団長</strong> があなたの投稿にコメントしました。
          <span className="timestamp">2024-09-22 20:15</span>
        </li>
        <li className="notification-item">
          <Image src="/images/penguin.jpg" alt="penguin" className="avatar" width={40} height={40} />
          <strong>メンヘラぺんぎん</strong> があなたの投稿にいいねしました！
          <span className="timestamp">2024-09-22 03:00</span>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
