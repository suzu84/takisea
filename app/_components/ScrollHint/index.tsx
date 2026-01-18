"use client";

import { useEffect, ReactNode } from 'react';
import ScrollHint from 'scroll-hint';
import 'scroll-hint/css/scroll-hint.css';

interface ScrollHintProps {
  children: ReactNode;
  selector?: string; // ターゲットにするクラス名（デフォルトは .js-scrollable）
}

export default function ScrollHintComponent({ 
  children, 
  selector = '.js-scrollable' 
}: ScrollHintProps) {
  
useEffect(() => {
  // 「const scrollHint = 」を削除して、直接 new する
  new ScrollHint(selector, {
    suggestiveShadow: true,
    i18n: {
      scrollable: 'スクロールできます'
    }
  });
}, [selector]);

  return <>{children}</>;
}