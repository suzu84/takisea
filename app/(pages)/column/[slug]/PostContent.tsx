"use client";

import { useEffect, useRef } from "react";
import ScrollHint from "scroll-hint";
import "scroll-hint/css/scroll-hint.css";
import styles from "./page.module.css";

export default function PostContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tables = ref.current.querySelectorAll<HTMLTableElement>(
      "table:not([data-scroll-wrapped])"
    );
    tables.forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "js-scrollable";
      table.setAttribute("data-scroll-wrapped", "true");
      table.parentNode!.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    if (tables.length > 0) {
      new ScrollHint(".js-scrollable", {
        suggestiveShadow: true,
        i18n: { scrollable: "スクロールできます" },
      });
    }
  }, [html]);

  return (
    <div
      ref={ref}
      className={styles.postContent}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
