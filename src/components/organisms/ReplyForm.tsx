import React, { useState } from "react";

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
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">replyを投稿</button>
    </form>
  );
};

export default ReplyForm;
