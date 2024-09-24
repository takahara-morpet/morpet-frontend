"use client"; // これを最初に追加してクライアントコンポーネントとして指定

// app/page.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // ページが読み込まれたときにタイムラインページにリダイレクト
    router.push('/signup');
  }, [router]);

  return null; // コンテンツがない場合は null を返します
};

export default Home;
