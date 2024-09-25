import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import "./GenderBar.css";

interface GenderBarProps {
  malePercentage: number;
  femalePercentage: number;
  onMaleClick: () => void;
  onFemaleClick: () => void;
}

const GenderBar: React.FC<GenderBarProps> = ({
  malePercentage,
  femalePercentage,
  onMaleClick,
  onFemaleClick,
}) => {
  const [showMaleAnimation, setShowMaleAnimation] = useState(false);
  const [showFemaleAnimation, setShowFemaleAnimation] = useState(false);

  // 男性アイコンを押した時のアニメーション
  const handleMaleClick = () => {
    setShowMaleAnimation(true);
    setTimeout(() => {
      setShowMaleAnimation(false);
    }, 1500); // アニメーションを1.5秒再生
    onMaleClick(); // サーバー側でパーセンテージを更新
  };

  // 女性アイコンを押した時のアニメーション
  const handleFemaleClick = () => {
    setShowFemaleAnimation(true);
    setTimeout(() => {
      setShowFemaleAnimation(false);
    }, 1500);
    onFemaleClick(); // サーバー側でパーセンテージを更新
  };

  // パーティクルエフェクトのための配列
  const particles = Array.from({ length: 50 });

  // 男性のパーティクルカラー
  const getMaleColor = () => {
    const colors = ["#0066ff", "#00ccff", "#3399ff", "#99ccff", "#0033cc"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // 女性のパーティクルカラー
  const getFemaleColor = () => {
    const colors = ["#ff66b2", "#ff99cc", "#ff3399", "#ffccff", "#cc6699"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="gender-bar-container">
      <AnimatePresence>
        {showMaleAnimation && (
          <motion.div
            className="male-animation"
            initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
            animate={{ scale: 1.5, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 100,
            }}
          >
            <p>男性が優位です！</p>
            {particles.map((_, i) => (
              <motion.div
                className="particle"
                key={i}
                style={{
                  backgroundColor: getMaleColor(),
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0.5, 1.5, 2],
                  opacity: [1, 0.8, 0],
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}

        {showFemaleAnimation && (
          <motion.div
            className="female-animation"
            initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
            animate={{ scale: 1.5, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 100,
            }}
          >
            <p>女性が優位です！</p>
            {particles.map((_, i) => (
              <motion.div
                className="particle"
                key={i}
                style={{
                  backgroundColor: getFemaleColor(),
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0.5, 1.5, 2],
                  opacity: [1, 0.8, 0],
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="gender-row">
        {/* 男性アイコン */}
        <motion.div
          className="gender-icon male tooltip"
          data-tooltip="男性側に投票"
          onClick={handleMaleClick}
          tabIndex={0}
          role="button"
          aria-label="男性側に投票"
        >
          <UserIcon />
        </motion.div>

        {/* 男女の割合を表すバー */}
        <div className="gender-bar">
          <motion.div
            className="male-bar"
            style={{ width: `${malePercentage}%` }}
            animate={{ width: `${malePercentage}%` }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {malePercentage}%
          </motion.div>
          <motion.div
            className="female-bar"
            style={{ width: `${femalePercentage}%` }}
            animate={{ width: `${femalePercentage}%` }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {femalePercentage}%
          </motion.div>
        </div>

        {/* 女性アイコン */}
        <motion.div
          className="gender-icon female tooltip"
          data-tooltip="女性側に投票"
          onClick={handleFemaleClick}
          tabIndex={0} // フォーカス可能にする
          role="button"
          aria-label="女性側に投票"
        >
          <UserIcon />
        </motion.div>
      </div>
    </div>
  );
};

export default GenderBar;
