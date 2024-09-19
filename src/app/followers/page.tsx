// app/followers/page.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserList from '@/components/organisms/UserList';


import './followers.scss';

const sampleFollowers = [
    { id: '1', name: 'ユーザー1', icon: '/images/user1.jpg' },
    { id: '2', name: 'ユーザー2', icon: '/images/user2.jpg' },
    // 他のフォロワーデータ...
];

const sampleFollowing = [
    { id: '3', name: 'ユーザー3', icon: '/images/user3.jpg' },
    { id: '4', name: 'ユーザー4', icon: '/images/user4.jpg' },
    // 他のフォロー中データ...
];

const FollowersPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'follower' | 'following'>('follower'); // 初期タブは「おすすめ」
    const router = useRouter();
    const handleTabClick = (tab: 'follower' | 'following') => {
        setActiveTab(tab);
    };

    return (
        <div>
            <button className="backButton" onClick={() => router.back()}>
                戻る
            </button>
            {/* タブのヘッダー部分 */}
            <div className="tabs">
                <div
                    className={`tab-button ${activeTab === 'follower' ? 'active' : ''}`}
                    onClick={() => handleTabClick('follower')}
                >
                    フォロワー
                </div>
                <div
                    className={`tab-button ${activeTab === 'following' ? 'active' : ''}`}
                    onClick={() => handleTabClick('following')}
                >
                    フォロー中
                </div>
            </div>

            {/* タブに応じてリストを表示 */}
            <div className="list-container">
                {activeTab === 'follower' && <UserList users={sampleFollowers} />}
                {activeTab === 'following' && <UserList users={sampleFollowing} />}
            </div>

        </div>
    );
};

export default FollowersPage;