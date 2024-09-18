import React from "react";
import './LikeBar.css'; // CSSファイルをインポート

interface LikeBarProps {
  percentages: number[]; // 各セクションのパーセンテージ
  colors: string[]; // 各セクションの色
}

const LikeBar: React.FC<LikeBarProps> = ({ percentages, colors }) => {
  return (
    <div className="like-bar-container">
      {percentages.map((percentage, index) => (
        <div
          key={index}
          className="like-bar-section"
          style={{
            backgroundColor: colors[index],
            width: `${percentage}%`,
          }}
        >
          {percentage}%
        </div>
      ))}
    </div>
  );
};

export default LikeBar;
