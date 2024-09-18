import React from "react";
import { UserIcon } from  '@heroicons/react/24/outline';  // Heroiconsのユーザーアイコンをインポート
import './GenderBar.css'; // CSSファイルをインポート

interface GenderBarProps {
  malePercentage: number; // 男性のパーセンテージ
  femalePercentage: number; // 女性のパーセンテージ
}

const GenderBar: React.FC<GenderBarProps> = ({ malePercentage, femalePercentage }) => {
  const totalPercentage = malePercentage + femalePercentage;

  // 合計が100%を超えないように調整
  const maleWidth = Math.min((malePercentage / totalPercentage) * 100, 100);
  const femaleWidth = Math.min((femalePercentage / totalPercentage) * 100, 100);

  return (
    <div className="gender-bar-container">
      <div className="gender-row">
        {/* 男性アイコン */}
        <UserIcon className="gender-icon male" />
        
        {/* 男女の割合を表すバー */}
        <div className="gender-bar">
          <div className="male-bar" style={{ width: `${maleWidth}%` }}>
            {malePercentage}%
          </div>
          <div className="female-bar" style={{ width: `${femaleWidth}%` }}>
            {femalePercentage}%
          </div>
        </div>

        {/* 女性アイコン */}
        <UserIcon className="gender-icon female" />
      </div>
    </div>
  );
};

export default GenderBar;
