import styles from "./InlineVideo.module.css";

interface InlineVideoProps {
  /** Video file path under /public, e.g. "/videos/pregnancy.mp4" */
  src: string;
  /** Poster image shown before play, e.g. "/videos/pregnancy-poster.jpg" */
  poster?: string;
  /** Caption shown below the video */
  caption?: string;
  /** Accessibility label for the video element */
  ariaLabel?: string;
}

/**
 * Inline HTML5 video. Renders responsively (max-width 100%) with browser
 * controls. Poster is loaded eagerly; the video file itself loads its
 * metadata only until the user presses play (preload="metadata").
 */
export default function InlineVideo({
  src,
  poster,
  caption,
  ariaLabel,
}: InlineVideoProps) {
  return (
    <figure className={styles.figure}>
      <video
        className={styles.video}
        src={src}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        aria-label={ariaLabel}
      >
        Your browser doesn&apos;t support embedded video.
      </video>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
