"use client";

import { useState } from "react";
import type { TOCItem } from "@/lib/toc";
import styles from "./index.module.css";

type Props = {
  items: TOCItem[];
};

export default function TableOfContents({ items }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  if (items.length === 0) return null;

  return (
    <nav className={styles.toc}>
      <div className={styles.tocHeader}>
        <span className={styles.tocTitle}>目次</span>
        <button
          className={styles.tocToggle}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "−" : "＋"}
        </button>
      </div>
      {isOpen && (
        <ol className={styles.tocList}>
          {items.map((item, i) => (
            <li
              key={i}
              className={item.level === 3 ? styles.h3Item : styles.h2Item}
            >
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
