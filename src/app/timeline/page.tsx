"use client"; // クライアントコンポーネントとして指定
import "../globals.css"; // CSSファイルをインポート

import React, { useEffect, useState } from "react";
import PostList, { PostData } from "@/components/template/PostList"; // PostListコンポーネントをインポート
import PostListBar from "@/components/template/PostListBar"; // PostListBarコンポーネントをインポート
import SubmitButton from "@/components/template/SubmitButton"; // SubmitButtonのインポート
import { fetchPosts } from "@/lib/api/post";
import { fetchUserDetail } from "@/lib/api/user";

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "recommend" | "follow" | "controversial"
  >("recommend"); // 初期タブは「おすすめ」

  const [recommendPosts, setPosts] = useState<PostData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postlist = await fetchPosts();
        const mappedPosts = await Promise.all(
          postlist.map(async (post) => {
            const userDetails = await fetchUserDetail(String(post.userId));
            return {
              id: post.id,
              username: userDetails.name,
              handle: String(post.userId),
              time: "time",
              content: post.content,
              likes: 0,
              replies: 0,
              profileImageUrl: userDetails.profileImageUrl,
              category: post.category,
            };
          })
        ); // PostData型に変換
        setPosts(mappedPosts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleNewPost = (newPost: PostData) => {
    setPosts([...(recommendPosts || []), newPost]); // 新しい投稿を先頭に追加
  };

  const handleTabClick = (tab: "recommend" | "follow" | "controversial") => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full">
      {/* タブのヘッダー部分 */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "recommend" ? "active" : ""}`}
          onClick={() => handleTabClick("recommend")}
        >
          おすすめ
        </button>
        <button
          className={`tab-button ${activeTab === "follow" ? "active" : ""}`}
          onClick={() => handleTabClick("follow")}
        >
          フォロー中
        </button>
        <button
          className={`invisible tab-button ${activeTab === "controversial" ? "active" : ""}`}
          onClick={() => handleTabClick("controversial")}
        >
          賛否両論
        </button>
      </div>

      <div className="post-list-container">
        {activeTab === "recommend" && <PostList posts={recommendPosts || []} replyable={true} />}
        {activeTab === "follow" && <PostList posts={followPosts} replyable={false} />}
        {activeTab === "controversial" && (
          <PostListBar posts={controversialPosts} />
        )}{" "}
        {/* PostListBar に変更 */}
      </div>
      <SubmitButton onPostCreate={handleNewPost} />
    </div>
  );
};

export default Page;

// フォロー中の投稿データ
const followPosts = [
  {
    id: 32222222,
    username: "さくらさく",
    handle: "sakura_saku",
    time: "3時間前",
    content: "彼氏と映画デート🎬したけど、最後のシーンで泣いちゃった😢そしたら隣で『泣くの早すぎない？笑』って言われて逆に笑ったw",
    likes: 15,
    retweets: 4,
    replies: 6,
    profileImageUrl: "/images/star.jpg",
    category: "ときめき",
  },
  {
    id: 120,
    username: "メンヘラぺんぎん",
    handle: "love_takahara",
    time: "10時間前",
    content: "他の女の子が彼に笑いかけると、心の中で『その笑顔、私のパクりじゃん！』って叫んでる。私のアイデンティティが奪われる気がする",
    likes: 35,
    retweets: 3,
    replies: 5,
    profileImageUrl: "/images/penguin.jpg",
    category: "イライラ恋愛",
  },
  {
    id: 85743,
    username: "ゆるふわラブガール",
    handle: "yurufuwa-girl",
    time: "4時間前",
    content: "彼のSNS、ずっとチェックしちゃう😂まだ彼女いないよね？いや、そもそも私をどう思ってるんだろう…？",
    likes: 25,
    retweets: 7,
    replies: 8,
    profileImageUrl: "/images/kurage.jpg",
    category: "片思い",
  },
  {
    id: 32222222,
    username: "さくらさく",
    handle: "sakura_saku",
    time: "3時間前",
    content: "なんで彼って返信遅い時に限って、突然長文で愛のメッセージ送ってくるんだろう？笑 毎回びっくりする😂",
    likes: 4,
    retweets: 0,
    replies: 2,
    profileImageUrl: "/images/star.jpg",
    category: "ときめき",
  },
  {
    id: 120,
    username: "メンヘラぺんぎん",
    handle: "love_takahara",
    time: "10時間前",
    content: "彼が好きすぎて、私の心臓を彼にあげたい。『心臓移植』って言葉を知ってる？彼のために自分の心臓を切り取って渡す準備はできてる😅💖",
    likes: 4,
    retweets: 0,
    replies: 1,
    profileImageUrl: "/images/penguin.jpg",
    category: "ときめき",
  },
  {
    id: 32225555,
    username: "いろはす",
    handle: "irohasu",
    time: "7時間前",
    content: "彼女が急に『明日のデートは私の好きなテーマパークに行こう！』って言ってきたけど、実は私、苦手なんだよね…どうすべき？",
    likes: 45,
    retweets: 12,
    replies: 19,
    profileImageUrl: "/images/crab.jpg",
    category: "片思い",
  },
  {
    id: 32225555,
    username: "もるぺっと",
    handle: "morupetto",
    time: "7時間前",
    content: "デートで彼女が遅刻して、しかも理由が『寝坊』だった。これどう思う？私の時間を何だと思ってるの？😤",
    likes: 45,
    retweets: 12,
    replies: 19,
    profileImageUrl: "/images/bird.jpg",
    category: "イライラ恋愛",
  },
  {
    id: 189,
    username: "TK",
    handle: "takahara",
    time: "3時間前",
    content: "深夜にラウンドワンはアウトでしょ",
    likes: 60,
    retweets: 2,
    replies: 9,
    profileImageUrl: "/images/lion.jpg",
    category: "イライラ恋愛",
  },
];

// 賛否両論の投稿データ
const controversialPosts = [
  {
    username: "TK",
    handle: "taku_kimura",
    time: "5時間前",
    content: "気になる子がいるけど、告白するタイミングが難しい…普通に友達として見られてるだけかもだしな😅",
    likes: 50,
    retweets: 20,
    replies: 30,
    profileImageUrl: "/images/crab.jpg",
    malePercentage: 60,
    femalePercentage: 40,
  },
  {
    username: "田中 美沙",
    handle: "misa_tanaka",
    time: "6時間前",
    content: "今日は偶然、帰り道が一緒になって少し話せたけど、もっとちゃんと誘いたいな。でも、タイミングが難しい…",
    likes: 35,
    retweets: 10,
    replies: 22,
    profileImageUrl: "/images/bird.jpg",
    malePercentage: 55,
    femalePercentage: 45,
    category: "恋愛",
  }
];
