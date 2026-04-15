"use client";

import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
  lazy?: boolean;
}

/**
 * Lightweight YouTube facade. Shows a thumbnail until the user clicks,
 * then swaps in the real iframe. Cuts ~1MB of third-party JS off first load.
 *
 * Stub created to unblock build on 2026-04-15 — original component was
 * missing from the repo. Safe to replace with a richer implementation later.
 */
export default function YouTubeFacade({
  videoId,
  title,
  className,
  lazy = true,
}: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(!lazy);

  if (loaded) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        style={{ border: 0, width: "100%", aspectRatio: "16 / 9" }}
      />
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        border: 0,
        padding: 0,
        cursor: "pointer",
        backgroundColor: "#000",
        backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 68,
          height: 48,
          borderRadius: 8,
          background: "rgba(0,0,0,0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 26,
        }}
      >
        ▶
      </span>
    </button>
  );
}
