"use client"; // これを最初に追加してクライアントコンポーネントとして指定
import "../../globals.css";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProfileCard from "@/components/template/Profile";
import PostList from "@/components/template/PostList"; // PostListコンポーネントをインポート
import { fetchUserDetail } from "@/lib/api/user";
import { UserDetail } from "@/types/response/user";

const ProfilePage = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"self" | "like">("self"); // 初期タブは「おすすめ」
  const { id } = useParams();
  const [userData, setUserData] = useState<UserDetail | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const handleTabClick = (tab: "self" | "like") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserDetail(Array.isArray(id) ? id[0] : id);
        console.log(user);
        setUserData(user);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, [id]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {userData && <ProfileCard {...userData} />}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "self" ? "active" : ""}`}
          onClick={() => handleTabClick("self")}
        >
          投稿
        </button>
        <button
          className={`tab-button ${activeTab === "like" ? "active" : ""}`}
          onClick={() => handleTabClick("like")}
        >
          いいね
        </button>
      </div>
      <div className="post-list-container">
        {activeTab === "self" && <PostList posts={selfPosts}  replyable={false}/>}
        {activeTab === "like" && <PostList posts={likePosts}  replyable={false}/>}
      </div>
    </div>
  );
};

export default ProfilePage;

// おすすめの投稿データ
const selfPosts = [
  // {
  //   id: 1,
  //   username: "高原陽太",
  //   handle: "高原陽太18",
  //   time: "1時間前",
  //   content: "高原モルペット始めてみました！よろしくお願いいたします",
  //   likes: 3,
  //   retweets: 7,
  //   replies: 0,
  //   profileImageUrl: "/images/lion.jpg",
  //   category: "面白恋愛",
  // },
  // {
  //   id: 1,
  //   username: "高原陽太",
  //   handle: "高原陽太18",
  //   time: "1時間前",
  //   content: "彼女の誕生日旅行前日23:00に家に泊まるはずだったのに深夜の2:00まで連絡つかなかった。 しかも男友達と遊んでいたのがまじでショック。。。。。 これみんなはどう思う？？意見を聞きたい",
  //   likes: 8,
  //   retweets: 7,
  //   replies: 30,
  //   profileImageUrl: "/images/lion.jpg",
  //   category: "面白恋愛",
  // },
  {
    id: 1,
    username: "応援団長",
    handle: "room8",
    time: "1時間前",
    content: "投票してください！お願いします！",
    likes: 220,
    retweets: 5,
    replies: 10,
    profileImageUrl: "/images/azarashi.jpg",
    category: "ときめき",
  },
  {
    id: 1,
    username: "応援団長",
    handle: "room8",
    time: "1時間前",
    content: "発表頑張れー",
    likes: 620,
    retweets: 8,
    replies: 14,
    profileImageUrl: "/images/azarashi.jpg",
    category: "ときめき",
  },
  {
    id: 1,
    username: "応援団長",
    handle: "room8",
    time: "1時間前",
    content: "この発表面白い！絶対投票しよう！",
    likes: 8,
    retweets: 7,
    replies: 30,
    profileImageUrl: "/images/azarashi.jpg",
    category: "ときめき",
  },
];

// フォロー中の投稿データ
const likePosts = [
  {
    id: 120,
    username: "メンヘラぺんぎん",
    handle: "love_takahara",
    time: "3時間前",
    content: "彼に『次の週末空いてる？』って聞かれて、嬉しすぎて即返信しちゃったけど、返事が来ない。何で？もしかして軽く見られた？不安でいっぱい…😢",
    likes: 15,
    retweets: 4,
    replies: 6,
    profileImageUrl: "/images/penguin.jpg",
    category: "片思い",
  },
  {
    id: 1299,
    username: "ひもになりたい",
    handle: "himo_love",
    time: "4時間前",
    content: "彼女が『結婚したら、私が貯金担当ね！』って言ってきたから、冗談で『じゃあ、俺は使う専門で』って返したら、真顔で『いや、稼ぐ担当だから、使わせねーから』って言われた😳まさかのダメ出し！",
    likes: 80,
    retweets: 7,
    replies: 10,
    profileImageUrl: "/images/elephant.jpg",
    category: "面白恋愛",
  },
  {
    id: 120,
    username: "メンヘラぺんぎん",
    handle: "love_takahara",
    time: "8時間前",
    content: "彼、また返信遅いくせにSNSはバンバン更新してるの何！？私は後回しでいいってこと！？さすがにバカにされてる気分…💢",
    likes: 40,
    retweets: 9,
    replies: 13,
    profileImageUrl: "/images/penguin.jpg",
    category: "イライラ恋愛",
  },
  {
    id: 125,
    username: "辰の落とし前",
    handle: "tastumino_otoshimae",
    time: "9時間前",
    content: "やっぱりドタキャンされた。理由も言わずにただ『ごめん』って…ふざけんなよ。そんな扱いされる覚えないんだけど！？😡",
    likes: 60,
    retweets: 15,
    replies: 25,
    profileImageUrl: "/images/lion.jpg",
    category: "イライラ恋愛",
  },
  {
    id: 120,
    username: "メンヘラぺんぎん",
    handle: "love_takahara",
    time: "10時間前",
    content: "今日も彼からおやすみLINE来た💕毎晩ちゃんと連絡くれるのが嬉しくて、もう寝る前に彼のこと考えない日なんてないな〜🥰",
    likes: 45,
    retweets: 10,
    replies: 17,
    profileImageUrl: "/images/penguin.jpg",
    category: "ときめき",
  },
  {
    id: 120,
    username: "メンヘラぺんぎん",
    handle: "love_takahara",
    time: "10時間前",
    content: "デート中、彼が何も言わずに私の手をぎゅって握ってきた時、もう本当に離れたくないって思った💖ずっとこの瞬間が続けばいいのに…",
    likes: 45,
    retweets: 10,
    replies: 17,
    profileImageUrl: "/images/penguin.jpg",
    category: "ときめき",
  },
];
