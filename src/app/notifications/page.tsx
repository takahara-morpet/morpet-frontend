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
          <Image src="/images/lion.jpg" alt="lion" className="avatar" width={40} height={40} />
          <strong>らいおん</strong> があなたの投稿にいいねしました！
          <span className="timestamp">2024-09-25 12:30</span>
        </li>
        <li className="notification-item">
          <Image src="/images/penguin.jpg" alt="penguin" className="avatar" width={40} height={40} />
          <strong>ぺんぎん</strong> があなたにメッセージを送りました。
          <span className="timestamp">2024-09-24 15:45</span>
        </li>
        <li className="notification-item">
          <Image src="/images/elephant.jpg" alt="elephant" className="avatar" width={40} height={40} />
          <strong>ぞう</strong> があなたをフォローしました。
          <span className="timestamp">2024-09-23 18:00</span>
        </li>
        <li className="notification-item">
          <Image src="/images/crab.jpg" alt="fox" className="avatar" width={40} height={40} />
          <strong>かに</strong> があなたの投稿にコメントしました。
          <span className="timestamp">2024-09-22 20:15</span>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
