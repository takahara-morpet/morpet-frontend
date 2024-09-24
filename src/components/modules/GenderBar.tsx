import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import "./GenderBar.css";

const GenderBar: React.FC = () => {
  const [malePercentage, setMalePercentage] = useState(50);
  const [femalePercentage, setFemalePercentage] = useState(50);
  const [showMaleAnimation, setShowMaleAnimation] = useState(false);
  const [showFemaleAnimation, setShowFemaleAnimation] = useState(false);

  const handleMaleClick = () => {
    if (malePercentage < 100) {
      setMalePercentage((prev) => Math.min(prev + 10, 100));
      setFemalePercentage((prev) => Math.max(prev - 10, 0));
      setShowMaleAnimation(true);
      setTimeout(() => {
        setShowMaleAnimation(false);
      }, 1500);
    }
  };

  const handleFemaleClick = () => {
    if (femalePercentage < 100) {
      setFemalePercentage((prev) => Math.min(prev + 10, 100));
      setMalePercentage((prev) => Math.max(prev - 10, 0));
      setShowFemaleAnimation(true);
      setTimeout(() => {
        setShowFemaleAnimation(false);
      }, 1500);
    }
  };

  // パーティクルエフェクトのための配列
  const particles = Array.from({ length: 50 }); // パーティクルの数を増やす

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
                  backgroundColor: getMaleColor(), // 男性用パーティクルカラー
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0.5, 1.5, 2],
                  opacity: [1, 0.8, 0],
                  x: (Math.random() - 0.5) * 800, // より大きく飛び出す
                  y: (Math.random() - 0.5) * 800, // より大きく飛び出す
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
                  backgroundColor: getFemaleColor(), // 女性用パーティクルカラー
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
        <UserIcon className="gender-icon male" onClick={handleMaleClick} />

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
        <UserIcon className="gender-icon female" onClick={handleFemaleClick} />
      </div>
    </div>
  );
};

export default GenderBar;
