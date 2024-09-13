import React from 'react';
import ProfileCard from '@/components/template/profile';

// デフォルトの架空のプロフィールを作成して
const defaultProfile = {
    icon: '/images/suga.jpg',
    name: 'Suga',
    id: 'suga0609',
    bio: 'BTS. I am a rapper, songwriter, and record producer.',
    mbti: 'INTJ',
    birthday: 'March 9, 1993',
    gender: 'Male',
    followers: ['jimin1013', 'taehyung123', 'jungkook456', 'hoseok012', 'namjoon345', 'jin678'],
    following: ['jimin1013', 'taehyung123', 'jungkook456', 'hoseok012', 'namjoon345', 'jin678'],
};

const ProfilePage: React.FC = () => {
    return (
        <div>
            <ProfileCard {...defaultProfile} />
        </div>
    );
};

export default ProfilePage;