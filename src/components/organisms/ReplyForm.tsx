import React, { useState } from "react";
import "./ReplyForm.css"; // CSSをインポート

interface ReplyFormProps {
  onSubmit: (content: string) => void;
}

const ReplyForm: React.FC<ReplyFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (content.trim() === "") return;
    onSubmit(content);
    setContent("");
  };

  return (
    <form className="reply-form" onSubmit={handleSubmit}>
      <textarea
        className="reply-textarea"
        value={content}
        placeholder="返信を入力してください..."
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="reply-button" type="submit">
        返信を投稿
      </button>
    </form>
  );
};

export default ReplyForm;
