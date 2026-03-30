import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import styles from "./PortableTextRenderer.module.css";

interface Props {
  value: PortableTextBlock[];
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className={styles.blockquote}>{children}</blockquote>
    ),
    normal: ({ children }) => <p className={styles.p}>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className={styles.link}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className={styles.figure}>
          <Image
            src={urlFor(value).width(800).height(450).fit("crop").url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className={styles.image}
            unoptimized
          />
          {value.caption && (
            <figcaption className={styles.caption}>{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: Props) {
  if (!value || value.length === 0) return null;
  return (
    <div className={styles.root}>
      <PortableText value={value} components={components} />
    </div>
  );
}
