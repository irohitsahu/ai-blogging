"use client";

import { useRef, useState } from "react";

export function Article() {
  // Define state variables for article outline, copilot text, and article title
  const [articleOutline, setArticleOutline] = useState("");
  const [copilotText, setCopilotText] = useState("");
  const [articleTitle, setArticleTitle] = useState("");

  return (
    // Form element for article input
    <form
      action={""}
      className="w-full h-full gap-10 flex flex-col items-center p-10"
    >
      {/* Input field for article title */}
      <div className="flex w-full items-start gap-3">
        <textarea
          className="p-2 w-full h-12 rounded-lg flex-grow overflow-x-auto overflow-y-hidden whitespace-nowrap"
          id="title"
          name="title"
          value={articleTitle}
          placeholder="Article Title"
          onChange={(event) => setArticleTitle(event.target.value)}
        />
      </div>

      {/* Textarea for article content */}
      <textarea
        className="p-4 w-full aspect-square font-bold text-xl bg-slate-800 text-white rounded-lg resize-none"
        id="content"
        name="content"
        value={copilotText}
        placeholder="Write your article content here"
        onChange={(event) => setCopilotText(event.target.value)}
      />

      {/* Publish button */}
      <button
        type="submit"
        className="p-4 w-full !bg-slate-800 text-white rounded-lg"
      >
        Publish
      </button>
    </form>
  );
}
